const dotenv = require('dotenv').config();
const axios = require('axios');
const prompt = require('prompt-sync')({sigint: true});

const API_KEY = process.env.API_KEY


//setting url to get data by location coordinates
function getByCoordinates(latitude, longitude){
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
}


//setting url to get data by cityname
function getByCityName(cityname) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`;  
}


const method = prompt('Choose location format (Enter 1/2) : 1. Coordinates 2. CityName ')
let URL=''; 
switch(Number(method)){
    case 1:
        const LAT = prompt("Enter Latitude:  ");
        const LON = prompt("Enter Longitude:  ");
         URL = getByCoordinates(LAT, LON);
        break;
    case 2:
        const cityname = prompt("Enter city name:  ");
         URL = getByCityName(cityname);
        break;
}

//API CALL 
axios.get(URL).then(res => console.log(res))
    .catch(err => console.log(err)); 

