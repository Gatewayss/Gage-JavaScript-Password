// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordLength = prompt("How many characters would you like your password to be?")
let parsePasswordLength = parseInt(passwordLength)
let passwordLowerCase = confirm("Would you like lower case characters in your password??")
let lowerCasePreference;
let passwordUpperCase = confirm("Would you like uppercase characters in your password?")
let passwordNumbers = confirm("Would you like number in your password?")

// Write password to the #password input
function generatePassword() {
  if (parsePasswordLength < 7 || parsePasswordLength > 129) {
    console.log("Quit")
  } else if (parsePasswordLength > 7 && parsePasswordLength < 129) {
    console.log(parsePasswordLength)
  } 

  if (passwordLowerCase === true) {
    lowerCasePreference = console.log("yes to lowercase")
  } else {
    lowerCasePreference = console.log("no to lowercase")
  }

  if (passwordUpperCase === true) {
    passwordUpperCase = console.log("yes to uppercase")
  } else {
    passwordUpperCase = console.log("no to uppercase")
  }
}
generatePassword()


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

/* todo:

click generateBtn to generate password
prompt one is password length 8-128
prompt to use lowercase 
prompt to use uppercase
prompt to use numbers and or special characters
once all the prompts are done a password should generate 
it can be displayed as alert or in the text box 
*/