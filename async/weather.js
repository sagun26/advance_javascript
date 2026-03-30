const cityInput = document.getElementById('cityInput');
const loading = document.getElementById('loading');
const weatherList = document.getElementById('weatherList');
const apiKey = "ef4ce85397704454b8c94706261703"; // replace with your API key

async function fetchWeather() {
    if (!cityInput.value) return;
    loading.style.display = "block";
    weatherList.innerHTML = "";

    try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${apiKey}`
            );

        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        const li = document.createElement("li");
        li.textContent = `Temperature in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
        weatherList.appendChild(li);

    } catch (error) {
        weatherList.innerHTML = `<li>${error.message}</li>`;
    } finally {
        loading.style.display = "none";
    }
}