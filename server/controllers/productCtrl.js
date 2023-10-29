const productModel = require('../models/productModel');

let productCtrl = {};

productCtrl.postProduct = async(req, res) => {
    try{
        const result = await productModel.postProduct(req.body);
        if(result.error){
            return res.status(200).send(
                {
                    'error': result.error.message
                }
            );
        }else{
            return res.status(200).send(
                {
                    'message': 'Product has been created.'
                }
            );
        }
    }
    catch(err){
        return res.status(400).send('Bad Request: '+ err);
    }
}


productCtrl.getProduct = async(req, res) => {
    try{
        const result = await productModel.getProduct();
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send('Bad Request: '+ err);
    }
}

productCtrl.filterProduct = async(req, res) => {
    try{
        const result = await productModel.filterProduct(req.params.id);
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send('Bad Request: '+ err);
    }
}

productCtrl.updateProduct = async(req, res) => {
    try{
        const result = await productModel.updateProduct(req.params.id, req.body);
        if(result.error){
            return res.status(200).send(
                {
                    'error': result.error.message
                }
            );
        }else{
            return res.status(200).send(
                {
                    'message': `Product ${req.params.id} has been updated.`
                });
        }
    }
    catch(err){
        res.status(400).send('Bad Request: '+ err);
    }
}

productCtrl.deleteProduct = async(req, res) => {
    try{
        const result = await productModel.deleteProduct(req.params.id);
        if (result) return res.status(200).send({
            'message': `Product ${req.params.id} has been deleted.`
        });
    }
    catch(err){
        res.status(400).send('Bad Request: '+ err);
    }
}


module.exports = productCtrl;