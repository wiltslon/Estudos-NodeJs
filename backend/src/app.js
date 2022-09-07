import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import routes from './routes'
class App{

    constructor(){
        this.server = express();

        this.database();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.server.use(cors());
        this.server.use(express.json());
    }
    
    database(){
        mongoose.connect("mongodb+srv://wiltslon:741425136@cluster0.qltsnru.mongodb.net/?retryWrites=true&w=majority")
    }

    routes(){
        this.server.use(routes);
    }

//app.get('/teste', (request, response)=>{
//    return response.send("ok2");
//});

}
export default new App().server;