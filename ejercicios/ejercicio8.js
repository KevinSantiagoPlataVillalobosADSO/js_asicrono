// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

//primera forma --- no devuelve undefined sino -1

// let lista = [100, 123, 124, 142, 125, 512, 152, 243];
// console.log(lista);
// //creamos la funcion callback
// const find = function(num){
//     if(num > 500){
//         return true
//     }
//     else{
//         return false
//     }
// };
// //creamos la funcion find la cual va a mandar el primer elemento del callback que devuelva true
// let nueva = lista.findIndex(find);
// console.log(nueva)

//segunda forma creando mi funcion propia

const findIndex = function (lista, callback) {
    for (let i = 0; i < lista.length; i++) {
        if (callback(lista[i])) {
            return i;
        }
    }
    return undefined;
}

// Ejemplo de uso:
let lista = [100, 123, 124, 142, 125, 512, 152, 243];
console.log(lista)
// Creamos la función callback
const condicion = (num) => num > 500

// Usamos la función findIndex para encontrar el índice del primer elemento que cumple la condición
let nueva = findIndex(lista, condicion);
console.log(nueva); // Output: 5, porque 512 es el primer número mayor que 500 y está en el índice 5