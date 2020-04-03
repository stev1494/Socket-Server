import Server from "./clasess/server";
import { SERVER_PORT } from "./global/environment";
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';




const server = Server.instance;

//BodyParser
server.app.use( bodyParser.urlencoded({ extended: true}));
server.app.use( bodyParser.json() );

//CORS
server.app.use( cors({ origin: true, credentials: true}) );

//Rutas
server.app.use('/', router);



server.start( ()=>{
    console.log(`Servidor en puerto :${ SERVER_PORT}`);
})