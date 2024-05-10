(function() {
  // data types 
  // no error and no differences
  let message = "hello";
  console.log(message);
  message = 123456;
  console.log(message);

  // same for numbers
  let n = 123;
  console.log(n);
  n = 12.345;
  console.log(n);

  // infinity 
  console.log( 1 / 0 ); // Infinity
  console.log(Infinity);
  // NaN
  console.log("Not a Number" /2 );
  console.log( NaN + 1 ); // NaN
  console.log( 3 * NaN ); // NaN
  console.log( "not a number" / 2 - 1 ); // NaN



  // BigInt range ±(253-1)
  console.log(9007199254740991 + 1); // 9007199254740992
  console.log(9007199254740991 + 2); // 9007199254740992

  // string
  let str = "Hello";
  let str2 = 'Single quotes are ok too';
  const phrase = `can embed another ${str} and ${str2}`;
  console.log(phrase);
  //the result is ${1 + 2} (double quotes do nothing)
  console.log( "the result is ${1 + 2}" );

  // boolean types
  let nameFieldChecked = true; // yes, name field is checked
  let ageFieldChecked = false; // no, age field is not checked

  let isGreater = 4 > 1;

  console.log( isGreater ); // true (the comparison result is "yes")


  // null and undefined
  let age = null; // does not belong to any types.
  let age1; // undefined, The meaning of undefined is “value is not assigned”
  console.log(age1); // shows "undefined"
  
  // it is possible to explicitly assign undefined to a variable but not usefull
  let age2 = 100;

  // change the value to undefined
  age2 = undefined;

  console.log(age2); // "undefined"

  //Objects and Symbols
  typeof undefined // "undefined"

  typeof 0 // "number"

  typeof 10n // "bigint"

  typeof true // "boolean"

  typeof "foo" // "string"

  typeof Symbol("id") // "symbol"

  typeof Math // "object"  (1)

  typeof null // "object"  (2)

  typeof console.log() // "function"  (3)


  let name = "Margot";

  console.log( `hello ${1}` ); // ?

  console.log( `hello ${"name"}` ); // ?

  console.log( `hello ${name}` ); // ?
})()