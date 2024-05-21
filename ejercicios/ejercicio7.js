// 7. Crear una función find que acepte un array y un callback y que:

// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined
//creamos una lista
let lista = [100, 123, 124, 142, 125, 512, 152, 243];
console.log(lista);
//creamos la funcion callback
const find = function(num){
    if(num > 500){
        return true 
    }
    else{
        return false
    }
};
//creamos la funcion find la cual va a mandar el primer elemento del callback que devuelva true
let nueva = lista.find(find);
console.log(nueva)