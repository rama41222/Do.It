import express from 'express'
import middleware from './src/config/middleware'
import routes from './src/modules/index.routes'
import './src/config/database'
import constants from './src/config/constants'

const app = express()
middleware(app)
routes(app)

app.listen(constants.PORT, e => {
    if(e) {
        console.log(e.message)
    }
    console.log(`
                Server running on port ${constants.PORT}
                Environment: ${process.env.NODE_ENV}
    `)
})