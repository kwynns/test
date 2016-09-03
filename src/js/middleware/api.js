var request = require('superagent');
var baseUrl = 'http://netflixroulette.net/api/api.php?actor='

export function getActor(name) {
  var fullUrl = baseUrl + name;

  request
   .get(fullUrl)
   .end(function(err, res){
     console.log("res", res);
   });
}
