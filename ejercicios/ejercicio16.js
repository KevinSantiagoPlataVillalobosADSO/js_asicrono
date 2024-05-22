// 16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

new Promise(function(resolve, reject){
    setTimeout(() => resolve(0), 1000);
}).then(function(result){
    return new Promise((resolve, reject) => {
        let num1 = 2
        console.log(`${result} + ${num1}`);
        setTimeout(() => resolve(result + num1), 1000);
    })
}).then(function(result){
    return new Promise((resolve, reject) => {
        let num2 = 7
        console.log(`resultado = ${result}`)
        console.log(`${result} + ${num2}`);
        setTimeout(() => resolve(result + num2), 1000);
    })
}).then(function(result){
    return new Promise((resolve, reject) => {
        let num3 = 4
        console.log(`resultado = ${result}`)
        console.log(`${result} + ${num3}`);
        setTimeout(() => resolve(result + num3), 1000);
    })
}).then(function(result){
    console.log(`resultado = ${result}`)
})
