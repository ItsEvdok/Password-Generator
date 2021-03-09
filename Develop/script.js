// Assignment code here
function generatePassword(){
  var passLength = window.prompt("How long would you like your password to be?");

  
  var special = window.confirm("Would you like your password to include special characters?");


  var numbers = window.confirm("Would you like your password to include numbers?");


  var upper = window.confirm("Would you like your password to include uppercase letters?");


  var lower = window.confirm("Woudl you like your password to include lowercase letter?");

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);