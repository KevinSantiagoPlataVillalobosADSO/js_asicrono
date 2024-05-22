// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

// Se crean las tres promesas
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa 1 completada');
  }, 1000);
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa 2 completada');
  }, 2000);
});

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa 3 completada');
  }, 3000);
});

// Usamos Promise.all() con un array de promesas
Promise.all([promesa1, promesa2, promesa3])
  .then((resultado) => {
    console.log('Todas las promesas se han completado:', resultado);
  })
  .catch((error) => {
    console.error('Al menos una promesa fue rechazada:', error);
  });