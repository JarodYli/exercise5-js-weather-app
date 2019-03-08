// function to get city name, temp, weather and season from api

// store information from API

var weather = "";
var city = "";
var temp = "";
var season = "";

var celsius = "";
var farenheit = "";
function getData() {
    var zipcode = document.getElementById('zipcode').value;
    console.log(zipcode);


    if (zipcode !== '') {
        apiURL = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=72a7ecf71881957a15764decf1e2ce95';
        showTheData(apiURL);
        console.log(apiURL);
    }
}
//  converts kelvin to celsius and farenheit
function convertKelvin(e) {
    farenheit = 9 / 5 * (parseInt(e) - 273) + 32 + "F";

    celsius = Math.round(e - 273);
}

// Determine the season
function getSeason(){
    months = new Date();
    if ( months.getMonth() == 12 && months.getMont() < 3){
        //show winter
    }
    if (3 >= months.getMonth() && months.getMonth() >= 6 ){
        //spring
    }
    if (months.getMonth() <= 8 && months.getMonth() >= 6){
        //summer
    }
    if (months.getMonth() <= 9 && months.getMonth() >= 11){
        //fall
    }
}

//
function showTheData() {
    fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
        
        let city = JSON.stringify(myJson.name);
        console.log(city);
        let kelv = JSON.stringify(myJson.main.temp);
        console.log(kelv);
        let condition = JSON.stringify(myJson.weather[0].description);
        
        
        convertKelvin(kelv);
        
        // respresent that information in the visual web app
            document.getElementById('city').innerHTML = city;
            document.getElementById('kelvin').innerHTML = kelv;
            document.getElementById('farenheit').innerHTML = farenheit;
            document.getElementById('celsius').innerHTML = celsius;
            document.getElementById('conditon').innerHTML = condition;
            
        });

}




    // find city and display city


