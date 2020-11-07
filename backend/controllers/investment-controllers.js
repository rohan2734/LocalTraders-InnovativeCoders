

const getSharesInInvestments = (req,res,next) => {
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

exports.getSharesInInvestments = getSharesInInvestments;