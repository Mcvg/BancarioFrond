//Funcion verificar el login 
var myApp = angular.module('myApp', []);
myApp.controller('GreetingController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    var url = 'http://localhost:8080/backendPpi/rest/usuario/login';
    $scope.login = function (username, password) {
        debugger;
        url = url + '?' + 'nomUsuario=' + username + '&password=' + password;
        $window.location.href = 'file:///C:/Users/Usuario/Desktop/backend/admin.html';
        then(function successCallback(response) {
        
        }, function errorCallback(response) {
            var error = "Usuario o Contraseña incorrecto";
            $window.alert(error);
            $window.location.reload();
        });
    }

}]);