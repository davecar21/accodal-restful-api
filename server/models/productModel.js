const mongoose = require('./db');
const { Schema } = mongoose;

let ProductMethod = {}

let productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: 
    {
        type: String
    },
    price: 
    {
        type: Number,
        required: true,
        min: 0, // Minimum value
    }
});

let Product = mongoose.model('Product', productSchema);

ProductMethod.postProduct = async (product)=>{
    try {
        const productData = new Product(product);
        const result = await productData.save();
        return result;
      } catch (err) {
        return {error: err};
    }
    
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
    try {
        const result = await Product.findOneAndUpdate({_id: productId}, product, {new: true});
        return result;
      } catch (err) {
        return {error: err};
    }
}

ProductMethod.deleteProduct = async (productId)=> {
    const result = await Product.findByIdAndRemove(productId);
    return result;
}



ProductMethod.Product = Product;
module.exports = ProductMethod;