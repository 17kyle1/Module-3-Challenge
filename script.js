// Assignment code here
// Created empty passwordLength variable as a placeholder

var passwordLength = ""

// Created different character types in string variables
  
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var symbol = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";

  //overallArr used to contain other arrays when concatanated later 
 
var overallArr = [];
 
// split method used to convert strings into arrays
  
  var arrayUpperCase =upperCase.split('');
  var arrayLowerCase =lowerCase.split('');
  var arrayNumber =number.split('');
  var arraySymbol =symbol.split('');


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // passwordCreated variable holds the generatePassword function invocation
  var passwordCreated = generatePassword();

  // if generatePassword holds a true value(boolean)

  if(passwordCreated){

  var password = createArrays();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  } 
  // if generatePassword holds a false value(boolean)
  else{
    window.alert("Please select at least one character type")
    console.log("it worked")
  }
}

// function to randomize characters within overallArr with length matching passwordLength
function createArrays(){
  var password ="";
  for( var i = 0; i < passwordLength; i++){
var index = Math.floor(Math.random() * overallArr.length);
 var password = password + overallArr[index];
 }
 return password;
}
// function to generate password based on parameters such as the length of the password and the character types
function generatePassword(){
passwordLength = window.prompt("Select length of characters: No less than 8, no more than 128")
  if (passwordLength >= 8 && passwordLength <= 128){
    if(window.confirm("would you like lowercase letters?")){
      overallArr = overallArr.concat(arrayLowerCase);
    }
    if(window.confirm("would you like uppercase letters?")){
      overallArr = overallArr.concat(arrayUpperCase);
    }
    if(window.confirm("would you like numbers?")){
      overallArr = overallArr.concat(arrayNumber);
    }
    if(window.confirm("would you like symbols?")){
      overallArr = overallArr.concat(arraySymbol);
    }
    // If confirmed for any prompts, true is returned and is passed into function writePassword
    return true;
  
}
else {
  window.alert("Please select a valid number")
  generatePassword()
}
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

