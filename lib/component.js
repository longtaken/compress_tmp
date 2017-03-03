const fs=require("fs");

exports.entryfile=function(entry){
    return fs.readFileSync(entry, {
        encoding: 'utf-8'
    });
};

exports.REGEXPmatch=function(str){
    str=str.replace(/(\s{2,}|\/\*.+?\*\/)/g,"");
    str=str.replace(/<!--.+?-->/g,"");
    return str;
};

exports.outputfile=function(output,str){
    fs.writeFile(output, str, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
    });
};