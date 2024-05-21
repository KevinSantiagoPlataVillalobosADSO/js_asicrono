let promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa Ejecutada")
    }, 3000);
    
})

promesa.then((resol) => {alert(resol)})
