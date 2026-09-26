const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");

const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const rain = document.getElementById("rain");

const weatherIcon = document.getElementById("weatherIcon");

const status = document.getElementById("status");

const rain_today = document.getElementById("rain_today");
const rain_2 = document.getElementById("rain_2");
const rain_3 = document.getElementById("rain_3");
const rain_4 = document.getElementById("rain_4");
const rain_5 = document.getElementById("rain_5");

const max_today = document.getElementById("max_today");
const max_2 = document.getElementById("max_2");
const max_3 = document.getElementById("max_3");
const max_4 = document.getElementById("max_4");
const max_5 = document.getElementById("max_5");

const emoji_now = document.getElementById("weatherIcon")
const emoji_today = document.getElementById("day_today_emoji");
const emoji_2 = document.getElementById("day_2_emoji");
const emoji_3 = document.getElementById("day_3_emoji");
const emoji_4 = document.getElementById("day_4_emoji");
const emoji_5 = document.getElementById("day_5_emoji");

// BUSCAR CIDADE

searchButton.addEventListener("click", async () => {

    const cidade = cityInput.value.trim();

    // Verifica se o usuário digitou alguma coisa
    if (cidade === "") {
        status.textContent = "Digite uma cidade.";
        return;
    }

    status.textContent = "Buscando cidade...";

    console.log("Cidade pesquisada:", cidade);


    // GEOCODING API - PARA RECEBER AS CORDENADAS MEDIANTE AO NOME INSERIDO

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cidade)}&count=1&language=pt&format=json`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log("Resposta da API:");
        console.log(data);


        // VERIFICAR SE ENCONTROU A CIDADE

        if (!data.results || data.results.length === 0) {

            status.textContent = "Cidade não encontrada.";

            return;
        }


        // PEGAR OS DADOS DA CIDADE

        const cidadeEncontrada = data.results[0];

        const nome = cidadeEncontrada.name;
        const latitude = cidadeEncontrada.latitude;
        const longitude = cidadeEncontrada.longitude;


        console.log("Nome:", nome);
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);


        // MOSTRAR NO SITE

        cityName.textContent = nome;

        status.textContent =
            `Coordenadas: ${latitude}, ${longitude}`;


       const urlClima = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature&daily=precipitation_probability_max,temperature_2m_max`;

        const responseClima = await fetch(urlClima);

        const dataClima = await responseClima.json();

        console.log(dataClima);


        const temperatura = dataClima.current.temperature_2m;
        const umidade = dataClima.current.relative_humidity_2m;
        const vento = dataClima.current.wind_speed_10m;
        const sensacao = dataClima.current.apparent_temperature;
        const chuva = dataClima.daily.precipitation_probability_max[0];

        const temperatura_today = dataClima.daily.temperature_2m_max[0];
        const temperatura_2 = dataClima.daily.temperature_2m_max[1];
        const temperatura_3 = dataClima.daily.temperature_2m_max[2];
        const temperatura_4 = dataClima.daily.temperature_2m_max[3];
        const temperatura_5 = dataClima.daily.temperature_2m_max[4];

        const ranning_2 = dataClima.daily.precipitation_probability_max[1];
        const ranning_3 = dataClima.daily.precipitation_probability_max[2];
        const ranning_4 = dataClima.daily.precipitation_probability_max[3];
        const ranning_5 = dataClima.daily.precipitation_probability_max[4];

        

        temperature.textContent = `${temperatura}°C`;
        humidity.textContent = `${umidade}%`;
        wind.textContent = `${vento} km/h`;
        feelsLike.textContent = `${sensacao}°C`;
        rain.textContent = `${chuva}%`;

        max_today.textContent = `${temperatura_today}°C`;
        max_2.textContent = `${temperatura_2}°C`;
        max_3.textContent = `${temperatura_3}°C`;
        max_4.textContent = `${temperatura_4}°C`;
        max_5.textContent = `${temperatura_5}°C`;

        rain_today.textContent= `${chuva}%`;
        rain_2.textContent = `${ranning_2}%🌧️`
        rain_3.textContent = `${ranning_3}%🌧️`
        rain_4.textContent = `${ranning_4}%🌧️`
        rain_5.textContent = `${ranning_5}%🌧️`

        emoji = chuva > 60 ? emoji_now.textContent = '🌧️' : emoji_now.textContent = '☀️'
        emoji = chuva > 60 ? emoji_today.textContent = '🌧️' : emoji_today.textContent = '☀️'
        emoji = ranning_2 > 60 ? emoji_2.textContent = '🌧️' : emoji_2.textContent = '☀️'
        emoji = ranning_3 > 60 ? emoji_3.textContent = '🌧️' : emoji_3.textContent = '☀️'
        emoji = ranning_4 > 60 ? emoji_4.textContent = '🌧️' : emoji_4.textContent = '☀️'
        emoji = ranning_5 > 60 ? emoji_5.textContent = '🌧️' : emoji_5.textContent = '☀️'

    } catch (error) {

        console.error("Erro:", error);

        status.textContent =
            "Erro ao buscar a cidade.";

    }

});


// ENTER NO INPUT

cityInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        searchButton.click();

    }

});


// TEMA

cityInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        searchButton.click();
    }

});