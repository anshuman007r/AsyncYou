const process = require('process');
const async = require('async');
const http = require('http');

async.map([process.argv[2],process.argv[3]],function(item,done){
    let body=''
    http.get(item.toString(),function(response){
        response.on('data',function(chunk){
            body+=chunk.toString();
        });

        response.on('end',function(chunk){
            done(null,body);
        });
    }).on('error',function(error){
        done(error)
    });  
},function(error,result){
    if(error) return console.log(err)
    console.log(result);
});