const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bussinessSchema = new Schema({
    bussinessName:{type:String,required:true},
    bussinessLocation:{type:String,required:true},
    previousYearBudget:{type:Number},
    currentYearBudgetAndSales:{type:String,required:true},
    bussinessDescription:{type:String,required:true,unique:true},
    bussinessAccountBalance:{type:Number},
    bussinessImage:{type:String}, //image url
    bussinessDocuments:{type:String}, //files url
    vendorID:{type:mongoose.Types.ObjectId,required:true,ref:'vendorsSchema'}
})

module.exports = mongoose.model('bussinessSchema',bussinessSchema);

