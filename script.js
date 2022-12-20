// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables that store the users prompts answers  
let parsePasswordLength;
let lowercasePreference;
let uppercasePreference;
let numberPreference;
let specialCharactersPreference;

// arrays used to generate the password
let characterOptions = []
let newPasswordArray = []
let lowercaseArray = [...'abcdefghijklmnopqrstuvwxyz']
let uppercaseArray = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialCharactersArray = [..."!#$%&'()*+,-./:;<=>?@[^_`{|}~"]

// displayPrompts checks if the character length fits the 8-128 character limit
// if so then continues to display the other prompts 
function displayPrompts() {
  let passwordLength = prompt("How many characters would you like your password to be?")
  parsePasswordLength = parseInt(passwordLength)
  if (parsePasswordLength < 8 || parsePasswordLength > 128) {
    alert("Opps! Password length must be between 8 to 128 characters. Click okay to try again.")
    displayPrompts()
  } else {
    lowercasePreference = confirm("Would you like lower case characters in your password?")
    uppercasePreference = confirm("Would you like uppercase characters in your password?")
    numberPreference = confirm("Would you like number in your password?")
    specialCharactersPreference = confirm("Would you like to add special characters?")
  }
}

// generatePassword() and adds the desired arrays/characters 
// to a new array called characterOptions 
function generatePassword() {
  if (lowercasePreference) {
    characterOptions = characterOptions.concat(lowercaseArray)
    console.log(characterOptions)
  } else {
    lowercasePreference = console.log("no to lowercase")
  }
  if (uppercasePreference) {
    characterOptions = characterOptions.concat(uppercaseArray)
    uppercasePreference = console.log(characterOptions)
  } else {
    uppercasePreference = console.log("no to uppercase")
  }
  if (numberPreference) {
    characterOptions = characterOptions.concat(numberArray)
    numberPreference = console.log(characterOptions)
  } else {
    numberPreference = console.log("no to numbers")
  }
  if (specialCharactersPreference) {
    characterOptions = characterOptions.concat(specialCharactersArray)
    specialCharactersPreference = console.log(characterOptions);
  } else {
    specialCharactersPreference = console.log("no to special characters")
  }
  // newPassword array picks random characters fromm the characterOptions array
  // to generate the password 
  if (parsePasswordLength) {
    for (let i = 0; i < parsePasswordLength; i++) {
      newPasswordArray.push(characterOptions[Math.floor(Math.random() * characterOptions.length)]);
    }
    // newPassword array is then made into a string and  
    // becomes the users password
    return (newPasswordArray.join('').toString());
  }
}

// displays the text for the password 
function writePassword() {
  displayPrompts()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



