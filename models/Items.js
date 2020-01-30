const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema

const ItemsSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})
module.exports = item = mongoose.model('items',ItemsSchema)