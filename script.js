// var inputval = document.querySelector('#cityinput')
// var btn = document.querySelector('#add');
// var city = document.querySelector('#cityoutput')
// var descripEl = document.querySelector('#description')
// var temp = document.querySelector('#temp')
// var wind = document.querySelector('#wind')

// function convertion(val) {
//     return (val - 273.15).toFixed(2);
// }

// btn.addEventListener('click', function() {
//     //This is the api link from where all the information will be collected
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=YOUR_API_KEY')
//         .then(res => res.json())
//         .then(data => {
//             //Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different constants.
//             var nameval = data['name']
//             var descrip = data['weather'][0]['description']
//             var tempature = data['main']['temp']
//             var wndspd = data['wind']['speed']

//             //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
//             city.innerHTML = `Weather of <span>${nameval}</span>`
//             temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`
//             descripEl.innerHTML = `Sky Conditions: <span>${descrip}</span>`
//             wind.innerHTML = `Wind Speed: <span>${wndspd} km/h</span>`
//         })
//         //Now the condition must be added that what if you do not input anything in the input box.
//         .catch(err => alert('Please enter a valid city name'))
// })

// Function to convert temperature from Kelvin to Celsius
function convertToCelsius(val) {
    return (val - 273.15).toFixed(2);
}

// Function to handle API request and update UI
function fetchWeather() {
    var cityInput = document.querySelector('#cityinput').value;
    var apiKey = '3045dd712ffe6e702e3245525ac7fa38'; // Replace with your API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var cityName = data.name;
            var description = data.weather[0].description;
            var temperature = convertToCelsius(data.main.temp);
            var windSpeed = data.wind.speed;

            // Update UI elements
            document.querySelector('#cityoutput').innerHTML = `Weather of <span>${cityName}</span>`;
            document.querySelector('#description').innerHTML = `Sky Conditions: <span>${description}</span>`;
            document.querySelector('#temp').innerHTML = `Temperature: <span>${temperature}°C</span>`;
            document.querySelector('#wind').innerHTML = `Wind Speed: <span>${windSpeed} m/s</span>`;
        })
        .catch(error => {
            alert('Please enter a valid city name');
            console.error('Error fetching weather:', error);
        });
}

// Add event listener to the button for fetching weather
document.querySelector('#add').addEventListener('click', fetchWeather);
