"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express = require("express");
var path = require("path");
// import * as expressValidator from "express-validator";
var ExpressSession = require("express-session");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var cors = require("cors");
var index_1 = require("./routes/index");
var Session_1 = require("./entity/Session");
var out_1 = require("connect-typeorm/out");
var http = require("http");
var https = require("https");
var fs = require("fs");
var ScreenController_1 = require("./controllers/ScreenController");
// import * as lodash from "lodash";
var winston = require('winston');
var logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});
var ekranasInfoDBConfig = {};
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
    ekranasInfoDBConfig = {
        type: "mysql",
        host: "145.239.94.18",
        port: 4606,
        username: "samareql",
        password: "9stRbZHxw!",
        database: "ekranas",
        synchronize: true,
        logging: false,
        entities: ["src/entity/**/*.ts"],
        migrations: ["src/migration/**/*.ts"],
        subscribers: ["src/subscriber/**/*.ts"],
        cli: {
            entitiesDir: "src/entity",
            migrationsDir: "src/migration",
            subscribersDir: "src/subscriber"
        }
    };
}
else {
    ekranasInfoDBConfig = {
        type: "mysql",
        host: "localhost",
        port: 4606,
        username: "samareql",
        password: "9stRbZHxw!",
        database: "ekranas",
        synchronize: true,
        logging: false,
        entities: ["build/entity/**/*.js"],
        migrations: ["build/migration/**/*.js"],
        subscribers: ["build/subscriber/**/*.js"],
        cli: {
            entitiesDir: "src/entity",
            migrationsDir: "src/migration",
            subscribersDir: "src/subscriber"
        }
    };
}
//Connects to the Database -> then starts the express
typeorm_1.createConnection(ekranasInfoDBConfig)
    .then(function (connection) { return __awaiter(void 0, void 0, void 0, function () {
    var app, server, options;
    return __generator(this, function (_a) {
        app = express();
        // app.use(winston.requestDetails);
        // Call midlewares
        app.use(cors());
        app.use(helmet());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        // When body parsed the time for session :D
        // let sessionRepository = getRepository(Session);
        app.use(ExpressSession({
            resave: false,
            saveUninitialized: false,
            store: new out_1.TypeormStore({
                cleanupLimit: 2,
                limitSubquery: false,
                ttl: 3600
            }).connect(connection.getRepository(Session_1.Session)),
            secret: 'Zf6l#er83TiZ2'
        }));
        // First check for files
        app.use('/img', express.static(path.resolve(__dirname, '../img/')));
        app.use('/show', express.static(path.resolve(__dirname, '../show/')));
        app.use(express.static(path.resolve(__dirname, '../public/')));
        // Set all routes from routes folder
        app.use("/", index_1.default);
        if (process.env.NODE_ENV === 'production') {
            options = {
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
        }
        else {
            server = http.createServer(app);
            server.listen(3000, function () {
                console.log("Server started on port 3000, development!");
            });
        }
        exports.socket = require('socket.io').listen(server, {
            serveClient: (process.env.NODE_ENV === 'production') ? false : true,
            path: '/socket.io'
        });
        exports.socket.use(function (socket, next) { return __awaiter(void 0, void 0, void 0, function () {
            var header, screen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        header = socket.handshake.query.token;
                        if (!header)
                            return [2 /*return*/, next(new Error('no authentication token'))];
                        return [4 /*yield*/, ScreenController_1.getScreenByKey(header)];
                    case 1:
                        screen = _a.sent();
                        if (!screen)
                            return [2 /*return*/, next(new Error('authentication error'))];
                        else {
                            socket.screen = { name: screen.name, id: screen.id, school: { id: screen.school.id } };
                            return [2 /*return*/, next()];
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        exports.socket.on('connection', function (socket) {
            console.log('a user connected');
            socket.join(socket.screen.school.id);
            socket.on('disconnect', function (socket) {
                console.log('disconnect');
            });
            socket.on('chat message', function (msg) {
                socket.emit('chat message', msg);
            });
        });
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log(error); });
//# sourceMappingURL=index.js.map