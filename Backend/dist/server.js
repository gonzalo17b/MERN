"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const environment_1 = require("./environment");
const PORT = environment_1.default.getPort();
const dbUrl = environment_1.default.getDBName();
app_1.default.withPort(PORT)
    .withMongoDb(dbUrl)
    .withRoutes()
    .build();
