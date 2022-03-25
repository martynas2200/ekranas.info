import "reflect-metadata";
import { DataSource, getRepository } from "typeorm";
import { Db } from "typeorm-static";
import * as express from "express";
import * as path from "path";
// import * as expressValidator from "express-validator";
import * as ExpressSession from "express-session";
import * as bodyParser from "body-parser";
import helmet from "helmet";
import * as cors from "cors";
import routes from "./routes/index";
import { Session } from "./entity/Session";
import { TypeormStore } from "connect-typeorm/out";
import * as http from "http";
import * as https from "https";
import * as fs from "fs";
import { getScreenByKey } from "./controllers/ScreenController";
import { Discipline } from "./entity/Discipline";
import { Image } from "./entity/Image";
import { Notification } from "./entity/Notification";
import { School } from "./entity/School";
import { Time } from "./entity/Time";
import { Timetable } from "./entity/Timetable";
import { User } from "./entity/User";
export var socket:any;

declare module 'express-session' {
  export interface SessionData {
    user: User;
  }
}
export const dataSource = new DataSource({
  type: "mysql",
  host: ((process.env.NODE_ENV !== 'production') ? "145.239.94.18" : "localhost"),
  port: 4606,
  username: "samareql",
  password: "9stRbZHxw!",
  database: "ekranas",
  synchronize: true,
  logging: false,
  entities: [Discipline, Image, Notification, School, Session, Time, Timetable, User],
  migrations: [],
  subscribers: [],
});


// const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//     //
//     // - Write to all logs with level `info` and below to `combined.log` 
//     // - Write all logs error (and below) to `error.log`.
//     //
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' })
//   ]
// });




  
  
dataSource.initialize().then(async connection => {
    // Create a new express application instance
    const app = express();
    // app.use(winston.requestDetails);
    
    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
    
    app.use(ExpressSession({
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore({
        cleanupLimit: 2,
        limitSubquery: false,
        ttl: 3600
      }).connect(dataSource.getRepository(Session)),
      secret: 'Zf6l#er83TiZ2'
    }));
    // First check for files
    app.use('/img', express.static(path.resolve(__dirname, '../img/')));
    app.use('/show', express.static(path.resolve(__dirname, '../show/')));
    app.use(express.static(path.resolve(__dirname, '../public/')));
    // Set all routes from routes folder
    app.use("/", routes);
    let server;
    if (process.env.NODE_ENV === 'production') {
      const options = {
        cert: fs.readFileSync("/etc/letsencrypt/live/ekranas.info/fullchain.pem"),
        key: fs.readFileSync("/etc/letsencrypt/live/ekranas.info/privkey.pem"),
        ca: fs.readFileSync('/etc/letsencrypt/live/ekranas.info/chain.pem')
      };
      server = https.createServer(options, app);
      server.listen(443);
      http.createServer(function (req, res) {
        res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
        res.end();
      }).listen(80);
    } else {
      server = http.createServer(app);
      server.listen(3000, () => {
        console.log("Server started on port 3000, development!");
      });
    }
    // socket = require('socket.io').listen(server, {
    //   serveClient: (process.env.NODE_ENV === 'production') ? false : true,
    //   path: '/socket.io'
    // });
    // socket.use(async (socket, next) => {
    //   const header = socket.handshake.query.token;
    //   if (!header) return next(new Error('no authentication token'));
    //   var screen = await getScreenByKey(header);
    //   if (!screen) return next(new Error('authentication error'));
    //   else {
    //     socket.screen = { name:screen.name, id:screen.id, school: {id: screen.school.id}};
    //     return next();
    //   }
    // });
    // socket.on('connection', function(socket: any) {
    //   console.log('a user connected');
    //   socket.join(socket.screen.school.id);
    //   socket.on('disconnect', function(socket: any) {
    //     console.log('disconnect');
    //   });
    //   socket.on('chat message', function(msg){
    //     socket.emit('chat message', msg);
    //   });
    // });
    

  }).catch(error => console.log(error));