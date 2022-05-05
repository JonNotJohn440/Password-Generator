// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("What should be the length of the password? Min 8 Max 128")
  if (passwordLength <8 || passwordLength >128){
    return alert("password length not allowed")
  }
  var passwordNumbers = confirm("Should the password include nummbers?")
  var passwordUppercase = confirm("Should the password contain uppercase characters?")
  var passwordLowercase = confirm("Should the password contain lowercase letters?")
  var passwordSpecial = ("Should the password contain special characters?")
  if (!passwordNumbers && !passwordUppercase && !passwordLowercase && !passwordSpecial){
    return alert("No character type selected")
  }
var numbers = "1234567890"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var specialCharacters = "~@#$%^&*()-_=+/?:><|}{]["
var chosenCharacters = ""
var password = ""
if (passwordNumbers){
  chosenCharacters = chosenCharacters + numbers
}
if (passwordUppercase){
  chosenCharacters = chosenCharacters + uppercaseLetters
}
if (passwordLowercase){
  chosenCharacters = chosenCharacters + lowercaseLetters
}
if (passwordSpecial){
  chosenCharacters = chosenCharacters + specialCharacters
}
for (var i = 0; i < passwordLength; i ++){
var characterIndex = Math.floor(Math.random() * chosenCharacters.length)
var character = chosenCharacters[characterIndex]
password = password + character
}
return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
