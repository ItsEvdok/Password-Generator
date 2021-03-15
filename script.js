// Assignment code here
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var specialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var number = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

function generatePassword(){ 

  var possibilities = [];

  var ranPass = '';

  var passLength = parseInt(prompt("How long would you like your password to be?"));
  if(passLength <= 7 || passLength >= 129 || isNaN(passLength)){
    alert("The password must be a number between 8 and 128 characters long!");
    return
  }

  var special = window.confirm("Would you like your password to include special characters?");
  if(special === true){
    possibilities.push(...specialChar);
  }
  var numbers = window.confirm("Would you like your password to include numbers?");
  if (numbers === true){
    possibilities.push(...number)
  }
 
  var upper = window.confirm("Would you like your password to include uppercase letters?");
  if(upper === true){
    possibilities.push(...upperCase);
  }
  var lower = window.confirm("Wood you like your password to include lowercase letter?");
  if(lower === true){
    possibilities.push(...lowerCase);
  }

  for (var i = 0; i < passLength; i++){
    var tempIndex = Math.floor(Math.random() * possibilities.length);
    ranPass = ranPass + possibilities[tempIndex];
  }

  return ranPass
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