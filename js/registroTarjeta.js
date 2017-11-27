(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller("GreetingController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
        var url = 'http://localhost:8080/backendPpi/rest/tipotarjeta';

        $scope.registro = function (nombre = "", acronimo = "", tazaInteres = "", plazoMax = "", cupoMax = "", multa = "") {
            var card = new Object();
            //  card.codigo = codigo;
            card.nombre = nombre;
            card.acronimo = acronimo;
            card.tazaInteres = tazaInteres;
            card.plazoMax = plazoMax;
            card.cupoMax = cupoMax;
            card.multa = multa;
            card.idFranquicia = {
                "idFranquicia": 2037,
                "nombre": "VISAELETRONE",
                "acronimo": "ELETRONE",
                "rangoInicial": 3501,
                "rangoFinal": 3700
            };            
            var data = JSON.stringify(card);

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
                $window.location.reload();
            }, function errorCallback(response) {
                var error = "Datos incorrectos";
                $window.alert(error);
                $window.location.reload();
            });
        }
    }]);
}());