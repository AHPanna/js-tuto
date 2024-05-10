(function() {
// || (OR)

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false
if (1 || 0) { // works just like if( true || false )
  console.log( 'truthy!' );
}

//OR "||" finds the first truthy value

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

true || console.log("not printed");
false || console.log("printed");

// && (AND)
if (1 && 0) { // evaluated as true && false
  console.log( "won't work, because the result is falsy" );
}

// AND “&&” finds the first falsy value
// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0
console.log( 1 && 2 && null && 3 ); // null
console.log( 1 && 2 && 3 ); // 3, the last one


// ! (NOT)

console.log( !!"non-empty string" ); // true
console.log( !!null ); // false
console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false

// new commands to full fullfill


})()
