const express = require('express');
const router = express.Router();
const {signIn,signUp,signOut,requireSignin}=require('../controllers/auth');
router.post("/signup",signUp);
router.post("/signin",signIn);
router.get("/signout",signOut);
router.get("/hello",requireSignin,(req,res)=>res.json(req.auth));

module.exports = router;
