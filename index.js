var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  
});

app.get('/xpath', function(request, response) {
  response.send({"xpath":"//div[@class='content']/table/tr/td[@class='sres']/table[@class='tresults  ']/tr/td/div[a]"});
});

"div[@class='content']/table/tr/td[@class='sres']/table[@class='tresults  ']/tr/td/div[a]"

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
