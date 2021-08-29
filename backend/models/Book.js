const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function(){return slug(this.title)}
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    longDescription: {
        type: String
    },

})

module.exports = mongoose.model('book', bookSchema)
