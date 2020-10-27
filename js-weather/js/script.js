let xhr = new XMLHttpRequest();

let WeatherMapApi = 'http://api.openweathermap.org/data/2.5/weather?q=';
let ApiLangJa = '&units=metric&lang=ja';
let AppIdUrl = '&appid=4b5774e9f3d2a07b84f0f2f88e486224';

const todaysWeather = (response) => {
    let obj = JSON.parse(response);
    let weather = obj.weather[0].description;
    let city = obj.name;
    document.getElementById('CityName').innerHTML = "現在の" + city + "の天気は" + weather;
}

document.addEventListener('DOMContentLoaded', () => {
    //デフォルトロンドン
    let LondonUrl = WeatherMapApi + "London" + ApiLangJa + AppIdUrl;
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
    document.getElementById('weather').addEventListener('change', function () {
        let CityName = this.value;
        let requestUrl = WeatherMapApi + CityName + ApiLangJa + AppIdUrl;
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
