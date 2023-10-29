const mongoose = require('./db');
const { Schema } = mongoose;

let ProductMethod = {}

let productSchema = new Schema({
    name: String,
    description: String,
    price: String
});

let Product = mongoose.model('Product', productSchema);

ProductMethod.postProduct = async (product)=>{
    const productData = new Product(product);
    const result = await productData.save();
    console.log(result);
    return result;
}

ProductMethod.getProduct = async ()=>{
    const result = await Product.find();
    return result;
}

ProductMethod.filterProduct = async (productId)=>{
    const result = await Product.find({_id: productId});
    return result;
}

ProductMethod.updateProduct = async (productId, product)=> {
    const result = await Product.findOneAndUpdate({_id: productId}, product, {new: true});
    return result;
}

ProductMethod.deleteProduct = async (productId)=> {
    const result = await Product.findByIdAndRemove(productId);
    return result;
}

ProductMethod.Product = Product;
module.exports = ProductMethod;