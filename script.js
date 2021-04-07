// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {  
  var passwordLength = lengthPrompt();
  
  var passwordTypes = typesPrompt();
  
  validateTypes(passwordTypes);
  
  var password = generatePassword(passwordLength, passwordTypes);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(length, types){
  return  "abieu*&%";
}

function validateTypes(passwordTypes){
  var options = ["lowercase", "uppercase", "numeric", "special characters"]; 
  confirm(options);
}

function lengthPrompt(){
  var result = window.prompt("Select password length of at least 8 characters and no more than 128 characters");
  var passwordLength = parseInt(result);
  if (passwordLength < 8) {
    alert("Error: Password length has a mimimum of 8 characters.")
    return lengthPrompt();
    

  } else if (passwordLength > 128) {
    alert("Error: Password length has a maximum of 128 characters.")
    return lengthPrompt();
    

  } else if (isNaN(passwordLength)) {
    alert("Error: Password length needs to be a number.")
    return lengthPrompt();
    

  } else {
    return passwordLength;
  }
}

function typesPrompt(){
  return window.prompt("Select password type: lowercase, uppercase, numeric, and/or special characters");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





