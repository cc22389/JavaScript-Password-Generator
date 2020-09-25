// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["~", "@", "#", "$", "%", "&", "-", "+", "="];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

//generate password

function generatePassword() {

  var passwordLength = prompt("Choose between 8 and 128 characters");

  // While correct number of characters
  while (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose between 8 and 128 characters");
    passwordLength = prompt("Choose between 8 and 128 characters");
    console.log(passwordLength);
  }

  // Ask if leters
  var letters = confirm("Would you like letters in your password?");
  if (letters === true) {
    // lower case?
    var ConfirmLowerCase = confirm("Would you like lower case letters?");
    // upper case?
    var ConfirmUpperCase = confirm("Would you like upper case letters?");
  }
  var ConfirmNumbers = confirm("Would you like numbers?");
  var ConfirmSpecialCharacters = confirm(" Would you like special characters?");

  // Build approved characters
  var approvedCharacters = [];

  // if lower case, add lower case
  if (ConfirmLowerCase === true) {
    approvedCharacters = approvedCharacters.concat(lowerCase);

  }
  // if upper case, add upper case
  if (ConfirmUpperCase === true) {
    approvedCharacters = approvedCharacters.concat(upperCase);
  }
  // if numbers, add numbers
  if (ConfirmNumbers === true) {
    approvedCharacters = approvedCharacters.concat(numbers);
  }
  // if special chars, add special chars
  if (ConfirmSpecialCharacters === true) {
    approvedCharacters = approvedCharacters.concat(specialCharacters);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
    // Use approved characters to build the password
    var password = " ";

    for (var i = 0; i < passwordLength; i++) {
      var oneCharacter = approvedCharacters[getRandomInt(approvedCharacters.length)]
      password = password.concat(oneCharacter);
  
    }
    return password; 
   
}


