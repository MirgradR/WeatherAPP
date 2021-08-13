// weather
let key = 'f7926112ea8a257c4d52a68840b2a89a'
let city = 'Surgut'

let input = document.querySelector('input')
input.onchange = function() {
    let value = input.value
    city = value
    if (!value) return false
    weatherR()
   console.log(value) 
}



/*document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        
        let value = input.value
        if (!value) return false
        city = value
        
        weatherR()
        
    }
})
console.log(city)*/



function weatherR() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector('.city-name').textContent = data.name
            document.querySelector('.weather__main-temp').innerHTML = Math.round(data.main.temp - 273) + ' &#8451;'
            document.querySelector('.weather_wind-number').textContent = data.wind.speed + ' m/s'
            document.querySelector('.weather_hum-number').textContent = data.main.humidity + ' %'
            document.querySelector('.weather_rain-number').textContent = data.weather[0]['description']
            let iconNum = data.weather[0]['icon']
            let icon = `img/${iconNum}.webp`
            document.querySelector('.weather-icon').innerHTML = `<img src="${icon}" alt="weather">`
            let time = document.querySelector('.weather-hour')
            function update() {
                let date = new Date()
                let hours = date.getHours()
                let minutes = date.getMinutes()
                if (hours < 10) hours = '0' + hours
                if (minutes < 10) minutes = '0' + minutes
                time.textContent = `${hours}:${minutes}`

            }
            update()
            setInterval(update, 60000)
        })
        .catch(function () {

        }) 
}
weatherR()
setInterval(weatherR, 10000)




//date

const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const monthOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Deс"
  ]

let date = new Date()
let getday = date.getDate() // day (12)
let getyear = date.getFullYear() // year (2021)
let getweelday = date.getDay()      // day of week(4)
let getmonth = date.getMonth()

let day = dayOfWeek[getweelday - 1] 
let month = monthOfYear[getmonth]

document.querySelector('.weather__main-date').textContent = `${getday}` + 'th  ' + `${month}` + ` ${getyear}`
document.querySelector('.weather-day').textContent = `${day}`


