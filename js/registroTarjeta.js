(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller("GreetingController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
        var url = 'http://localhost:8080/backendPpi/rest/tipotarjeta';
        var urlFranquicia = 'http://localhost:8080/backendPpi/rest/franquicia';

        $http({
            method: "GET",
            url: urlFranquicia
        }).then(function (response) {
            $scope.franquicias = response.data;
        }, function errorCallback(response) {
            var error = "Datos incorrectos";
            $window.alert(error);
        });

        $scope.registro = function (nombre = "", acronimo = "", tazaInteres = "", plazoMax = "", cupoMax = "", multa = "", nombreFranquicia = "") {

            var card = new Object();
            var object = new Object();
            var i = 0;
            while(i < $scope.franquicias.length){
                if($scope.franquicias[i].nombre == nombreFranquicia){
                    object.idFranquicia = $scope.franquicias[i].idFranquicia;
                    object.nombre = $scope.franquicias[i].nombre;
                    object.acronimo = $scope.franquicias[i].acronimo;
                    object.rangoInicial = $scope.franquicias[i].rangoInicial;
                    object.rangoFinal = $scope.franquicias[i].rangoFinal;
                }
                i++;
            }
            
            card.idTarjeta = "";
            card.nombreTarjeta = nombre;
            card.acronimo = acronimo;
            card.tasaInteres = tazaInteres;
            card.plazo = plazoMax;
            card.cupo = cupoMax;
            card.multa = multa;
            card.idFranquicia = {
                "idFranquicia": object.idFranquicia,
                "nombre": object.nombre,
                "acronimo": object.acronimo,
                "rangoInicial": object.rangoInicial,
                "rangoFinal": object.rangoFinal
            };
            var data = JSON.stringify(card);
            console.log(data);
            $http({
                method: "POST",
                url: url,
                headers: {
                    'Content-Type': "application/json"
                },
                data
            }).then(function (response) {
                var success = "Registrado con Exito";
                $window.alert(success);
                console.log(response.data);
            }, function errorCallback(response) {
                var error = "Datos incorrectos";
                $window.alert(error);
            });
        }
    }]);
}());