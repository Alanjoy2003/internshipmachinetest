const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    productName:String,
    category:String,
    productInformation:String,
    expireDate:String
})
const productInformation=mongoose.model('product',productSchema);
module.exports=productInformation