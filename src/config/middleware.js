import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

export default app =>  {

    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    if(isDev) {
        app.use(morgan('dev'))
    }
}