// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

// Promise 1: Se resuelve después de 1 segundo
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa 1 completada');
    }, 1000);
  });
  
  // Promise 2: Se rechaza después de 2 segundos
  const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promesa 2 rechazada');
    }, 2000);
  });
  
  // Promise 3: Se resuelve después de 3 segundos
  const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa 3 completada');
    }, 3000);
  });
  
  // Utilizamos Promise.allSettled() con un array de promesas
  Promise.allSettled([promesa1, promesa2, promesa3])
    .then((results) => {
      console.log('Estado de todas las promesas:', results);
    });