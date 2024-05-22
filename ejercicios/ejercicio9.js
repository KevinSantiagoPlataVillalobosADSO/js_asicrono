// 9. Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)

const _ = require("underscore-contrib"); 
let lista = [1, 234, 34, 46, 7, 89, -32];

let drop = _.dropWhile(lista, (e) => {
    return e >= 0;
});
// 
console.log(lista)
console.log(drop)

// (ingresar a la carpeta ejercicio
//     npm i "underscore-contrib"
//     cd ejercicios
//     node ejercicio9.js
// )