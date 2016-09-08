var request = require('superagent');
var baseUrl = 'http://netflixroulette.net/api/api.php?actor=';

export function getMoviesFor(name, cb) {
  var fullUrl = baseUrl + name;

  request
   .get(fullUrl)
   .end(function(err, res){
     if (err) {
       console.log("err", err);
       return err;
     } else {
       cb(res.body);
     }
   });
}
