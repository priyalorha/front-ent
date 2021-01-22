const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/nono",
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const Products = mongoose.model('products',new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    name : String,
     category: String,
     image: String,
     price: Number,
     brand: String
    
}))

app.get('/api/products',async (req,res)=>{
    const products =await Products.find({});
    res.send(products);
});


app.post('/api/products',async(req,res)=>{
    const newProduct = new Products(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);

});

app.delete('/api/products/:id', async (req,res)=>{
    const deleteProduct = await
     Products.findByIdAndDelete(req.params.id);

     res.send(deleteProduct)

})

const port = process.env.PORT || 5000

app.listen(port,()=>{console.log("served @ http://localhost:5000")})


