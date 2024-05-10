(function() {
  // unary, binary operand
  /*

    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %,
    Exponentiation **.

  */
  let x = 1;
  x = -x;
  console.log( x ); // -1, unary negation was applied
  let xx = 1, y = 3;
  console.log( y - xx ); // 2, binary minus subtracts values
  // Remainder %
  console.log( 5 % 2 ); // 1, the remainder of 5 divided by 2
  console.log( 8 % 3 ); // 2, the remainder of 8 divided by 3
  console.log( 8 % 4 ); // 0, the remainder of 8 divided by 4
  // Exponentiation **
  console.log( 2 ** 2 ); // 2² = 4
  console.log( 2 ** 3 ); // 2³ = 8
  console.log( 2 ** 4 ); // 2⁴ = 16
  console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
  console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

  // String concatenation with binary +
  let s = "my" + "string";
  console.log(s); // mystring
  console.log( '1' + 2 ); // "12"
  console.log( 2 + '1' ); // "21"
  console.log(2 + 2 + '1' ); // "41" and not "221"
  console.log('1' + 2 + 2); // "122" and not "14"
  console.log( 6 - '2' ); // 4, converts '2' to a number
  console.log( '6' / '2' ); // 3, converts both operands to numbers
  // Numeric conversion, unary +
  // No effect on numbers
  let x1 = 1;
  console.log( +x1 ); // 1

  let y1 = -2;
  console.log( +y1 ); // -2

  // Converts non-numbers
  console.log( +true ); // 1
  console.log( +"" );   // 0
  let apples = "2";
  let oranges = "3";

  // both values converted to numbers before the binary plus
  console.log( +apples + +oranges ); // 5

  // the longer variant
  // console.log( Number(apples) + Number(oranges) ); // 5
  
  
  // Assignment = returns a value

  let a = 1;
  let b = 2;
  
  let c = 3 - (a = b + 1);
  
  console.log( a ); // 3
  console.log( c ); // 0
  

  // Chaining assignments
  let aa, bb, cc;

  aa = bb = cc = 2 + 2;
  
  console.log( aa ); // 4
  console.log( bb ); // 4
  // Modify-in-place


  let n = 2;
  n = n + 5;
  n = n * 2;
  let n1 = 2;
  n1 += 5; // now n = 7 (same as n = n + 5)
  n1 *= 2; // now n = 14 (same as n = n * 2)
  
  console.log( n1 ); // 14

  let n2 = 2;

  n2 *= 3 + 5; // right part evaluated first, same as n *= 8
  
  console.log( n2 ); // 16
  // Increment/decrement
  let counter = 2;
  counter++;        // works the same as counter = counter + 1, but is shorter
  console.log( counter ); // 3
  let counter1 = 2;
  counter1--;        // works the same as counter = counter - 1, but is shorter
  console.log( counter1 ); // 1

  let counter2 = 1;
  let a1 = ++counter2; // (*)
  
  console.log(a1); // 2

  let counter3 = 1;
  let a2 = counter3++; // (*) changed ++counter to counter++
  
  console.log(a2); // 1
  let counter4 = 0;
  counter4++;
  ++counter4;
  console.log( counter4 ); // 2, the lines above did the same




  //Comma

  let a4 = (1 + 2, 3 + 4);

  console.log( a4 ); // 7 (the result of 3 + 4)
  // three operations in one line
  for (a = 1, b = 3, c = a * b; a < 10; a++) {
    console.log(a)
  }
})()