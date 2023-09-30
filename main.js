const apiKey="b6e4c475a0f87b2123fbf62393a9cd5f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
/*---------------------------------------------*/

let searchField=document.querySelector(".search input");
let searchButton=document.querySelector(".search #search");
let weatherIcon=document.querySelector(".weather-icon")

searchButton.addEventListener("click",()=>
{
checkWeather(searchField.value)
console.log()
}
)

/*---------------------------------------------*/
async function checkWeather(city)
{

    let response =await fetch(apiUrl+ city+`&appid=${apiKey}`)

    var data = await response.json();

    if (data.weather[0].main=="Clouds"){
        weatherIcon.innerHTML= `<i class="fa-solid fa-cloud fa-3x"></i>`
    }
    else if (data.weather[0].main=="Clear"){
        weatherIcon.innerHTML= `<i class="fa-solid fa-cloud-sun fa-3x"></i>`
    } else  if (data.weather[0].main=="Rain") {
        weatherIcon.innerHTML= `<i class="fa-solid fa-cloud-rain fa-3x"></i>`
    }
    else if (data.weather[0].main=="Drizzle"){
        weatherIcon.innerHTML= `<i class="fa-solid fa-cloud-sun-rain fa-3x"></i>`
    }else if (data.weather[0].main=="Mist"){
        weatherIcon.innerHTML= `<i class="fa-solid fa-smog fa-3x"></i>`
    }



    document.querySelector(".weather-city").innerHTML=data.name
    document.querySelector(".weather-temp").innerHTML="Temp: "+Math.round(data.main.temp)+"°C"
    document.querySelector(".weather-wind").innerHTML="Wind Speed: "+ data.wind.speed+"km/h"
    document.querySelector(".weather-humidity").innerHTML="Relative Humidity: "+ data.main.humidity+"%"
}

