var express = require('express')
var app = express()
var err = ''
var data = ''

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

fs.readFileSync('index.html','utf8', (err,data) => {
    if (err) throw err;
    console.log(data);
});

app.get('/', function(request, response) {
  response.send(data)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
