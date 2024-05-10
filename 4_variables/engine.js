(function() {
  // let is storage named variable
    let user = 'John';
    let age = 25;
    let message = 'Hello';
    message = "World!"


    console.log(message); // message change value
    // var old style 
    var message1 = 'Hello';


    // use varibale as camelCase
    let userName;
    let test123;

    // other type dollar or underscrore as view regular variable
    let $ = 1; // declared a variable with the name "$"
    let _ = 2; // and now a variable with the name "_"

    console.log($ + _); // 3


    // incorrect variable names
    //let 4a; // cannot start with a digit

    //let my-name; // hyphens '-' aren't allowed in the name

    // Reserved names
    /*
      let let = 5; // can't name a variable "let", error!
      let return = 5; // also can't name it "return", error!
    */

    // An assignment without use strict

    // note: no "use strict" in this example

    num = 5; // the variable "num" is created if it didn't exist

    console.log(num); // 5

    // constant (unchanging) variable, use const instead of let

    const myBirthday = '18.04.1982';

    //myBirthday = '01.01.2001'; // error, can't reassign the constant!


    const COLOR_RED = "#F00";
    const COLOR_GREEN = "#0F0";
    const COLOR_BLUE = "#00F";
    const COLOR_ORANGE = "#FF7F00";

    // ...when we need to pick a color
    let color = COLOR_ORANGE;
    console.log(color); // #FF7F00

    
  })()