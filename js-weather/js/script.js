let xhr = new XMLHttpRequest();
let AppId = '4b5774e9f3d2a07b84f0f2f88e486224';

const todaysWeather = (response) => {
    let obj = JSON.parse(response);
    let weather = obj.weather[0].description;
    let city = obj.name;
    document.getElementById('CityName').innerHTML = "現在の" + city + "の天気は" + weather;
}

document.addEventListener('DOMContentLoaded', () => {
    //デフォルトロンドン
    let LondonUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&lang=ja&appid=4b5774e9f3d2a07b84f0f2f88e486224";
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
        let requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + CityName + "&units=metric&lang=ja&appid=4b5774e9f3d2a07b84f0f2f88e486224";
        console.log(requestUrl);
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
