// 22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
//         lista de elementos uno por uno.

async function procesado(Lista){
    await procesamiento(Lista);
}
let procesamiento = function(Lista){
    return new Promise((resolve) =>{
        Lista.forEach((elemento) => {
            console.log(elemento)
        })
    });
    
}

Lista = [12, 324, 532, 31, 23, 21, 43 ,34 ,32]
procesado(Lista);