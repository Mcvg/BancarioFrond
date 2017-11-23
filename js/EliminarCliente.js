//Funcion verificar el login 
var myApp = angular.module('myApp', []);
myApp.controller('GreetingController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    var url = 'http://localhost:8080/backendPpi/rest/persona/id?id';

    $scope.login = function (id) {
        url = url + '=' + 'nomUsuario=' + username + '&password=' + password;
        $http.get(url).then(function successCallback(response) {
            if (response.status == 200) {

                console.log(response.data.idPerfil.idPerfil);

                if (response.data.idPerfil.idPerfil == 1) {
                    $window.location.href = 'file:///C:/Users/Usuario/Desktop/backend/admin.html';
                } else if (response.data.idPerfil.idPerfil == 2) {
                    $window.location.href = 'file:///C:/Users/Usuario/Desktop/backend/cliente.html';
                }

                //
            } else {
                var error = "Usuario o Contraseña incorrecto";
                $window.alert(error);
                $window.location.reload();
            }
        });
    }
}]);