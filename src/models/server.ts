import express, { Application } from 'express';
import routesAlumno from '../routes/alumno';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App running at port>${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: express.Request, res: express.Response) => {
            res.json({
                msg: 'API Working'
            });
        });
        this.app.use('/api/alumnos', routesAlumno);
    }

    middlewares() {
        //Body parsing
        this.app.use(express.json());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Database connection>Success');
        } catch (error) {
            console.log('Database connection>Fail');
            console.log(error);
        }


    }
}

export default Server;