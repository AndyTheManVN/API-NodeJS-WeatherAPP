const express = require('express');
const https = require('https');

const app = express();
const port = (3000);

// route: /  is index.html
app.get('/', function(req, res){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=vientiane&appid=0127193beefea707db244b899e1051c7#';
  https.get(url, function (response) {
        // Xem status request
        console.log(response.statusCode);
        // Chuyển dữ liệu request từ API sang kiêu JSON để truy vấn
        response.on("data", function(data){
          const weatherData = JSON.parse(data);
          const temp = weatherData.main.temp;
          const type = weatherData.weather[0].main;
          const icon = weatherData.weather[0].icon;
          const iconURL = "http://openweathermap.org/img/wn/"+ icon + ".png"

          // Xuất dữ liệu ra route /
          res.write("<h1>Temperature: " + temp + "C</h1><br>");
          res.write("<h2>Weather: " + type + "</h2>");
          res.write("<img src='"+ iconURL + "''>")
          res.send();

        });
  });

  // res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
});
