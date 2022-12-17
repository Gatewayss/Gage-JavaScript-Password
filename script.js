// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordLength = prompt("How many characters would you like your password to be?")
let parsePasswordLength = parseInt(passwordLength)
let passwordLowerCase = confirm("Would you like lower case characters in your password??")
let lowerCasePreference;
let passwordUpperCase = confirm("Would you like uppercase characters in your password?")
let passwordNumbers = confirm("Would you like number in your password?")
let specialCharactersPreference = confirm("Would you like to add special characters?")

let options = []
let newArray = []
let lowercaseArray = [...'abcdefghijklmnopqrstuvwxyz']
let uppercaseArray = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
let numberArray = [1,2,3,4,5,6,7,8,9]
let specialCharactersArray = [..."!#$%&'()*+,-./:;<=>?@[^_`{|}~"]
console.log(specialCharactersArray)
// Write password to the #password input
function generatePassword() {
  if (passwordLowerCase === true) {
    options = options.concat(lowercaseArray)
    console.log(options)
  } else {
    console.log("no to lowercase")
  }
  if (passwordUpperCase === true) {
    options = options.concat(uppercaseArray)
    passwordUpperCase = console.log(options)
  } else {
    passwordUpperCase = console.log("no to uppercase")
  }

  if (passwordNumbers === true) {
    options = options.concat(numberArray)
    passwordNumbers = console.log(options)
  } else {
    passwordNumbers = console.log("no to numbers")
  } 

  if (specialCharactersPreference) {
    options = options.concat(specialCharactersArray)
    specialCharactersPreference = console.log(options);
  } else {
    specialCharactersPreference = console.log("no to special characters")
  }

  if (parsePasswordLength < 7 || parsePasswordLength > 129) {
    console.log("try again")
  } else {
    for (let i = 0; i < parsePasswordLength; i++) {
      newArray.push(options[Math.floor(Math.random() * (90 - 0))])
      console.log(newArray)
    }
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
