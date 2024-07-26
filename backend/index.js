const express=require('express')
const app=new express();
const PORT=4000;
 //connect the connection js to server file
 const cors = require('cors');
require('./connection');
const productInformation=require('./model/productInformation')

app.use(express.json());
app.use(cors())
//API endpoint fetch data from DB
app.get('/products',async(req,res)=>{
try{
    const data=await productInformation.find();
    res.send(data);
}
catch(error){
console.log("Error occurs");
}
})

//API endpoint to post a new movie data to the DB
app.post('/new-product',async(req,res)=>{
    try{
        var item=req.body;
        const dataitem=new productInformation(item);
        const savedata=await dataitem.save();
        res.send('Post successful');
    }
    catch(error){
            console.log(error);
    }
})


//API endpoint for deleting the movie document
app.delete('/productremoval/:id',async(req,res)=>{
try{
await productInformation.findByIdAndDelete(req.params.id);
res.send('Deleted successfully');
}
catch(error){
    console.log(error);
}
})
//API endpoint for updating movie document
app.put('/product-updation/:id',async(req,res)=>{
    try{
await productInformation.findByIdAndDelete(req.params.id,req.body)
res.send("Update successfully")
    }
    catch(error){
        console.log(error)
    }
})

//checking whether the srever is live or not
app.listen(PORT,()=>{
    console.log("server is running on Port Number:4000");
})