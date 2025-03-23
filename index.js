// const apiKey = "96N5LU68CLFC34VJTFGMSG7LG"; // Make sure this key is correct

// // const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
// // const apiUrl="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?key=96N5LU68CLFC34VJTFGMSG7LG&unitGroup=metric&include=current&degreeDayTempBase=10";


// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city) {   
//     const apiUrl="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mussorie?key=96N5LU68CLFC34VJTFGMSG7LG&unitGroup=metric&include=current&degreeDayTempBase=10";
    
//     const response = await fetch(apiUrl);
    
//     if (!response.ok) {
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//         return;
//     }

//     var data = await response.json();

//     document.querySelector(".city").innerHTML = data.address; // Visual Crossing uses "address"
//     document.querySelector(".temp").innerHTML = Math.round(data.currentConditions.temp) + "°C"; // Correct temperature field
//     document.querySelector(".humidity").innerHTML = data.currentConditions.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.currentConditions.windspeed + "km/h";

//     let condition = data.currentConditions.conditions;
//     if (condition.includes("Cloud")) {
//         weatherIcon.src = "images/clouds.png";
//     } else if (condition.includes("Clear")) {
//         weatherIcon.src = "images/clear.png";
//     } else if (condition.includes("Rain")) {
//         weatherIcon.src = "images/rain.png";
//     } else if (condition.includes("Drizzle")) {
//         weatherIcon.src = "images/drizzle.png";
//     } else if (condition.includes("Mist")) {
//         weatherIcon.src = "images/mist.png";
//     }

//     document.querySelector(".weather").style.display = "block";
//     document.querySelector(".error").style.display = "none";
// }

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });
const apiKey = "96N5LU68CLFC34VJTFGMSG7LG"; // Ensure this key is correct
const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const fullUrl = `${apiUrl}${city}?key=${apiKey}&unitGroup=metric&include=current&degreeDayTempBase=10`;

    try {
        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.querySelector(".city").innerHTML = data.address;
        document.querySelector(".temp").innerHTML = Math.round(data.currentConditions.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.currentConditions.humidity + "%";
        document.querySelector(".wind").innerHTML = data.currentConditions.windspeed + " km/h";

        let condition = data.currentConditions.conditions;
        if (condition.includes("Cloud")) {
            weatherIcon.src = "images/clouds.png";
        } else if (condition.includes("Clear")) {
            weatherIcon.src = "images/clear.png";
        } else if (condition.includes("Rain")) {
            weatherIcon.src = "images/rain.png";
        } else if (condition.includes("Drizzle")) {
            weatherIcon.src = "images/drizzle.png";
        } else if (condition.includes("Mist")) {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } catch (error) {
        console.error("Error fetching weather:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});
