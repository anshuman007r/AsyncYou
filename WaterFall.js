const process = require('process');
const file = require('fs');
const http = require('http');
const async = require('async');

async.waterfall([
    function(execute){
        file.readFile(process.argv[2],function(error,data){
          if(error) return done(error);
          return execute(null,data);
        })
    },
    function(data,execute){
        let body=''
        http.get(data.toString(),function(response){
            response.on('data',function(chunk){
                body+=chunk.toString()
            });
            response.on('end',function(chunk){
                execute(null,body)
            });
        }).on('error',function(error){
            done(error);
        });
    }
],function(error,data){
    if (error) return console.error(error);
    console.log(data) 
})