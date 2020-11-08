const HttpError = require('../error_handler/http-error');
const vendorsSchema = require('../models/vendors-models/vendorsSchema');
const VendorsSchema = require('../models/vendors-models/vendorsSchema');

const postShareInInvestments = (req,res,next) => {
    //get Data from req.body
    const vendorID = req.param.vendorID;
    
    //search the vendor in the database

    //get investors details

    //get weekly investor details, monthly investor details, yearly investor details

    //get weekly investor join date, end date,
    //get monthly investor join date, end date,
    //get yearly investor join date, end date,

    //get initial business account balance

    //add vendors investment to business accnt
    
    //for initial week and week end date
    //take that particular dates investors
    //add their investment to the businness act

    //add the monthly investors investment whose dates match and are valid
    //add yearly investors investment, whose dates match and is valid
    //add these both to the business account

    //initialize the rupee value, and calculate the shares percentage and assign it to the variables

    // take the week end values
    //caclulate the rupee value
    // calculate the share values for the particular weekly term vendors whose dates match
    // take 20% from their profits
    //calculate the initial value for the monthly investors and yearly investors with rupee value and previous shares
    //add the 20% to the yearly investors to their shares

    // take the month end values,
    //calculate the rupee value
    // calculate the share values for the particular monthly term vendors whose dates match
    //calculate the initial value for the monthly investors and yearly investors with rupee value and previous shares


    //take the year end values
    //calculate the rupee value
    //calculate the share values for the particular yearly term vendors whose dates match
    //calculate the initial value for all the investors again till the vendors stops considering funds from the investors  for the budget


}

const vendorsSignup =async (req,res,next) => {
    const {vendorName,vendorEmailID,vendorPassword} = req.body;

    const vendorProfileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8K9TdeuJNHtTMH-JaUph5CgQ7P1nYgx8z9w&usqp=CAU";

    let existingVendor; 

    try{
        existingVendor = await VendorsSchema.findOne({vendorEmailID:vendorEmailID})
    }catch(err){
        const error = new HttpError(
            "signingup of vendor failed",500
        );
        return next(error);
      
    }
    
    if(existingVendor){
        const error = new HttpError(
            "vendor exists already,please login instead",422
        );
        return next(error);
    }

    const createVendor = new VendorsSchema({
        vendorName,
        vendorEmailID,
        vendorPassword,
        vendorProfileImage
    })

    try{
       await createVendor.save();
    }catch(err){
        const error = new HttpError(
            "signingup of vendor failed",500
        );
        return next(error);
       
    }

    res.status(201).json({vendorDetails:createVendor});
}

const vendorsLogin = async (req,res,next) => {
    const {vendorEmailID,vendorPassword} = req.body;

    let existingVendor;
    try{
        existingVendor = await vendorsSchema.findOne({vendorEmailID});
    }catch(err){
        const error = new HttpError(
            "fetching vendor failed",500
        );
        return next(error);
    }
    if(!existingVendor || existingVendor.vendorPassword != vendorPassword){
        const error = new HttpError(
            "vendor doesnt exists, or please check your credentials",500
        );
        return next(error);
    }
    res.json({vendorDetails:existingVendor,message:"logged in"}).status(200);

}

exports.vendorsLogin = vendorsLogin;
exports.vendorsSignup = vendorsSignup;
exports.postShareInInvestments = postShareInInvestments;