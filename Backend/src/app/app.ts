import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import { UserRoutes } from "./routes/user_routes";
import { SharedRoutes } from "./routes/shared_routes";

class App {
   public app: express.Application;
   private port : number;
   private mongoUrl: string;;

   private userRoutes: UserRoutes = new UserRoutes();
   private sharedRoutes: SharedRoutes = new SharedRoutes();

   constructor() {
      this.app = express();
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));   
   }

   public withPort(port: number) : App {
      this.port = port;
      return this;
   }

   public withRoutes() : App {
      this.userRoutes.route(this.app);
      this.sharedRoutes.route(this.app);
      return this;
   }

   public withMongoDb(user: [string, string], dbName: string): App {
      this.mongoUrl = `mongodb+srv://${user[0]}:${user[1]}@cluster0.zbvj3.mongodb.net/${dbName}?retryWrites=true&w=majority`;      
      mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
      return this;
   }

   public build () : App{
      this.app.listen(this.port, () => {
         console.log(`Express server running on port ${this.port}`);
      });
      return this;
   }

}
export default new App();