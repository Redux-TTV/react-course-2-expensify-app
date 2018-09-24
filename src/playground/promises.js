const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Cael',
      age: 28
    });
    reject('something went wrong.');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1',data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is a returned promise');
    }, 5000);
  });
}).then((str) => {
  console.log('second then. ', str)
}).catch((error) => {
  console.log('error: ',error);
});

console.log('after');
