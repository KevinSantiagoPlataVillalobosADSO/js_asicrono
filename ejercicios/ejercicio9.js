// 9. Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)

// Requiring the lodash library 
const _ = require("lodash"); 

// Original array 
let array1 = [1, 3, 4, 5, 5, 6]   
// Using _.dropWhile() method 
let newArray = _.dropWhile(array1, (e) => { 
    return e != 5; 
}); 

// Original Array 
console.log("original Array: ", array1)   
// Printing the newArray 
console.log("new Array: ", newArray) 