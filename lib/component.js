const fs=require("fs");

module.exports={
    entryfile:function(entry){
        let allarr=[];
        for(let i=0;i<entry.length;i++){
            allarr.push(fs.readFileSync(entry[i], {encoding: 'utf-8'}));
        }
        return allarr;
    },
    REGEXPmatch:function(str){
        str=str.replace(/(\s{2,}|\/\*.+?\*\/)/g,"");
        str=str.replace(/<!--.+?-->/g,"");
        return str;
    },
    outputfile:function(output,str){
        fs.writeFileSync(output, str);
    },
    runFn:function(files,output){
        let entryArr = this.entryfile(files);
        
        let outputArr=[];
        for(let i=0;i<entryArr.length;i++){
            outputArr.push(this.REGEXPmatch(entryArr[i]));
        }
        
        const boo=/(\.\w+)$/.test(output);
        for(let i=0;i<outputArr.length;i++){
            this.outputfile(output+(boo?"":files[i]),outputArr[i]);
        }
    }
};


/*
function isConditionalComment(text) {
  return /^\[if\s[^\]]+]|\[endif]$/.test(text);
}*/