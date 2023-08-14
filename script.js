
const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
    };
const getWeather= (city) => {
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json()) 
    .then(response => {
        
        // cloud_pct.innerHTML=response.cloud_pct
        temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
        feels_like.innerHTML=response.feels_like
        min_temp.innerHTML=response.min_temp
        humidity.innerHTML=response.humidity
        humidity2.innerHTML=response.humidity
        max_temp.innerHTML=response.max_temp
        wind_speed.innerHTML=response.wind_speed
        wind_speed1.innerHTML=response.wind_speed
        wind_degrees.innerHTML=response.wind_degrees
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        console.log(response)
    })
    .catch(err=> console.error(err));

}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Hassan")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mangaluru', options)
    .then(response => response.json()) 
    .then(response => {
        
        m1.innerHTML=response.cloud_pct
        m2.innerHTML=response.feels_like
        m3.innerHTML=response.humidity
        m4.innerHTML=response.max_temp
        m5.innerHTML=response.min_temp
        m6.innerHTML=response.sunrise
        m7.innerHTML=response.sunset
        m8.innerHTML=response.temp
        m9.innerHTML=response.wind_degrees
        m10.innerHTML=response.wind_speed

        
        console.log(response)
    })
    .catch(err=> console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Udupi', options)
    .then(response => response.json()) 
    .then(response => {
        
        u1.innerHTML=response.cloud_pct
        u2.innerHTML=response.feels_like
        u3.innerHTML=response.humidity
        u4.innerHTML=response.max_temp
        u5.innerHTML=response.min_temp
        u6.innerHTML=response.sunrise
        u7.innerHTML=response.sunset
        u8.innerHTML=response.temp
        u9.innerHTML=response.wind_degrees
        u10.innerHTML=response.wind_speed
        console.log(response)
    })
    .catch(err=> console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chikkamagaluru', options)
    .then(response => response.json()) 
    .then(response => {
        
        c1.innerHTML=response.cloud_pct
        c2.innerHTML=response.feels_like
        c3.innerHTML=response.humidity
        c4.innerHTML=response.max_temp
        c5.innerHTML=response.min_temp
        c6.innerHTML=response.sunrise
        c7.innerHTML=response.sunset
        c8.innerHTML=response.temp
        c9.innerHTML=response.wind_degrees
        c10.innerHTML=response.wind_speed
        console.log(response)
    })
    .catch(err=> console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mandya', options)
    .then(response => response.json()) 
    .then(response => {
        
        mn1.innerHTML=response.cloud_pct
        mn2.innerHTML=response.feels_like
        mn3.innerHTML=response.humidity
        mn4.innerHTML=response.max_temp
        mn5.innerHTML=response.min_temp
        mn6.innerHTML=response.sunrise
        mn7.innerHTML=response.sunset
        mn8.innerHTML=response.temp
        mn9.innerHTML=response.wind_degrees
        mn10.innerHTML=response.wind_speed
        console.log(response)
    })
    .catch(err=> console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bidar', options)
    .then(response => response.json()) 
    .then(response => {
        
        bd1.innerHTML=response.cloud_pct
        bd2.innerHTML=response.feels_like
        bd3.innerHTML=response.humidity
        bd4.innerHTML=response.max_temp
        bd5.innerHTML=response.min_temp
        bd6.innerHTML=response.sunrise
        bd7.innerHTML=response.sunset
        bd8.innerHTML=response.temp
        bd9.innerHTML=response.wind_degrees
        bd10.innerHTML=response.wind_speed
        console.log(response)
    })
    .catch(err=> console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gulbarga', options)
    .then(response => response.json()) 
    .then(response => {
        
        k1.innerHTML=response.cloud_pct
        k2.innerHTML=response.feels_like
        k3.innerHTML=response.humidity
        k4.innerHTML=response.max_temp
        k5.innerHTML=response.min_temp
        k6.innerHTML=response.sunrise
        k7.innerHTML=response.sunset
        k8.innerHTML=response.temp
        k9.innerHTML=response.wind_degrees
        k10.innerHTML=response.wind_speed
        console.log(response)
    })
    .catch(err=> console.error(err));

