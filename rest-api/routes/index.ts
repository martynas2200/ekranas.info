import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import notifications from "./notifications";
import uploads from "./uploads";
import disciplines from "./disciplines";
import timetables from "./timetables";
import settings from "./settings";
import contact from "./contact";
import screen from "./screen";
import { socket } from "../index"
// import * as path from "path";
// import main from "./main";

const routes = Router();

routes.use("/api/auth", auth);
routes.use("/api/users", user);
routes.use("/api/uploads", uploads);
routes.use("/api/notifications", notifications);
routes.use("/api/timetables", timetables);
routes.use("/api/disciplines", disciplines);
routes.use("/api/settings", settings);
routes.use("/api/contact", contact);
routes.use("/api/screen", screen);
routes.get('/show/:key', function (req, res) {
  res.status(200).sendFile('index.html', { root: 'show'});
});
routes.get('/wall/first.txt', function (req, res) {
  res.status(200).sendFile('first.txt', { root: 'img'});
});
routes.get('/connection/test', function (req, res) {
  //socket.emit('chat message', 'hello friends!');
  // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==
  var img = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==', 'base64');
   res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': img.length
   });
   res.end(img); 
});
routes.all('*', function (req, res) {
  res.status(404).sendFile('/index.html', { root: 'public'});
});
// routes.use("/", main);

export default routes;