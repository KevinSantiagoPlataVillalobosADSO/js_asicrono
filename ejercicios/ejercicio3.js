// 2. En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
//         pesado que demora más de 100 ms en finalizar.
//         ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
//         a) Después del bucle.
//         b) Antes del bucle.
//         c) Al comienzo del bucle.
//         ¿Qué va a mostrar alert()?

let i = 0;
setTimeout(() => alert(i), 100);
for (let j = 0; j < 100000000; j++) {
    i++;
}

alert("Respuesta: a) Despues del bucle \n esto se debe a que js es un lengaje de un solo hilo por lo que el timeout se va a la fila de tareas para ejecutarse luego del ciclo.\n el alert va a mostrar un icremento de uno en uno de una variable asignada como i c:")