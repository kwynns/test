var request = require('superagent');
var baseUrl = 'http://netflixroulette.net/api/api.php?actor='

export function getActor(name) {
  var fullUrl = baseUrl + name;

  request
   .get(fullUrl)
   .end(function(err, res){
     if (err) {
       console.log("err", err);
       return err;
     } else {
       console.log("res", res);
       return res;
     }
   });
}
