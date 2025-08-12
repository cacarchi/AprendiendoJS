
let nombre = 'Peter Parker';
console.log(nombre);
console.log(typeof(nombre));

nombre = 'Ben Parker';
console.log(nombre);
console.log(typeof(nombre));

nombre = "Tía May 'La tía!!!'";
console.log(nombre);
console.log(typeof(nombre));

nombre = `Ozzy Osbourne`;
console.log(nombre);
console.log(typeof(nombre));

nombre = 123;
console.log(nombre);
console.log(typeof(nombre));

/////////////////////
//BOOLEAN
/////////////////////

let esMarvel = true; 
console.log(esMarvel);
console.log(typeof(esMarvel));

// esMarvel = True; 
// console.log(esMarvel);
// console.log(typeof(nombre));

esMarvel = false; 
console.log(esMarvel);
console.log(typeof(esMarvel));

/////////////////////
// NUMEROS
/////////////////////

let edad = 33;
console.log(edad)
console.log(typeof(edad))

edad = 33.000003;
console.log(edad)
console.log(typeof(edad))

/////////////////////
// UNDEFINED
/////////////////////
let superPoder;
console.log(typeof(superPoder))


/////////////////////
// NULL
/////////////////////
let soyNull = null;
console.log(typeof(soyNull))


/////////////////////
// SYMBOL
/////////////////////
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof(symbol1));
console.log(typeof(symbol2));
console.log(symbol1 === symbol2); //=>false
