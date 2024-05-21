// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

let nom = ["maria", "jose", "vicente", "casemiro"];
console.log(nom)
//creamos funcion callback

let Only_m = function(name){
    if(name.includes("m")){
        return true
    }
}

//filtramos el array usando el callback para cada una de las operaciones
const nuevo = nom.filter(Only_m);
console.log(nuevo)