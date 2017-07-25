
const yargs = require('yargs');

const geoCode = require('./geocode/geocode.js');

const weather = require('./weather/weather.js');

const argv = yargs.options({
    a:{
      demand:true,
      alias:'address',
      describe:'Address to fetch weather for',
      string:true
    }
}).help().alias('help','h').argv;

geoCode.geocodeAddress(argv.a,(errorMessage,results)=>{
    if(errorMessage){
      console.log(errorMessage);
    }else{
      console.log(`${results.address}`);
      weather.getWeather(results.lat,results.lon,(errorMessage,weatherResults)=>{
        if(errorMessage){
          console.log(errorMessage);
        }else{
          console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
        }
      })
    }
});




//e0d78816eadb2171d02f34a693338623
