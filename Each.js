const http = require('http');
const async = require('async');

async.each([process.argv[2],process.argv[3]],function(item,done){
    http.get(item.toString(),function(response){
        response.on('data',function(chunk){
        });
        response.on('end',function(chunk){
            done(null);
        })
    }).on('error',function(error){
        done(error)
    });    
},function(error){
     if(error) console.error(error)
});