import app from "./app/app";
import env from './environment'

const PORT = env.getPort();

const dbName = env.getDBName();
const dbUser = env.getDbUserAndPassword();

app.withPort(PORT)   
   .withMongoDb(dbUser, dbName)
   .withRoutes()
   .build();