"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.baseUrl = '/api/user';
        this.userController = new userController_1.UserController();
    }
    route(app) {
        app.post(this.baseUrl, (req, res) => {
            this.userController.add(req, res);
        });
        app.get(`${this.baseUrl}/:id`, (req, res) => {
            this.userController.get(req, res);
        });
        app.put(`${this.baseUrl}/:id`, (req, res) => {
            this.userController.update(req, res);
        });
        app.delete(`${this.baseUrl}/:id`, (req, res) => {
            this.userController.delete(req, res);
        });
    }
}
exports.UserRoutes = UserRoutes;
