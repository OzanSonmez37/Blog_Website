const mongoose = require('mongoose')

const CategoryShema = new mongoose.Schema({
    name: {type: String, required: true, unique: true}
})

module.exports = mongoose.model('Category', CategoryShema)