"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user_routes_1 = require("./routes/user_routes");
const shared_routes_1 = require("./routes/shared_routes");
class App {
    constructor() {
        this.userRoutes = new user_routes_1.UserRoutes();
        this.sharedRoutes = new shared_routes_1.SharedRoutes();
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    ;
    withPort(port) {
        this.port = port;
        return this;
    }
    withRoutes() {
        this.userRoutes.route(this.app);
        this.sharedRoutes.route(this.app);
        return this;
    }
    withMongoDb(mongo_url) {
        this.mongoUrl = `mongodb://localhost/${mongo_url}`;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
        return this;
    }
    build() {
        this.app.listen(this.port, () => {
            console.log(`Express server running on port ${this.port}`);
        });
        return this;
    }
}
exports.default = new App();
