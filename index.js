"use strict";
const compress=require("./lib/component"),
      glob=require("glob");

module.exports=function(entry,output){
    glob(entry,{nodir:true},(err,files)=>{
        if(err)return console.log(err);
        compress.runFn(files,output);
    });
};