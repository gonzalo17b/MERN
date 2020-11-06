"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedRoutes = void 0;
class SharedRoutes {
    route(app) {
        app.all('*', function (req, res) {
            res.status(404).send({ error: true, message: 'Check your URL please' });
        });
    }
}
exports.SharedRoutes = SharedRoutes;
