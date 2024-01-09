// ASSIGNMENT CODE:

function generatePassword() {

  // Define character sets for each type of character
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

  // Prompt for password length
  let passwordLength = prompt('Choose a password length between 8 and 128 characters:');
  
  // Validate password length
  while (
    isNaN(passwordLength) || 
    passwordLength < 8 || 
    passwordLength > 128
    ) {
    passwordLength = prompt('Please enter a valid password length between 8 and 128 characters:');
  }

  // Confirm character types to include
  function confirmChar() {
    includeLowercase = confirm('Include lowercase characters?');
    includeUppercase = confirm('Include uppercase characters?');
    includeNumeric = confirm('Include numeric characters?');
    includeSpecial = confirm('Include special characters?');
  };
  confirmChar();

  // Validate that at least one character type is selected
  while (!
    (includeLowercase || 
    includeUppercase || 
    includeNumeric || 
    includeSpecial)
    ) {
    alert('At least one character type must be selected.');
    confirmChar();
  }

  // Combine selected character sets
  let acceptedChars = '';
  if (includeLowercase) acceptedChars += lowercaseChars;
  if (includeUppercase) acceptedChars += uppercaseChars;
  if (includeNumeric) acceptedChars += numericChars;
  if (includeSpecial) acceptedChars += specialChars;

  // Generate password
  let newPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * acceptedChars.length);
    newPassword += acceptedChars.charAt(randomIndex);
  }

  // Display the generated password within the placeholder
  const displayPassword = document.getElementById("password");
  displayPassword.innerHTML = 'Your generated password is:\n' + newPassword;

  //Display the password in an alert
  alert('Your generated password is:\n' + newPassword);

}


// STARTER CODE: I commented some out to prevent errors in the console; can revise if needed!

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
