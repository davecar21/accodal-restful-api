const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productCtrl');


router.post('/', (req, res)=>{
    productCtrl.postProduct(req, res);
});

router.get('/', (req, res)=>{
    productCtrl.getProduct(req, res);
});

router.get('/:id', (req, res)=>{
    productCtrl.filterProduct(req, res);
});

router.put('/:id', (req, res)=>{
    productCtrl.updateProduct(req, res);
});

router.delete('/:id', (req, res)=>{
    productCtrl.deleteProduct(req, res);
});

module.exports = router;