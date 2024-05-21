// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.

//creamos array
let nom = ["maria", "jose", "vicente", "casemiro"];
console.log(nom)
//creamos funcion callback
// let mayus = (x) => x.oUpperCase();
let mayus = function(name){
    return name.toUpperCase();
}

//mapeamos el array usando el callback para cada una de las operaciones
const nuevo = nom.map(mayus);
console.log(nuevo)