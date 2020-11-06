import { Application, Request, Response } from 'express';
import { UserController } from '../controllers/userController';

export class UserRoutes {

    private baseUrl :string = '/api/user';
    private userController: UserController = new UserController();

    public route(app: Application) {
        
        app.post(this.baseUrl, (req: Request, res: Response) => {
            this.userController.add(req, res);
        });

        app.get(`${this.baseUrl}/:id`, (req: Request, res: Response) => {
            this.userController.get(req, res);
        });

        app.put(`${this.baseUrl}/:id`, (req: Request, res: Response) => {
            this.userController.update(req, res);
        });

        app.delete(`${this.baseUrl}/:id`, (req: Request, res: Response) => {
            this.userController.delete(req, res);
        });
    }
}