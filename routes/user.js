const express = require('express');
const router = express.Router();
const {requireSignin,isAuth}=require('../controllers/auth');
const {userById,read,update}=require('../controllers/user');

router.param("userId",userById);
router.get("/secret/:userId",requireSignin,isAuth,(req,res)=>{
  res.json(req.profile);
})

router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);
module.exports = router;
