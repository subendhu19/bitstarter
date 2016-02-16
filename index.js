var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var string = fs.readFileSync('index.html','utf-8', (err,data) => {
    if (err) throw err;
    console.log(data);
});

app.get('/', function(request, response) {
  response.send(string)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
