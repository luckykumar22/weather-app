const API_KEY = "aae7217d6b6c56c5b47dc85bfa6be92a";

const getFormattedWeatherData =async(city, units = 'metric')=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`


const data = await fetch(URL)
.then((res)=>res.json())
.then((data)=>data);

console.log(data)
}
export {getFormattedWeatherData};