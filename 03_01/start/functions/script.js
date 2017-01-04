$$ = (function () {
    console.log('Funcion general creada');
    var creardor = "Josemy";
    
    var funciones = {

        funcionOne: function () {
            console.log("Soy la funcion 1");
        },

        funcionTwo: function (param) {
            console.log("Soy la funcion 2: " + param);
        },

        getCreador: function () {
            console.log(this);
            return creardor;
        }
    };

    return funciones;
})();