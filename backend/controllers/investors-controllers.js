const investorsSchema = require('../models/investors-models/investorsSchema');

const investorsSignup =async (req,res,next) => {
    const {investorName,investorEmailID,investorPassword} = req.body;

    const investorProfileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8K9TdeuJNHtTMH-JaUph5CgQ7P1nYgx8z9w&usqp=CAU";

    let existingInvestor; 

    try{
        existingInvestor = await investorsSchema.findOne({investorEmailID:investorEmailID})
    }catch(err){
        const error = new HttpError(
            "signingup of vendor failed",500
        );
        return next(error);
      
    }
    
    if(existingInvestor){
        const error = new HttpError(
            "vendor exists already,please login instead",422
        );
        return next(error);
    }

    const createInvestor = new investorsSchema({
        investorName,
        investorEmailID,
        investorPassword,
        investorProfileImage
    })

    try{
       await createInvestor.save();
    }catch(err){
        const error = new HttpError(
            "signingup of investor failed",500
        );
        return next(error);
       
    }

    res.status(201).json({investorDetails:createInvestor});
}

const investorsLogin = async (req,res,next) => {
    const {investorEmailID,investorPassword} = req.body;

    let existingInvestor;
    try{
        existingInvestor = await investorsSchema.findOne({investorEmailID});
    }catch(err){
        const error = new HttpError(
            "fetching vendor failed",500
        );
        return next(error);
    }
    if(!existingInvestor || existingInvestor.investorPassword != investorPassword){
        const error = new HttpError(
            "vendor doesnt exists, or please check your credentials",500
        );
        return next(error);
    }
    res.json({investorDetails:existingInvestor,message:"logged in"}).status(200);

}

exports.investorsLogin = investorsLogin;
exports.investorsSignup = investorsSignup;