import app from "./app/app";
import env from './environment'

const PORT = env.getPort();
const dbUrl = env.getDBName();

app.withPort(PORT)   
   .withMongoDb(dbUrl)
   .withRoutes()
   .build();