
import { Request, Response } from "express";
import { getRepository, MoreThanOrEqual, IsNull, Not} from "typeorm";
import { validate } from "class-validator";
import { Notification } from "../entity/Notification";
import { IsDateInRange } from "./Functions";
import { dataSource } from "../index";


class NotificationsController {

static checkNotificationProperties(notification: any): boolean {
  if (!notification) {
    return false;
  }
  if ( notification.hasOwnProperty('date1') &&
  notification.hasOwnProperty('showBefore') &&
  notification.hasOwnProperty('repeatTimes') &&
  notification.hasOwnProperty('note') &&
  notification.hasOwnProperty('important') &&
  notification.hasOwnProperty('author') &&
  notification.hasOwnProperty('displayAuthor') &&
  notification.hasOwnProperty('images')) {
    return true;
  }
  else return false;
};

static returnDateString(date: Date): string {
  if (!date) {
    return '0000-00-00';
  }
  let dateString = date.getFullYear() + '-';
  if(date.getMonth() + 1 < 10) dateString += '0';
  dateString += (date.getMonth() + 1) + '-';
  if(date.getDate() < 10) dateString += '0';
  dateString += date.getDate();
  return dateString;
};

static listAll = async (req: Request, res: Response) => {
  //Get notifications from database
  const notificationsRepository = await dataSource.getRepository(Notification);
  let notifications: any;
  //We dont want to send the passwords on response
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  if (req.query.type == 'archive') {
    notifications = await notificationsRepository.find({
      where: {
        school: req.session.user.school,
        deletedAt: null
      },
      relations: ["user", "images"]
    });
  }
  else if (req.query.type == 'deleted') {
    notifications = await notificationsRepository.find({
      where: {
        school: req.session.user.school,
        deletedAt: Not(IsNull())
      },
      relations: ["user", "images"]
    });
  }
  else {
    notifications = await notificationsRepository.find({
      where: [{
        school: req.session.user.school,
        date1: MoreThanOrEqual(currentDate),
        deletedAt: IsNull()
      },{
        school: req.session.user.school,
        date2: MoreThanOrEqual(currentDate),
        deletedAt: IsNull()
      }
    ],
      relations: ["user", "images"]
    });
  }

  notifications.forEach(el => {
    
    // (el as any).relevant = IsDateInRange(el.date1, el.date2, el.repeatTimes) || IsDateInRange(el.date1, el.date2, el.repeatTimes, true);
    if (req.query.type == 'deleted') (el as any).rights = false;
    else if (req.session.user.role) (el as any).rights = true;
    else (el as any).rights = (el.user.id == req.session.user.id) ? true : false;
    delete el.user;
    
  });


  //Send the notifications object
  res.send({
    notifications
  });
};

// static getOneById = async (req: Request, res: Response) => {
//   //Get the ID from the url
//   const id: number = parseInt(req.params.id);
//   if(!id) {
//     res.status(400).send({
//       success: false,
//       message: 'Netinkamas id!'
//     });
//     return;
//   }

//   //Get the notification from database
//   const notificationsRepository = await dataSource.getRepository(Notification);
//   try {
//     const notification = await notificationsRepository.findOneOrFail(id);
//     res.status(200).send({
//       success: true,
//       notification: notification
//     });

//   } catch (error) {
//     res.status(404).send({
//       success: false,
//       message: 'Pranešimas nerastas'
//     });
//     return;
//   }

// };

static new = async (req: Request, res: Response) => {
  // Get parameters from the body
  // if (!req.body.notification) {
  //   res.status(400).send({
  //     success: false,
  //     message: 'Nėra duomenų'
  //   });
  //   return;
  // }
  // if ( req.body.notification.hasOwnProperty('date1') &&
  // req.body.notification.hasOwnProperty('showBefore') &&
  // req.body.notification.hasOwnProperty('repeatTimes') &&
  // req.body.notification.hasOwnProperty('note') &&
  // req.body.notification.hasOwnProperty('important') &&
  // req.body.notification.hasOwnProperty('author') &&
  // req.body.notification.hasOwnProperty('displayAuthor') &&
  // req.body.notification.hasOwnProperty('images')) {}
  // else {
  //   res.status(400).send({
  //     success: false,
  //     message: 'Nėra visų parametrų'
  //   });
  //   return;
  // }
  if(!NotificationsController.checkNotificationProperties(req.body.notification)) {
    res.status(400).send({
      success: false,
      message: 'Nėra visų parametrų'
    });
    return;
  }
  
  let notification = req.body.notification as Notification;
  // Examine first date
  notification.date1 = new Date(req.body.notification.date1);
  let currentDate = new Date();
  currentDate.setHours(0,0,0,0); // Milliseconds reduces likelihood, that notification will be saved exactly 00:00:00:00
  if (notification.date1 < currentDate) {
    res.status(400).send({
      message: 'Nėra prasmės saugoti seną pranešimą.'
    });
    return;
  }
  if (notification.note == '' && notification.images.length == 0) {
    res.status(400).send({
      message: 'Nėra prasmės saugoti tuščią pranešimą.'
    });
    return;
  }
  // Examine second date
  if (notification.repeatTimes) {
    if (!notification.date2) {
      res.status(400).send({
        message: 'Pranešimo kartojimo data neteisinga.'
      });
      return;
    }
    else {
      notification.date2 = new Date(req.body.notification.date2);
    }
    if (notification.date1 >= notification.date2) {
      res.status(400).send({
        message: 'Pranešimo kartojimo data negali būti mažesnė.'
      });
      return;
    }
  } else {
    notification.date2 = null;
  }

  // Designate school and user
  notification.user = req.session.user;
  notification.school = req.session.user.school;
  notification.type = ((notification.images.length > 0) ? 'image' : 'note');

  // Try save new notification
  const notificationsRepository = await dataSource.getRepository(Notification);
  try {
    await notificationsRepository.save(notification);
  } catch (e) {
    res.status(409).send({
      success: false,
      message: 'Nepavyko įrašyti pranešimo',
      error: e
    });
    return;
  }
  // OK, send 201 response
  res.status(201).send({
    success: true,
    message: 'Pranešimas sėkmingai išsaugotas',
    notification: notification
  });

};

static toggleVisibility = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  const notificationRepository = await dataSource.getRepository(Notification);
  // Try to find notification on database
  let notification: Notification;
  try {
    notification = await notificationRepository.findOneOrFail({
      where: {
        school: req.session.user.school,
        id
      },
      relations: ["user"]
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: 'Pranešimas nerastas'
    });
    return;
  }
  notification.visibility = !notification.visibility; 

  // User rights
  if (req.session.user.role == 0 && notification.user.id != req.session.user.id) {
    res.status(400).send({
      message: 'Neturite teisių redaguoti šį pranešimą!'
    });
    return;
  }

  try {
    notification = await notificationRepository.save(notification);
  } catch (e) {
    res.status(409).send({
      success: false,
      message: 'Pranešimo nepavyko įrašyti',
      error: e
    });
    return;
  }
  res.status(200).send({
    success: true,
    message: (!notification.visibility) ? 'Sėkmingai pranešimas paslėptas!' : 'Pranešimas sėkmingas rodomas!'
  });

};

static update = async (req: Request, res: Response) => {
  //Get the ID from the url
  const id: number = parseInt(req.params.id);
  if(!NotificationsController.checkNotificationProperties(req.body.notification)) {
    res.status(400).send({
      success: false,
      message: 'Nėra visų parametrų'
    });
    return;
  }

  
  const notificationRepository = await dataSource.getRepository(Notification);
  // Try to find notification on database
  let notification: Notification;
  try {
    notification = await notificationRepository.findOneOrFail({
       where: {
        school: req.session.user.school,
        id  
      },
      relations: ['school', 'user']
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: 'Pranešimas nerastas'
    });
    return;
  }

  notification = req.body.notification as Notification;
  notification.date1 = new Date(req.body.notification.date1);

  // Examine second date
  if (notification.repeatTimes) {
    notification.date2 = new Date(req.body.notification.date2);
    if (notification.date1 >= notification.date2) {
      res.status(400).send({
        message: 'Pranešimo kartojimo data negali būti mažesnė.'
      });
      return;
    }
    if (!notification.date2) {
      res.status(400).send({
        message: 'Pranešimo kartojimo data neteisinga.'
      });
      return;
    }
  } else {
    notification.date2 = null;
  }
  if (req.session.user.role == 0 && notification.user.id != req.session.user.id) {
    res.status(400).send({
      message: 'Neturite teisių redaguoti šį pranešimą!'
    });
    return;
  }

  try {
    notification = await notificationRepository.save(notification);
  } catch (e) {
    res.status(409).send({
      success: false,
      message: 'Pranešimo nepavyko įrašyti',
      error: e
    });
    return;
  }
  // Correct Date strings
  (notification.date1 as any) = NotificationsController.returnDateString(notification.date1);
  if (notification.date2) {
    (notification.date2 as any) = NotificationsController.returnDateString(notification.date2);
  } 
  // After all send response without user data
  delete notification.user;
  res.status(200).send({
    success: true,
    message: 'Pranešimas išsaugotas',
    notification: notification
  });
};





static delete = async (req: Request, res: Response) => {
  //Get the ID from the url
  const id: number = parseInt(req.params.id);
  if(!id) {
    res.status(400).send({
      success: false,
      message: 'Netinkamas id!'
    });
    return;
  }

  const notificationRepository = await dataSource.getRepository(Notification);
  let notification: Notification;
  try {
    notification = await notificationRepository.findOneOrFail({
      where: {
        school: req.session.user.school,
        id
      },
      relations: ['user']
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: 'Pranešimas nerastas!'
    });
    return;
  }
  if (req.session.user.role == 0 && notification.user.id != req.session.user.id) {
    res.status(400).send({
      message: 'Neturite teisių ištrinti šį pranešimą!'
    });
    return;
  }
    notification.deletedAt = new Date();

    try {
      await notificationRepository.save(notification);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Pranešimo ištrinti nepavyko!',
        error
      });
      return;
    }
  // if (notificationRepository.delete(id)) 
  res.status(200).send({
    success: true,
    message: 'Pranešimas sėkmingai perkeltas į ištrintus'
  });

};



};

export default NotificationsController;