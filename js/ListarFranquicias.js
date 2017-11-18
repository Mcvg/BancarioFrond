//Funcion para listar usuarios
var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    if (localStorage.getItem("token") == null) {
        $window.location.href = './inicio.html';
    }
    $http({
        method: 'GET',
        url: 'http://localhost:8080/backendPpi/rest/franquicia'

    }).then(function successCallback(response) {
        $scope.posts = response.data
    }, function errorCallback(response) {

    });
}]);