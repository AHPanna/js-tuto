(function() {
  // Boolean is the result
  console.log( 2 > 1 );  // true (correct)
  console.log( 2 == 1 ); // false (wrong)
  console.log( 2 != 1 ); // true (correct)

// String comparison
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

// Comparison of different types

console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1
let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!

// Strict equality

console.log( 0 == false ); // true

console.log( 0 === false ); // false, because the types are different

//Comparison with null and undefined

console.log( null === undefined ); // false
console.log( null == undefined ); // true

// Strange result: null vs 0
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

// An incomparable undefined

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)









})()