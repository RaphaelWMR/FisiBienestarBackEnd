import express, { Application } from 'express';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App running at port ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: express.Request, res: express.Response) => {
            res.json({
                msg: 'API Working'
            });
        });
        /*this.app.use('api/users');*/
    }
}

export default Server;