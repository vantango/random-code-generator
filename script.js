// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//TODO: Create a generatePassword function and write all the logic within this function
function generatePassword() {

  //TODO: Create confirm to ask user if they want capital letters and set to a variable

  //TODO: Create confirm to ask user if they want lowercase letters and set to a variable

  //TODO: Create confirm to ask user if they want numbers and set to a variable

  //TODO: Create confirm to ask user if they want special characters and set to a variable

  //TODO: Create prompt to ask user how many characters they would like their password to be (length of at least 8 characters and no more than 128 characters) and set to a variable

  //TODO: Create a conditional to make sure that the user has chosen at least one type of character

  // Create an array of CAP letters, lower letters, nums, and special chars
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"]

  //TODO: Create an empty array to hold user request chars

  //TODO: Create multiple if statements that checks if the user said yes or no to different confirms that we asked them, and based on their response, push those specific chars to our empty array

  //TODO: Create a var to hold the final results

  var finalPass;

  //TODO: I need a for loop to loop over my final array, it should run based on the results of the prompt when we asked user how many chars they liked their password to be, choose randomly from our final array that holds all the chars that the user wanted, and save them to our finalPass var

  // var randomNum = Math.floor(Math.random() * length of final array)
  // inside the for loop (finalPass = finalPass + finalArray[randomNum])

  //TODO: Return the finalPass from this function outside of the for loop at the end on this function

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


}