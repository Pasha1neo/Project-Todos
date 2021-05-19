const { Schema, model } = require('mongoose')
const schema = new Schema({
    text: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = model('Todo', schema)
