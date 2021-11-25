var express = require('express');
var router = express.Router();
var aModel = require("../models/alreadyModel.js");

router.get("/", async function(req, res, next){
    console.log("Sending all peoples");
    let result = await aModel.getAllAlready();
    res.status(result.status).send(result.result);
});

router.post("/", async function(req,res,next) {
    let newA = req.body;
    let result = await aModel.saveAlready(newA);
    res.status(result.status).send(result.result);
    console.log(newA);
});
module.exports=router;
