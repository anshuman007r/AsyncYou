const process = require('process');
const file = require('fs');
const http = require('http');

const fileName = process.argv[2];
const fileContent=file.readFileSync(fileName);
if(fileContent){
    http.get(fileContent,function(res){
        console.log(res);
    })
}
