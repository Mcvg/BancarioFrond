//Funcion para listar compras
var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', '$http', function ($scope, $http) {
    if (localStorage.getItem("token") == null) {
        $window.location.href = './inicio.html';
    }
    $http({
        method: 'GET',
        url: 'http://localhost:8080/backendPpi/rest/compra'

    }).then(function successCallback(response) {
        $scope.posts = response.data
       console.log(response.data[0].idTdc.idTarjeta.nombreTarjeta);
    }, function errorCallback(response) {

    });
}]);