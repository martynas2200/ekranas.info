import * as nodemailer from 'nodemailer';
import * as pug from 'pug';
import * as fs from 'fs';
import * as path from 'path';

// let transporter;
export class Mail {
    transporter: any;
    constructor() {
        if (process.env.NODE_ENV === 'production') {
        this.transporter = nodemailer.createTransport({
          sendmail: true,
          newline: 'unix',
          path: '/var/email',
          dkim: {
            domainName: "ekranas.info",
            keySelector: "2019",
            privateKey: fs.readFileSync("/etc/letsencrypt/live/ekranas.info/privkey.pem")
          }
        });
        } else {
          this.transporter = nodemailer.createTransport({
            sendmail: true,
            newline: 'unix',
            path: '/var/email',
          });
        }
    }
    public async sendtoAdmin(subject: string, data: Object) {
      return this.transporter.sendMail({
        from: '"Ekranas.info" <logs@ekranas.info>',
        to: 'martynas2200@gmail.com',
        subject: subject, 
        text: JSON.stringify(data)
      });
    }

    public async send(email: string, subject: string, template: string, data: Object) {
      return this.transporter.sendMail({
        from: '"Ekranas.info" <info@ekranas.info>',
        to: email,
        subject: subject, 
        html: pug.renderFile(path.resolve(__dirname,'../../email-templates/' + template), data)
      });
    }

}
