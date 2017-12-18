import mongoose from 'mongoose'
import constants from './constants'

mongoose.Promise = global.Promise
mongoose.connect(constants.MONGO_URL, { useMongoClient: true }).then( () =>{
    console.log(`
                Connected to the DB @ : ${constants.MONGO_URL}
    `)
}).catch(e => {
    console.log(`
                Error Connecting to DB: ${e.message}            
    `)
})
