let currentTempC = null;
let isCelsius = true;

export function showLoading() {
    const content = document.getElementById("content");
    const toggleBtn = document.getElementById("unit-toggle");
    content.innerHTML = `<div class="loading">
    <div class="spinner"></div>
    <p>Loading...</p>
    </div>`;
    toggleBtn.style.display = "none";
}
export function showError(message = "Couldn't load weather. Try again.") {
    const content = document.getElementById("content");
    const toggleBtn = document.getElementById("unit-toggle");
    content.innerHTML = `<div class="error">${message}</div>`;
    toggleBtn.style.display = "none";
}

export function showWeather(temp, condition, icon) {
    currentTempC = temp;
    isCelsius = true;

    const content = document.getElementById("content");
    const toggleBtn = document.getElementById("unit-toggle");

    const icons = {
        "clear-day": "☀️",
    "clear-night": "🌙",
    "partly-cloudy-day": "⛅",
    "partly-cloudy-night": "☁️",
    "cloudy": "☁️",
    "rain": "🌧️",
    "showers-day": "🌦️",
    "showers-night": "🌧️",
    "thunder-rain": "⛈️",
    "thunder-showers-day": "⛈️",
    "thunder-showers-night": "⛈️",
    "snow": "❄️",
    "snow-showers-day": "🌨️",
    "snow-showers-night": "🌨️",
    "fog": "🌫️",
    "wind": "💨"
    };
    const weatherIcon = icons[icon] || "🌡️";
    content.innerHTML = ` 
    <div class="weather-icon">${weatherIcon}</div>
    <div class="temp">${temp}°</div>
    <div class="condition">${condition}</div>
    `;

    toggleBtn.textContent = "°F";
    toggleBtn.style.display = "inline-block";
}
export function toggleUnit() {
    if (currentTempC === null) return;

    const tempElement = document.querySelector(".temp");
    const toggleBtn = document.getElementById("unit-toggle");

    if (isCelsius) {
        // Convert to F
        const tempF = Math.round((currentTempC * 9) / 5 + 32);
        tempElement.textContent = `${tempF}°F`;
        toggleBtn.textContent = "Show °C";
        isCelsius = false;
    } else {
        // Back to C
        tempElement.textContent = `${currentTempC}°C`;
        toggleBtn.textContent = "Show °F";
        isCelsius = true;
    }
}