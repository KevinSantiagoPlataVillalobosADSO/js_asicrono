// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.
let desde = parseInt(prompt("INGRESE EL NUMERO POR EL CUAL EMPEZAR"));
let hasta = parseInt(prompt("INGRESE EL NUMERO POR EL QUE SE TERMINA"));

let imprimirNumeros = function(desde, hasta){
    try {
        if(desde < hasta){
            let i = desde;
            let time = setInterval(() => {
                if(i >= hasta){
                    clearInterval(time)
                }
                console.log(i)
                i++;
            }, 1000);
        }
        else if(desde > hasta){
            let i = desde;
            let time = setInterval(() => {
                if(i <= hasta){
                    clearInterval(time)
                }
                console.log(i)
                i--;
            }, 1000);
        }
        else if(desde == hasta){
            console.log("Numero igual")
        }
        else{
            throw new Error;
        }
    } 
    catch (e) {
        alert("error")
    }
}

imprimirNumeros(desde, hasta);

function imprimirNumerosTimeout(desde, hasta) {
    try {
        if(desde < hasta){
            function imprimir(numero) {
              console.log(numero);
              if (numero < hasta) {
                setTimeout(function() {
                  imprimir(numero + 1);
                }, 1000); 
              }
            }
            imprimir(desde);
        }
        else if(desde > hasta){
            function imprimir_r(numero) {
                console.log(numero);
                if (numero > hasta) {
                  setTimeout(function() {
                    imprimir_r(numero - 1);
                  }, 1000); 
                }
              }
            imprimir_r(desde);
        }
        else if(desde == hasta){
            console.log("Mismo numero")
        }
        else{
            throw new Error;
        }
        
    } catch (error) { 
        console.log(`Error ${error}`)
   }
}  
imprimirNumerosTimeout(desde, hasta);