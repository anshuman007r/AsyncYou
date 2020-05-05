const process = require('process');
const async = require('async');
const http =require('http');

async.series({
    requestOne: function(done){
        FetchURL(process.argv[2],done);
    },
    requestTwo: function(done){
        FetchURL(process.argv[3],done);
    }
  }, function(error,results){
    console.log(results);
  });
  
function FetchURL(url,done){
    let body='';
    http.get(url.toString(),function(response){
        response.on('data',function(chunk){
            body+=chunk.toString();
        });
        response.on('end',function(chunk){
            done(null,body);
        })
    })
}