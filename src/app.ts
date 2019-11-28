import * as express from 'express'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import routes from './routes'
import { config } from 'dotenv'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.enviroment()
        this.database()
        this.middlewares()
        this.router()
    }

    private database(): void {
        mongoose.connect(
            `mongodb://localhost:27017/swagger-demo`,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            },
            () => {
                console.log(
                    `Mongo is connected in port ${process.env.MONGO_DB_PORT}`
                )
            }
        )
    }

    private middlewares(): void {
        this.express.use(express.json())
        // this.express.use(bodyParser.urlencoded({ extended: true }))
        // this.express.use(bodyParser.json())
    }

    private router(): void {
        this.express.use(routes)
    }

    private enviroment(): void {
        config({ path: this.envFile() })
    }

    private envFile(): string {
        const ENVFILE: string = !!process.env.NODE_ENV
            ? `.env-${process.env.NODE_ENV}`
            : '.env'
        const ENVDIR: string = process.cwd()
        return `${ENVDIR}/${ENVFILE}`
    }
}

export default new App().express
