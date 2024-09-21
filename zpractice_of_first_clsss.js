console.log("hello beta jeee");

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function renderWeatherInfo(data){
    console.log("weather is => " , data);
}

async function showWeather() {
    
    try {
        let city = "goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
        const data = await response.json();
    
        renderWeatherInfo(data);
    } catch (error) {
        console.log("error is found " , error);
    }
   
    
}

async function getCustomWeatherDetail(){

    try{
        let latitude = 27.1446;
        let longitude = 83.5622;
    
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    
        let data = await result.json();
        console.log(data);
    }
    catch(err){
        console.log("erroe is found=> ",err);
    }
  
}

// how to get current location of the user

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}