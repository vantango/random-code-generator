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

  // Create confirm to ask user if they want capital letters and set to a variable
  var includeCapital = confirm("Do you want to use capital letters?");

  // Create confirm to ask user if they want lowercase letters and set to a variable
  var includeLower = confirm("Do you want to use lowercase letters?");

  // Create confirm to ask user if they want numbers and set to a variable
  var includeNum = confirm("Do you want to use numbers?");

  // Create confirm to ask user if they want special characters and set to a variable
  var includeSpecial = confirm("Do you want to use special characters?")

  // Create prompt to ask user how many characters they would like their password to be (length of at least 8 characters and no more than 128 characters) and set to a variable
  var passLength = prompt("How many characters would you like your password to be? (min. 8 characters, max. 128 characters)")

  //TODO: Create a conditional to make sure that the user has chosen at least one type of character


  // Create an array of CAP letters, lower letters, nums, and special chars
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"]

  //TODO: Create an empty array to hold user request chars
  var empty = []

  //TODO: Create multiple if statements that checks if the user said yes or no to different confirms that we asked them, and based on their response, push those specific chars to our empty array


  console.log(empty)
  //TODO: Create a var to hold the final results
  var finalPass = "";
  var finalArray = []

  //TODO: I need a for loop to loop over my final array, it should run based on the results of the prompt when we asked user how many chars they liked their password to be, choose randomly from our final array that holds all the chars that the user wanted, and save them to our finalPass var
  for (var i = 0; i < passLength; i++) {
    if (includeCapital) {
      console.log("Array is ", upperCase, " length is ", upperCase.length);
      // Generating random index based on the array
      var index = Math.floor(Math.random() * upperCase.length)
      console.log(index)
      // generating random element based on the index
      var randomElement = upperCase[index]
      console.log(randomElement)
      // pushing random element to empty array
      empty.push(randomElement)
    }

    if (includeLower) {
      console.log("Array is ", lowerCase, " length is ", lowerCase.length);
      var index = Math.floor(Math.random() * lowerCase.length)
      console.log(index)
      var randomElement = lowerCase[index]
      console.log(randomElement)
      empty.push(randomElement)
    }

    if (includeNum) {
      console.log("Array is ", numbers, " length is ", numbers.length);
      var index = Math.floor(Math.random() * numbers.length)
      console.log(index)
      var randomElement = numbers[index]
      console.log(randomElement)
      empty.push(randomElement)
    }

    if (includeSpecial) {
      console.log("Array is ", specialChar, " length is ", specialChar.length);
      var index = Math.floor(Math.random() * specialChar.length)
      console.log(index)
      var randomElement = specialChar[index]
      console.log(randomElement)
      empty.push(randomElement)
    }
    // var randomNum = Math.floor(Math.random() * empty.length)
    // finalArray.push(empty[randomNum])
    //   (finalPass = finalPass + finalArray[randomNum])
    finalPass = finalPass + empty.join("")
    finalPass = finalPass.substring(0, passLength)

  }
  console.log(finalPass)
  // var randomNum = Math.floor(Math.random() * length of final array)
  // inside the for loop (finalPass = finalPass + finalArray[randomNum])
  //TODO: Return the finalPass from this function outside of the for loop at the end on this function
  return finalPass
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


