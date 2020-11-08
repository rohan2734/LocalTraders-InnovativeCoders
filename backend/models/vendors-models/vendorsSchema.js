const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vendorsSchema = new Schema({
    vendorName:{type:String,required:true},
    vendorEmailID:{type:String,required:true,unique:true},
    vendorPassword:{type:String,required:true},
    vendorProfileImage:{type:String}
})

module.exports = mongoose.model('vendorsSchema',vendorsSchema);

