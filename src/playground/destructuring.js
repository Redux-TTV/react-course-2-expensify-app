//const person = {
//  name: 'Cael',
//  age: 27,
//  location: {
//    city: 'Eugene',
//    temp: 80
//  }
//};
//
//const {name: firstName = 'Anonymous', age} = person;
////const name = person.name;
////const age = person.age;
//
//console.log(`${firstName} is ${age}.`);
//
//const {temp: temperature, city} = person.location;
//if (city && temperature) {
//  console.log(`It's ${temperature} in ${city}.`)
//}
//
//const book = {
//  title: 'Ancillary Mercy',
//  author: "can't remember",
//  publisher: {
//    name: 'Penguin'
//  }
//};
//
//const {name: publisherName = 'Self-Published'} = book.publisher;
//
//console.log(publisherName);

// Array destructuring
const address = ['1234 NW something street', 'Eugene', 'Oregon', '97402'];
//const address = []
const [street, city = 'Vancouver', state = 'Washington', zip] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (iced)', '$3.50', '$3.75', '$4.00'];
const [product, , mPrice] = item;
console.log(`A medium ${product} costs ${mPrice}.`);
