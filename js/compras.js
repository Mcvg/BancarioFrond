//Funcion para listar compras
var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:8080/backendPpi/rest/compra'
    }).then(function successCallback(response) {
        $scope.posts = response.data
    }, function errorCallback(response) {

    });
}]);