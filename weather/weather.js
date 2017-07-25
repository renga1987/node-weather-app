
const request = require('request');

var getWeather = (lat,long,callback)=>{
    request({
    url:`https://api.darksky.net/forecast/e0d78816eadb2171d02f34a693338623/${lat},${long}`, //ES6 Syntax
    json:true
  },(error,response,body)=>{
      if(!error && response.statusCode===200){
        callback(undefined,{
          temperature:body.currently.temperature,
          apparentTemperature:body.currently.apparentTemperature
        })
      }else{
        callback("Could not fetch weather");
      }
  });
};
module.exports={
  getWeather
};
