import bodyParser from "body-parser"
import express from "express";
import goldPriceRouter from "./routes/goldPrice.js"
import authRouter from "./routes/auth.js"
import swaggerUi from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import isAuth from "./middlewares/is-auth.js";

async function main() {
    const app = express()

    // Config dotenv
    dotenv.config()

    // Setup de swaggerUI avec swaggerJsDoc
    const swaggerOptions = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Hello World',
                version: '1.0.0',
            },
        },
        apis: ['./routes/*.js'], // files containing annotations as above
    };

    const openapiSpecification = swaggerJsDoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))


    /**
     * urlencoded renvoi une NextHandleFunction dont la signature est celle d'un middleware
     * (req: IncomingMessage, res: http.ServerResponse, next: NextFunction) => void
     * Ce code permet d'ajouter à express un middleware de body-parser sur les url encodés
     * (l'option extended permet de choisir entre le parsing de la lib querystring (faux) ou qs (vrai))
     */
    app.use(bodyParser.urlencoded({ extended: false }))

    /**
     * Même fonctionnement qu'au dessus
     * Permet d'utiliser body-parser sur les json
     */
    app.use(bodyParser.json())

    app.get('/', (req, res, next) => {
        res.send('Hello ESGI')
    })

    app.use('/gold-prices', goldPriceRouter)
    app.use('/auth', authRouter)

    try {
        await mongoose.connect(process.env.MONGODB_URI)
    }
    catch (err) {
        console.log(err)
    }

    app.listen(process.env.LISTEN_PORT)
}

main()
