import mongoose, { Schema } from 'mongoose'
import constants from '../../config/constants'

const TodoSchema = new Schema({
    items: {
        type: String,
        default: '',
    },
})

TodoSchema.statics = {
    list({ skip = 0, limit = 50 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(+skip)
            .limit(+limit)
            .exec();
    }
}

export default mongoose.model('Todo', TodoSchema)
