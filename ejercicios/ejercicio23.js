// 23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
//         try/catch para mostrar un mensaje de error en caso de fallo.


async function llamado(){
    await fetch("ejercicio19.json")
    try {
        let llamado = await fetch("ejercicio23.json");
        let rta = await llamado.json();
        const filtrar = rta.filter(i => i.nombre.includes("f"));
        console.log(filtrar);
    } 
    catch (error) {
        console.error("Algo falló" + error)
    }
}
llamado();