const express = require('express');
const router = express.Router();

const {requireSignin,isAuth,isAdmin}=require('../controllers/auth');
const {productById,create,read,update,remove,list,listRelated,photo,listSearch,listBySearch}=require("../controllers/product");
const {userById}=require('../controllers/user');

router.param("userId",userById);
router.param("productId",productById);
router.post("/product/create/:userId",requireSignin,isAuth,isAdmin,create)
router.get("/product/:productId",read);
router.delete("/product/:productId/:userId",requireSignin,isAuth,isAdmin,remove);
router.put("/product/:productId/:userId",requireSignin,isAuth,isAdmin,update);
router.get("/products",list);
router.post("/products/:productId",listRelated);
router.get("/products/search",listSearch);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);

module.exports = router;
