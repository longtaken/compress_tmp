"use strict";
const compress=require("component");

module.exports=function(entry,output){
    let str = compress.entryfile(entry);
    
    const compress_str=compress.REGEXPmatch(str);

    compress.outputfile(output,compress_str);
};