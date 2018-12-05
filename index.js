var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(200);
});

app.get('/xpath', function(request, response) {
  response.send({"xpath":"//div[@class='content']/table/tr/td[@class='sres']/table[@class='tresults  ']/tr/td/div[a]"});
});

app.get('/video_urls', function(request, response) {
    response.send([{id:"0", title:"Little Talks", source:'https://s3-us-west-2.amazonaws.com/jwc-videos/Little+Talks+-+Of+Monsters+and+Men+%2528Cover%2529+Take+1.mp4'},
        {id:"1", title:"Little Talks", source:'https://s3-us-west-2.amazonaws.com/jwc-videos/Little+Talks+-+Of+Monsters+and+Men+%2528Cover%2529+Take+1.mp4'},
        {id:"2", title:"Little Talks", source:'https://s3-us-west-2.amazonaws.com/jwc-videos/Little+Talks+-+Of+Monsters+and+Men+%2528Cover%2529+Take+1.mp4'}]);
});

"div[@class='content']/table/tr/td[@class='sres']/table[@class='tresults  ']/tr/td/div[a]"

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
