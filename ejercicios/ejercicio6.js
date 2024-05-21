// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

//creamos una lista
let lista = [1, 2, 4, 6, 7, 32, 42, 51];
console.log(lista)
//funcion callback
const num = function(num){
    return num > 50;
}
//Usando el metodo some buscamos si almenos uno de los llamados devuelve true
const nueva = lista.some(num)

console.log(nueva)