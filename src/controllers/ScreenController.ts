
import { Request, Response } from "express";
import { getRepository, MoreThanOrEqual, LessThanOrEqual, MoreThan, LessThan } from "typeorm";
import * as xmlToJson from 'xml-to-json-stream';
const parser = xmlToJson({ attributeMode: false });
import { Screen } from "../entity/Screen";
import { Timetable } from "../entity/Timetable";
import { IsDateInRange } from "./Functions";
import { Notification } from "../entity/Notification";
import { format } from "date-fns";
import { Time } from "../entity/Time";
import { School } from "../entity/School";

// TypeORM query operators polyfills
enum EDateType {
  Date = "yyyy-MM-dd",
  Datetime = "yyyy-MM-dd HH:MM:SS"
};

const MoreThanDate = (date: Date, type: EDateType) => MoreThan(format(date, type));
const MoreThanOrEqualDate = (date: Date, type: EDateType) => MoreThanOrEqual(format(date, type));
const LessThanDate = (date: Date, type: EDateType) => LessThan(format(date, type));
const LessThanOrEqualDate = (date: Date, type: EDateType) => LessThanOrEqual(format(date, type));

export { MoreThanDate, MoreThanOrEqualDate, LessThanDate, LessThanOrEqualDate, EDateType };
export const getCurrentSemester = (school: School) => {
    if (new Date(school.secondSemester).getTime() <= new Date().getTime() && new Date().getTime() <= new Date(school.endSemesters).getTime()) return 2;
    else if (new Date(school.firstSemester).getTime() <= new Date().getTime() && new Date().getTime() <= new Date(school.secondSemester).getTime()) return 1;
    else return 0;
};

export const getScreenByKey = async (clue: string) => {
    const screenReposity = await getRepository(Screen);
    try {
        const screen = await screenReposity.findOneOrFail({
            where: { clue }
        });
        return screen;
    } catch (error) {
        return false;
    }
};

const getContentByURL = (url) => {
    return new Promise((resolve, reject) => {
        const http = require('http'),
            https = require('https');

        let client = http;

        if (url.toString().indexOf("https") === 0) {
            client = https;
        }

        client.get(url, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data);
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
};

class WallDataController {
    static dayInfo = async (req: Request, res: Response) => {
        let nameDays: Array<string>;
        await getContentByURL('https://day.lt/dienos_vardadieniai?charset=utf').then((body: string) => {
            body = body.replace(new RegExp(/document.write\(\'/, 'g'), '');
            body = body.replace(new RegExp(/\'\)\;/, 'g'), '');
            body = body.replace(new RegExp(/\s|\n|\r/, 'g'), '');
            body = body.replace(/(<([^>]+)>)/ig, '');
            nameDays = body.split(',');
        }, error => { });
        let celebrations: Array<string>;
        let horoscopes: Array<{ title: string, description: string }>;
        await getContentByURL('https://day.lt/dienos_info?format=[svente]&charset=utf').then((body: string) => {
            body = body.replace(new RegExp(/document.write\(\'/, 'g'), '');
            body = body.replace(new RegExp(/\'\)\;/, 'g'), '');
            body = body.replace(new RegExp(/\<br \/\>/, 'g'), ',');
            body = body.replace(new RegExp(/[ ]{2,}|\n|\r/, 'g'), '');
            body = body.replace(/(<([^>]+)>)/ig, '');
            celebrations = body.split(',');
        }, error => { });
        await getContentByURL('http://www.vytautus.com/hor_rss.xml').then(async (body: string) => await parser.xmlToJson(body, (err, json: any) => {
            if (!err) {
                // json.rss.channel.pubDate;
                json.rss.channel.item.map(function (item: any) {
                    delete item.link;
                    return item;
                });
                horoscopes = json.rss.channel.item;
            }
        }, error => { }));

        res.status(200).send({
            nameDays,
            celebrations,
            horoscopes
        });
    }
    static weather = async (req: Request, res: Response) => {
        await getContentByURL('https://api.openweathermap.org/data/2.5/weather?id=597231&lang=en&units=metric&appid=815bcde19fc5c6054748ea55195b7fc9&parameters=all').then((body: string) => {
            res.status(200).send(JSON.parse(body));
        }, error => {
            res.status(400).send({});
        });
    }
    static getSettings = async (req: Request, res: Response) => {
        // d2bb50042399a0ac61f39c10e96511fcca11f1c7b9f4a7916db2bcd28dc877e7720a9320bb7c981c475925fe06615fcd53a9004fd9a1beac3eee73d97602aab7fc4613b340eac1dc4a7c989920eeb048e7a5ea87217411091a27
        const clue: string = req.params.clue;
        let screen = await getScreenByKey(clue);
        if (!screen) {
            res.status(401).send({
                clue
            });
            return;
        }


        if (screen.school.restart) {
            screen.school.restart = false;
            try {
                await getRepository(School).save(screen.school);
            } catch (error) {
                console.log(error);
            }
            screen.school.restart = true;
        }


        let times: any;
        try {
            times = await getRepository(Time).findOneOrFail({
                where: {
                    school: screen.school,
                    active: true
                }
            });
            times.times.unshift({ h: 0, m: 0, lesson: false, lessonN: 1 });
        } catch (error) {
            // console.log(error);
            (screen as any).times = [];
            res.status(200).send(screen);
        }
        
        (screen as any).times = times.times;
        res.status(200).send(screen);

    }
    static notifications = async (req: Request, res: Response) => {
        const clue: string = req.params.clue;
        let screen = await getScreenByKey(clue);
        if (!screen) {
            res.status(401).send({
                clue
            });
            return;
        }
        const notificationsRepository = getRepository(Notification);
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        let tommorowDate = new Date();
        tommorowDate.setHours(0, 0, 0, 0);
        tommorowDate.setDate(currentDate.getDate() + 1);
        let notifications: any;
        notifications = await notificationsRepository.find({
            where: [{
                school: screen.school.id,
                date1: currentDate,
                visibility: true,
                deletedAt: null
            }, {
                school: screen.school.id,
                date1: LessThanOrEqual(currentDate),
                date2: MoreThanOrEqual(currentDate),
                visibility: true,
                repeatTimes: true,
                deletedAt: null
            }],
            relations: ["images"]
        });
        let notifications2: any;
        notifications2 = await notificationsRepository.find({
            where: [{
                school: screen.school.id,
                date1: tommorowDate,
                showBefore: true,
                visibility: true,
                deletedAt: null
            }],
            relations: ["images"]
        });
        const dayNames: Array<string> = ['Sekmadienį', 'Pirmadienį', 'Antradienį', 'Trečiadienį', 'Ketvirtadienį', 'Penktadienį', 'Šeštadienį', 'Sekmadienį'];
        notifications.forEach(element => {
            element.day = 'Šiandien';
        });
        notifications2.forEach(element => {
            element.day = dayNames[tommorowDate.getDay()];
        });
        res.status(200).send({
            notifications: new Array().concat(notifications, notifications2),
            // notifications2,
            currentDate,
            tommorowDate
        });
    }
    static timetable = async (req: Request, res: Response) => {
        const clue: string = req.params.clue;
        let screen: any = await getScreenByKey(clue);
        if (!screen) {
            res.status(401).send({
                clue
            });
            return;
        }
        let semester = getCurrentSemester(screen.school);
        if (!semester) screen.school.showTimetable = false;
        const day = new Date().getDay();
        
        if (!screen.school.showTimetable) {
            res.send({
                semester,
                weekDay: day,
                lessons: [],
                show: false
            });
            return;
        }

        // use custom bilder
        const lessons = await getRepository(Timetable).find({
            where: { weekDay: day, semester, school: screen.school },
            select: ['className', 'lessonNr'],
            relations: ['discipline']
        });

        await lessons.sort((a, b) => {
            if(a.className < b.className) { return -1; }
            if(a.className > b.className) { return 1; }
            return 0;
        })


        res.status(200).send({
            semester,
            day,
            lessons
        });

    }

};
export default WallDataController;

//     success: function(openweathermap) {
//       $("#weather").html('<i class="wi ' + ((openweathermap.weather[0].icon == '01n')? 'wi-night-clear' : 'wi-owm-' + openweathermap.weather[0].id) + '"></i><span>' + Math.round(openweathermap.main.temp) + '<i class="wi wi-celsius"></i></span>' +((openweathermap.wind.deg == undefined)? '' : '<i class="wi wi-wind" style="transform: rotate(' + openweathermap.wind.deg + 'deg);padding: 0px 6px;width: 1em;"></i>')  + '<i class="wi ' + ((openweathermap.wind.speed <= 12) ? 'wi-wind-beaufort-' + Math.round(openweathermap.wind.speed) : 'wi-strong-wind') +'"></i>');
//       var sunrise = new Date(openweathermap.sys.sunrise * 1000);
//       var sunset = new Date(openweathermap.sys.sunset * 1000);
//       $("#sr").html(checkTime(sunrise.getHours()) + ':' + checkTime(sunrise.getMinutes()));
//       $("#ss").html(checkTime(sunset.getHours()) + ':' + checkTime(sunset.getMinutes()));
//       setTimeout(weather, 900000); //15min
//     },
//     error: function() {
//       setTimeout(weather, 60000); //1min
//     }
//   });
// this.sunrise = new Date(this.data.sys.sunrise * 1000).getHours() + ':' + this.checkTime(new Date(this.data.sys.sunrise * 1000).getMinutes());
//       this.sunset = new Date(this.data.sys.sunset * 1000).getHours() + ':' + this.checkTime(new Date(this.data.sys.sunset * 1000).getMinutes());
//       this.weatherr = '<i class="wi ' + ((this.data.weather[0].icon == '01n') ? 'wi-night-clear' : 'wi-owm-' + this.data.weather[0].id) + '"></i><span>' + Math.round(this.data.main.temp) + '<i class="wi wi-celsius"></i></span>' + ((this.data.wind.deg == undefined) ? '' : '<i class="wi wi-wind" style="transform: rotate(' + this.data.wind.deg + 'deg);padding: 0px 6px;width: 1em;"></i>') + '<i class="wi ' + ((this.data.wind.speed <= 12) ? 'wi-wind-beaufort-' + Math.round(this.data.wind.speed) : 'wi-strong-wind') + '"></i>';
