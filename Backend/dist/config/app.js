"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const environment_1 = require("../environment");
const user_routes_1 = require("../routes/user_routes");
const common_routes_1 = require("../routes/common_routes");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost/' + environment_1.default.getDBName();
        this.test_routes = new user_routes_1.TestRoutes();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    withPort(port) {
        this.port = port;
        return this;
    }
    withRoutes() {
        this.test_routes.route(this.app);
        this.common_routes.route(this.app);
        return this;
    }
    withMongoDb() {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
        return this;
    }
    build() {
        this.app.listen(this.port, () => {
            console.log('Express server listening on port ' + this.port);
        });
        return this;
    }
}
exports.default = new App();
