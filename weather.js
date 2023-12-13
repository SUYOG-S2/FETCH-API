//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

var btn = document.getElementById('btn')
btn.onclick = () => {
    var x = document.getElementById('search').value
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${x}&APPID=8b01a1e678d82760c5a76a37bac49366`
    )

    .then((response) => response.json())
    .then((date) => {
        const result = data;

       console.log(result.name)
       console.log('temp:' , result.main.temp_min)
    })
}