const llamado = function(){
    setTimeout(() => {
        fetch("ejercicio17.json")
        //LLamada al archivo que retorna una promesa
        //se castea la respuesta a Json con (.json();)
        .then((response) => {return response.json();})
        //si la promesa se resuelve va a imprimir los datos
        .then((datos) => {console.log(datos)})
        //si ocurre un error se tomara con el catch
        .catch((error) => {console.error("Error en"+error)})
    }, 2000);
}
//llamamos la funcions
llamado();