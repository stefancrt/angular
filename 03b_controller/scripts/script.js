// Ejemplo del controller NO utilizando inyecciÃ³n del $scope,
// sino la forma controller ... as en la directiva
// junto con la definiciÃ³n de clase propia de ES6/2015
// tal como recomienta la guÃ­a de estilo de AngularJS (ES2015) de Todd Motto


 class AcumuladorCtrl {

    //constructor () {
    //}

    $onInit () {
       this.number = 10;
			this.total = this.number;
    }

   botonAdd () {
				this.total += parseInt(this.number);
			}
       
    botonRest () {
        this.total -= parseInt(this.number);
    }   
} // Fin de la clase


angular.module("acumulador", [])
.controller("AcumuladorCtrl", AcumuladorCtrl );
