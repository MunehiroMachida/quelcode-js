const xhr = new XMLHttpRequest();

const WeatherMapApi = 'http://api.openweathermap.org/data/2.5/weather?q=';
const ApiLangJa = '&units=metric&lang=ja';
const AppIdUrl = '&appid=4b5774e9f3d2a07b84f0f2f88e486224';

const todaysWeather = (response) => {
    const obj = JSON.parse(response);
    const weather = obj.weather[0].description;
    const city = obj.name;
    document.getElementById('CityName').innerHTML = "現在の" + city + "の天気は" + weather;
}

document.addEventListener('DOMContentLoaded', () => {
    //デフォルトロンドン
    const LondonUrl = WeatherMapApi + "London" + ApiLangJa + AppIdUrl;
    xhr.open('GET', LondonUrl, true);
    xhr.send();
    //通信ステータスが変わったら実行される関数
    xhr.onreadystatechange = () => {
        //通信が完了したらShowtodaysWeather関数を実行
        if (xhr.readyState == 4) {
            todaysWeather(xhr.responseText);
        }
    }
    // id、weatherが変わったら↓
    document.getElementById('weather').addEventListener('change', (event) => {
        const CityName = event.target.value;
        const requestUrl = WeatherMapApi + CityName + ApiLangJa + AppIdUrl;
        xhr.open('GET', requestUrl, true);
        xhr.send();
        //通信ステータスが変わったら実行される関数
        xhr.onreadystatechange = () => {
            //通信が完了したらShowtodaysWeather関数を実行
            if (xhr.readyState == 4) {
                todaysWeather(xhr.responseText);
            }
        }
    });
});
