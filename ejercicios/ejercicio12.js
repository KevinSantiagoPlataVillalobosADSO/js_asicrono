// La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then, así:

function delay(ms){
    //tu codigo
    return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
}

delay(3000).then(() => alert("se ejecuta despues de 3 seg")).catch(() => alert("algo falló"))