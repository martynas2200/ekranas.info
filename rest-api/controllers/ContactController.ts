import { Request, Response } from "express";
import { Mail } from "./Mail";
// import { getRepository, MoreThanOrEqual } from "typeorm";
// import { Image } from "../entity/Image";
// import { School } from "../entity/School";

class ContactController {

    static message = async (req: Request, res: Response) => {
        const mailer = new Mail();
        try {
            await mailer.sendtoAdmin('Nauja žinutė palikta', req.body);
            res.status(201).send({
                success: true,
                message: "Žinutė išsiųsta"
            });
        } catch (error) {
            res.send(500).send("Įvyko klaida, parašyk žinutę dešinėje gyvam pokalbiui.");
        }
    };
    static log = async (req: Request, res: Response) => {
        const mailer = new Mail();
        try {
            await mailer.sendtoAdmin('Logs', req.body);
            res.status(201).send();
        } catch (error) {
            res.send(500).send();
        }
        
    };

};

export default ContactController;