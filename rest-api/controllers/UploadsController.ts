import { Request, Response } from "express";
import { getRepository, MoreThanOrEqual } from "typeorm";
import { validate } from "class-validator";
import * as path from "path";
import 'express-fileupload';
import { Image } from "../entity/Image";
import { School } from "../entity/School";

class UploadsController {

    static logoUpload = async (req: Request, res: Response) => {
        if (Object.keys(req.files).length == 0) {
            res.status(400).send('Serveris negavo failo. Parašyk žinutę dešinėje pagalbai!');
            return;
        }

        let image = req.files.image as any;

        const newName = image.md5 + path.extname(image.name);
        const filesLocation = path.join(__dirname, 'img/logos/', newName);
        const publicLocation = path.join('/img/logos/', newName);

        // Use the mv() method to place the file somewhere on your server
        image.mv(filesLocation, async function (err) {
            if (err) {
                err.dd = filesLocation;
                res.status(500).send(err);
                return;
            }
            try {
                await getRepository(School).save({
                    id: req.session.user.school.id,
                    logo: publicLocation
                });
                req.session.user.school.logo = publicLocation;
                res.send({
                    message: 'Logotipas sėkmingai įkeltas ir pakeistas!',
                    url: publicLocation
                });
                return;
            } catch (error) {
                res.status(500).send(error);
                return;
            }
        });
    };


    static imageUpload = async (req: Request, res: Response) => {
        if (Object.keys(req.files).length == 0) {
            res.status(400).send('Serveris negavo failo. Parašyk žinutę dešinėje pagalbai');
            return;
        }

        // The name of the input field is used to retrieve the uploaded file
        let image = req.files.image as any;

        if (image.truncated) {
            res.status(413).send('Failas viršijo dydį');
            return;
        }
        const types: Array<string> = ['image/bmp', 'image/gif', 'image/x-freehand', 'image/x-freehand', 
        'image/x-freehand', 'image/x-icon', 'image/jpeg', 'image/jpeg', 'image/jpeg', 
        'image/png', 'image/svg+xml', 'image/tiff', 'image/tiff']; 
        if (types.findIndex( x => x == image.mimetype) === -1) {
            res.status(400).send('Failas netinkamo formato. Prašome pasirinkti nuotrauką.');
            return;
        }

        const newName = image.md5 + path.extname(image.name);
        const filesLocation = path.join('img/uploads/', newName);
        const publicLocation = path.join('/img/uploads/', newName);

        // Use the mv() method to place the file somewhere on your server
        image.mv(filesLocation, async function (err) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            else {
                let uploadedImage: any = {
                    name: image.name,
                    size: image.size,
                    url: publicLocation,
                    user: req.session.user,
                    school: req.session.user.school
                };
                const ImagesRepository = getRepository(Image);
                try {
                    let imageRef = await ImagesRepository.save(uploadedImage);
                    delete imageRef.user;
                    delete imageRef.school;

                    res.send({
                        message: 'Nuotrauka ' + image.name + ' sėkmingai įkelta!',
                        image: imageRef
                    });
                    return;
                } catch (error) {
                    res.status(500).send(error);
                    return;
                }
            }
        });

    };

};

export default UploadsController;