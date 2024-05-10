(function() {
// if else else if statement 
let year = 2012;//console.log('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  console.log( 'Too early...' );
} else if (year > 2015) {
  console.log( 'Too late' );
} else {
  console.log( 'Exactly!' );
}
// Boolean conversion
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  console.log('is it working');                                                                                                                                                                                                                                                                                                                                                                              
}

// Conditional operator ‘?’

let accessAllowed;
let age1 = 2012;//prompt('How old are you?', '');

if (age1 > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);

let accessAllowed1 = (age1 > 18) ? true : false;


// multiple `?`
let age2 = 2012;//prompt('age2?', 18);

let message = (age2 < 3) ? 'Hi, baby!' :
  (age2 < 18) ? 'Hello!' :
  (age2 < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message );

// Non-traditional use of ‘?’
let company = 'new'; //prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   console.log('Right!') : console.log('Wrong.');
})()