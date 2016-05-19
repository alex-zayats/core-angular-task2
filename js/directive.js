 (function () {
    var app = angular.module("weatherApp");
     app.directive("forecastDay", ['$compile',  function ($compile) {
            return {
                restrict: "E",
                scope: { currentWeather: '=' },
                templateUrl: '../templates/ForecastDayTemplate.html',
                replace: true,
                transclude: true,
                link: function (scope, elm, attrs) {}
            };
    }]);
})();