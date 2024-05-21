// 14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
//         diga "Operación completada". Utiliza async/await.
//se crea una funcion asyncrona
async function espera(a){
    //usamos await para esperar la respuesta de la promesa
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operacion completada")
        }, 2000)
    });
}
//llamamos a la funcion asyncrona y usamos .then para imprimir el resultado
console.log(espera().then((resultado) => {
    console.log(resultado)
}))