const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const investorsSchema = new Schema({
    investorName:{type:String,required:true},
    investorEmailID:{type:String,required:true,unique:true},
    investorPassword:{type:String,required:true},
    investorProfileImage:{type:String}
})

module.exports = mongoose.model('investorsSchema',investorsSchema);

