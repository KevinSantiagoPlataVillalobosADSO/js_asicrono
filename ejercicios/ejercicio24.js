// Crear un objeto proxy usando la clase Proxy

const usuario = {
    nombre: "Kevin",
    email: "Ksantiagoplata@gmail.com",
    edad: 12
  };
  
  const proxy = new Proxy(usuario, {
    get(target, prop) {
      console.log(`Obteniedo ${prop} `);
      return target[prop];
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
  });

console.log(proxy.nombre);
proxy.email = "kevinsplata@gmail.com"; 
console.log(proxy.email);
console.log(proxy.edad) 