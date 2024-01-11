// ASSIGNMENT CODE:

function generatePassword() {

  // Define character sets for each type of character
  const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericCharacters = '0123456789';
  const specialCharacters = '!@#$%^&*()-=_+[]{}|;:,.<>?';

  // Prompt user for preferred password length
  let passwordLength = prompt('Choose a password length between 8 and 128 characters.');
  
  // Validate that user entered a number in between 8 and 128 for password length
  while (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(passwordLength)
    ) {
    passwordLength = prompt('Choose a password length between 8 and 128 characters. Only numbers between 8 and 128  may be entered.');
  }

  // User confirms which character types to include in their password
  function confirmChar() {
    includeLowercase = confirm('Include lowercase characters?');
    includeUppercase = confirm('Include uppercase characters?');
    includeNumeric = confirm('Include numeric characters?');
    includeSpecial = confirm('Include special characters?');
  };
  confirmChar();

  // Validate that user selected at least one character type
  while (!
    (includeLowercase || 
    includeUppercase || 
    includeNumeric || 
    includeSpecial)
    ) {
    alert('At least one character type must be selected.');
    confirmChar();
  }

  // Combine user-selected character sets
  let acceptedCharacters = '';
  if (includeLowercase) acceptedCharacters += lowercaseCharacters;
  if (includeUppercase) acceptedCharacters += uppercaseCharacters;
  if (includeNumeric) acceptedCharacters += numericCharacters;
  if (includeSpecial) acceptedCharacters += specialCharacters;

  // Generate password by calling Math functions and string properties
  let newPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * acceptedCharacters.length);
    newPassword += acceptedCharacters.charAt(randomIndex);
  }

  // Display the generated password within the text area placeholder so user is able to copy
  const displayPassword = document.getElementById("password");
  displayPassword.innerHTML = 'Your generated password is:\n' + newPassword;

  //Display the password in an alert
  alert('Your generated password is:\n' + newPassword);

}


// STARTER CODE:

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
