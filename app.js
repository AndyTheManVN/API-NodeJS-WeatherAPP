const express = require('express');
const https = require('https');

const app = express();
const port = (3000);

// route: / (home) is index.html
app.get('/', function(req, res){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=vientiane&appid=0127193beefea707db244b899e1051c7#';
  https.get(url, function (response) {
        console.log(response);
  });

  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
});
