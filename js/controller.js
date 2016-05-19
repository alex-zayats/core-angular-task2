var app = angular.module('weatherApp', ['ui.bootstrap', 'ui.bootstrap.tpls']);

app.controller('weatherCtrl', function($scope, $http, $uibModal, weatherService) {

	$scope.cities = ["Homel", "Minsk", "Moscow"];
	$scope.currentCity = "Homel";
	$scope.weatherDate = new Date();
	$scope.weatherDateDay = new Date();

	$scope.cityChanged = function cityChanged(){
		weatherService.getForecast($scope.currentCity)
	    	.success(function (response) {
				$scope.currentWeather = response;
		    })
		    .error(function(reject){
		    	console.log(reject);
		    });
	}

	$scope.addCityPopup = function addCityPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                template: modalTemplate,
                windowClass: 'add-dialog',
                controller: ModalInstanceController,
				resolve: {}
            });
			modalInstance.result.then(function (newCity) {
					if(newCity) $scope.cities.push(newCity);
			    }, function (reason) {
			      	console.log("just closed");
			    });
    }

    var modalTemplate = `<div>
        <div class="modal-header">
            <h3 class="modal-title">
                Add city
            </h3>
        </div>
        <div class="modal-body">
        	<input class="form-control" type="text" ng-model="newCity">
        </div>
        <div class="modal-footer">
            <button class="btn btn-success" type="button" ng-click="addCity()">Add</button>
            <button class="btn btn-warning" type="button" ng-click="$dismiss()">Cancel</button>
        </div>
    </div>`;

	function ModalInstanceController($scope, $uibModalInstance) {

        $scope.addCity = function() {
            $uibModalInstance.close($scope.newCity);
        };

        /*$scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };*/
    }
});