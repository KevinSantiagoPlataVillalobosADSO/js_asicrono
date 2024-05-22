// 10. Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)

const _ = require("lodash"); 
let lista = [1, 234, 34, -46, 7, 89, 32];

let take = _.takeWhile(lista, (e) => {
    return e >= 0;
});
// 
console.log(lista)
console.log(take)

// (ingresar a la carpeta ejercicio
//     npm i "lodash"
//     cd ejercicios
//     node ejercicio10.js
// )