import * as nodemailer from 'nodemailer';
import * as pug from 'pug';
import * as fs from 'fs';
import * as path from 'path';

// let transporter;
export class Mail {
    transporter: any;
    constructor() {
        this.transporter = nodemailer.createTransport({
          pool: true,
          host: "smtp-relay.sendinblue.com",
          port: 587,
          secureConnection: false,
          auth: {
            user: process.env.SENDING_BLUE_USER,
            pass: process.env.SENDING_BLUE_PASS
          }
        });
    }
    public async sendtoAdmin(subject: string, data: Object) {
      return this.transporter.sendMail({
        from: '"Ekranas.info" <logs@ekranas.info>',
        to: 'admin@ekranas.info',
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
