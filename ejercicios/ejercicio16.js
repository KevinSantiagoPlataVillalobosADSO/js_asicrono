// 16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

new Promise(function(resolve, reject){
    setTimeout(() => resolve(0), 1000);
}).then(function(result){
    return new Promise((resolve, reject) => {
        console.log("primer promesa con 2");
        setTimeout(() => resolve(result + 2), 1000);
    })
}).then(function(result){
    return new Promise((resolve, reject) => {
        console.log("segunda promesa con 7")
        setTimeout(() => resolve(result + 7), 1000);
    })
}).then(function(result){
    return new Promise((resolve, reject) => {
        console.log("tercera promesa con 4")
        setTimeout(() => resolve(result + 4), 1000);
    })
}).then(function(result){
    console.log(result)
})
