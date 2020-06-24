const express =  require("express");
const app = express();

app.get('/', function(req, res) {
  res.send("Hi there!");
});

app.post('/user', function(req, res) {
res.send("post");
});

app.listen(3000, function() {
  console.log("server is up");
})