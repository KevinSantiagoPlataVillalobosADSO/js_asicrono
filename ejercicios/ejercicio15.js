// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

let promesa = new Promise((reject) => {
    setTimeout(() => {
        reject(new Error("Promise rechazada"))
    }, 3000);
    
})

promesa.then((e) => {console.log(e)})
