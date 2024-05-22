// Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola

let regex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
const usuario = {
    nombre: "Kevin", //solo alfanumerico
    email: "Ksantiagoplata@gmail.com",
    edad: 12 //solo numeros
  };
  
  const proxy = new Proxy(usuario, {
    get(target, prop) {
      console.log(`Obteniedo ${prop} `);
      return target[prop];
    },
    set(target, prop, value) {
        if (prop === 'nombre' && typeof prop != 'string') {
          throw new Error('Solo caracteres alfanumericos c:');
        }
        if (prop === 'edad' && typeof prop != 'number') {
            throw new Error('Solo numeros plis');
        }
        if (prop === 'email' && regex.test(prop) == true) {
            throw new Error('Solo numeros plis');
        }
        target[prop] = value;
        return true;
    },
  });

console.log(proxy.nombre);
proxy.email = "kevinsplata@gmail.com"; 
console.log(proxy.email);
console.log(proxy.edad) 
proxy.edad = "ks"