// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

let nom = ["maria", "josias", "vicente", "casemiro"];
console.log(nom)
//creamos funcion callback
let every = function(name){
    if(name.includes("i")){
        return true
    }
    else{
        return false
    }
}

//usando every buscamos si dentro del callback TODOS los llamados devuelven true
const nuevo = nom.every(every);
console.log(nuevo)