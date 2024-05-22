// Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").

const llamado = function(){
    setTimeout(() => {
        fetch("ejercicio18.json")
        //LLamada al archivo que retorna una promesa
        //se castea la respuesta a Json con (.json();)
        .then((response) => {return response.json();})
        //si la promesa se resuelve va a imprimir los datos
        .then((datos) => {
            const filtro = datos.filter(f => f.nombre.startsWith("A"));
            console.log(filtro)
        })
        
        .catch((error) => {console.error("Error en "+error)})
    }, 2000);
}
//llamamos la funcion
llamado();