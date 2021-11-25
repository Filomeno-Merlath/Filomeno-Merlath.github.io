var express = require('express');
var router = express.Router();
var pModel = require("../models/peoplesModel.js");

router.get("/", async function(req, res, next){
    console.log("Sending all peoples");
    let result = await pModel.getAllPeoples();
    res.status(result.status).send(result.result);
});

module.exports=router;
