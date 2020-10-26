let xhr = new XMLHttpRequest();
let AppId = '4b5774e9f3d2a07b84f0f2f88e486224';

document.addEventListener('DOMContentLoaded', function () {
    //デフォルトロンドン
    let LondonUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=4b5774e9f3d2a07b84f0f2f88e486224";
    xhr.open('GET', LondonUrl, true);
    xhr.send();
    //通信ステータスが変わったら実行される関数
    xhr.onreadystatechange = function () {
        //通信が完了したらShowTodaysWeather関数を実行
        if (xhr.readyState == 4) {
            TodaysWeather(xhr.responseText);
        }
    }
    // id、weatherが変わったら↓
    document.getElementById('weather').addEventListener('change', function () {
        let CityName = this.value;
        let requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + CityName + "&appid=4b5774e9f3d2a07b84f0f2f88e486224";
        xhr.open('GET', requestUrl, true);
        xhr.send();
        //通信ステータスが変わったら実行される関数
        xhr.onreadystatechange = function () {
            //通信が完了したらShowTodaysWeather関数を実行
            if (xhr.readyState == 4) {
                TodaysWeather(xhr.responseText);
            }
        }
    });
});

function TodaysWeather(response) {
    let obj = JSON.parse(response);
    let weather = obj.weather[0].description;
    // パラメータをjaにすると変な日本語になっていたので再代入
    if (weather === "broken clouds" || weather === "scattered clouds" || weather === "overcast clouds") {
        weather = '曇り';
    } else if (weather === "clear sky") {
        weather = '快晴';
    } else if (weather === "few clouds") {
        weather = '晴れ';
    } else if (weather === "shower rain") {
        weather = '小雨';
    } else if (weather === "rain") {
        weather = '雨';
    } else if (weather === "thunderstorm") {
        weather = '雷雨';
    } else if (weather === "snow") {
        weather = '雪';
    } else if (weather === "mist") {
        weather = '霧';
    }
    let city = obj.name;
    // 都市名を日本語に変更
    if (city === 'London') {
        city = 'ロンドン'
    } else if (city === 'Tokyo') {
        city = '東京'
    } else if (city === 'Paris') {
        city = 'パリ'
    } else if (city === 'New York') {
        city = 'ニューヨーク'
    } else if (city === 'Indonesia') {
        city = 'インドネシア'
    }
    document.getElementById('CityName').innerHTML = "現在の" + city + "の天気は" + weather;
}
