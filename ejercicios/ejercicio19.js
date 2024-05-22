// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.
console.log("hola")
async function llamado(){
    await fetch("ejercicio19.json")
    .then((respuesta) => {return respuesta.json();})
    .then((data) => {
        const filtrar = data.filter(i => i.marca.includes("Ford")).map(marca => ({
            name: marca.marca,
            modelo: marca.modelo
        }))
        console.log(filtrar)
    })
    .catch((error) => {
        console.error("Error")
    })
}
llamado();