const process = require('process');
const async = require('async');
const http =require('http');

async.series({
    requestOne: function(done){
      let bodyOne='';
      http.get(process.argv[2].toString(),function(response){
          response.on('data',function(chunk){
              bodyOne+=chunk.toString();
          });
          response.on('end',function(chunk){
              done(null,bodyOne);
          })
      })
    },
    requestTwo: function(done){
        let bodyTwo='';
        http.get(process.argv[3].toString(),function(response){
            response.on('data',function(chunk){
                bodyTwo+=chunk.toString();
            });
            response.on('end',function(chunk){
                done(null,bodyTwo);
            })
        })
    }
  }, function(error,results){
    console.log(results);
  });