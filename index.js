var express = require('express')
var app = express()
var content

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

fs.readFileSync('./index.html','utf8', function read (err,data) {
    if (err) 
	throw err
    content = data
})

console.log(content)

app.get('/', function(request, response) {
  response.send("content")
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
