(function () {
    var app = angular.module("weatherApp");

    app.factory('weatherService', ['$http', function ($http) {
        var apiKey = '0d806ac2bf76b7cd1e4681f53787deba';
        var weatherInfo = {
            getWeather: getWeather,
            getForecast: getForecast,
        };
        return weatherInfo;

        function getWeather(cityName) {
            return $http.get('http://api.openweathermap.org/data/2.5/weather', { params: { q: cityName, APPID: apiKey} });
        }

        function getForecast(cityName) {
            return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily', { params: { q: cityName, APPID: apiKey, cnt: 4, units: "metric"} });
        }
    }]);
})();