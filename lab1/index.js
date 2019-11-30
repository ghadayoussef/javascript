"use strict";

var firstName = prompt("Please enter your first name");
var lastName = prompt("Please enter your last name");
var confirm1 = confirm("is this your name : " + firstName + " "+lastName + " ?");
if (confirm1 == 1){
  alert ("hi "+ firstName+ " "+ lastName);
  var year = prompt("please enter your year of birth");
  var age = 2019 - year;
  alert("your age is " + age);
 
}
else {
  var firstName2 = prompt("Please enter your first name");
  var lastName2 = prompt("Please enter your last name");
  var confirm2 = confirm("is this your name : " + firstName2 + " "+lastName2 + " ?");
  console.log(confirm2);
if (confirm2 == true){
  alert ("hi "+ firstName2+ " "+ lastName2);
  var year2 = prompt("please enter your year of birth");
  var age2 = 2019 - year2;
  alert("your age is " + age2);
 
}
  else
 alert("you are not welcome");
   
}



// function enterName(){
//   var name = prompt("Please enter your name");
//   var confirm = confirm("is this your name : " + name + "?");
//   if (confirm == 1){
//     confirmation(name);
   
//   }
//   else return enterName();
  

// }

// function confirmation(userName1){
  
//   alert ("hi "+ userName1);
//   var year = prompt("please enter your year of birth");
//   var age = 2019 - year;
//   alert("your age is " + age);
// }
