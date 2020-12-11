// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Create a generatePassword function and write all the logic within this function
function generatePassword() {

  // Confirm to ask user if they want capital letters
  var includeCapital = confirm("Do you want to use capital letters?");

  // Confirm to ask user if they want lowercase letters
  var includeLower = confirm("Do you want to use lowercase letters?");

  // Confirm to ask user if they want numbers
  var includeNum = confirm("Do you want to use numbers?");

  // Confirm to ask user if they want special characters
  var includeSpecial = confirm("Do you want to use special characters?")

  // Make sure that the user has chosen at least one type of character
  if (includeCapital === false && includeLower === false && includeNum === false && includeSpecial === false) {
    alert("You must choose at least one character type!")
    return ""
  }
  else {

    // Prompt to ask user how many characters they would like their password to be
    var passLength = prompt("How many characters would you like your password to be?")

    // Make sure that the user has chosen a password length between 8 and 128 characters
    if (passLength < 8 || passLength > 128) {
      alert("Your password must be between 8 and 128 characters!")
      return ""
    }
    else {

      // Arrays of CAP letters, lower letters, nums, and special chars
      var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"]

      // Empty array to hold user request characters
      var empty = []

      // Variable to hold the final results
      var finalPass = "";

      // A for loop to loop over my final array. It should run based on the results of the prompt when we asked user how many chars they liked their password to be, choose randomly from our final array that holds all the chars that the user wanted, and save them to our finalPass var
      for (var i = 0; i < passLength; i++) {

        // Multiple if statements that checks if the user said yes or no to different confirms that we asked them, and based on their response, push those specific chars to our empty array
        if (includeCapital) {
          // Generating random index based on the array
          var index = Math.floor(Math.random() * upperCase.length)
          // Generating random element based on the index
          var randomElement = upperCase[index]
          // Pushing random element to empty array
          empty.push(randomElement)
        }

        if (includeLower) {
          // Generating random index based on the array
          var index = Math.floor(Math.random() * lowerCase.length)
          // Generating random element based on the index
          var randomElement = lowerCase[index]
          // Pushing random element to empty array
          empty.push(randomElement)
        }

        if (includeNum) {
          // Generating random index based on the array
          var index = Math.floor(Math.random() * numbers.length)
          // Generating random element based on the index
          var randomElement = numbers[index]
          // Pushing random element to empty array
          empty.push(randomElement)
        }

        if (includeSpecial) {
          // Generating random index based on the array
          var index = Math.floor(Math.random() * specialChar.length)
          // Generating random element based on the index
          var randomElement = specialChar[index]
          // Pushing random element to empty array
          empty.push(randomElement)
        }
        // Combines the resulting character types and password length choices into a randomly generated password
        finalPass = finalPass + empty.join("")
        finalPass = finalPass.substring(0, passLength)

      }
      console.log(finalPass)

      // Returns the randomly generated password to the user
      return finalPass
    }
  }
}
// Event listener to generate button
generateBtn.addEventListener("click", writePassword);


