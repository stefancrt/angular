// Ejemplo del controller utilizando inyecciÃ³n del $scope
// como era mÃ¡s habitual en los inicios de AngularJS

angular.module("miApp", [])
.controller("MainController", ["$scope", function ($scope) {
    $scope.nombre = 'Pepe'; 
    $scope.nuevoPensamiento = ''; // declaracion innecesaria pero recomendable
    $scope.aPensamientos = [];

    $scope.botonAdd = function () {
        $scope.aPensamientos.push($scope.nuevoPensamiento); 
        $scope.nuevoPensamiento = '';
    }
}]); // fin de Maincontroller