(function() {
  // use browser
  //alert, prompt, confirm
  alert("Hello");

  //title : The text to show the visitor.
  let title;
  //default : An optional second parameter, the initial value for the input field. 
  result = prompt(title, ['default', 'default1']);
  
  let age = prompt('How old are you?', 100);
  alert(`You are ${age} years old!`); // You are 100 years old!
  let question = "ayo whatsup?";
  result = confirm(question);

  let isBoss = confirm("Are you the boss?");

  alert( isBoss ); // true if OK is pressed
})()