// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let charOptions = []; // it is accessable at more sections
// const passowrdChars = [];
// let generatedPassword = "";
let characterLength = 0;


// you can store the password as a string and concat each character or
// as an array and push each character then join once you have enough



// Function to prompt user for password options
function getPasswordOptions() {
  charOptions = [];
  //prompt for password length
  // at least 8 characters no more than 128
  // conditional to check that the number that was entered is in range
  // prompts store data as strings so need to parse into a number
  // if the users input is out of range either return out of the function or call the function again

  // confirm which character sets to use
  // if the user answers false for all, either return out of the function or call function again

  //once they sleect a character set:

  // generate a random character for each selected character set
  // either push selected characters to a mega-array of all selected characters
  // or you can keep the array seperate   and generate a random number to select the array and another to select the index
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)")); //Nan

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;

  }

  if (confirm("Would you like lowercase letters in your password?")) {
    charOptions = charOptions.concat(lowerCasedCharacters);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    charOptions = charOptions.concat(upperCasedCharacters);
  }
  if (confirm("Would you like special characters in your password?")) {
    charOptions = charOptions.concat(specialCharacters);
  }
  if (confirm("Would you like numbers in your password?")) {
    charOptions = charOptions.concat(numericCharacters);
  }
  return true;

  // once character sets are sleected move on to generating random characters
}

// Function for getting a random element from an array
function getRandom(arr) {
  // need a variable to hold the password as its being generated
  // need a variable to hold the index that is being generated
  let password = "";
  for (let i = 0; i < characterLength; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    password += arr[randomIndex];
  }
  return password;

  
  // for loop that loops selectedLenght number of times as many times as the user chose 
  // generate random number
  // that number is going to be the index for a character in the mega-array
  // so then mega-array[generated-index] is the actual character 
  // add that character to the password 

  //once we finished the for loop return the generated password 
}

// Function to generate password with user input
function generatePassword() {
  // generate a password when the button is clicked
  //present a series of prompts for password criteria
  // length of password 
  // at least 8 characters but no more than 128
  // character types
  // lowercase
  // uppercase
  // numeric
  // special characters 
  // code should validate for each input and at least one character type should be selected
  // once prompts are answered then the password should be generated and displayed in an alert or written to the page
if (getPasswordOptions()) {
  return getRandom(charOptions);
}
return "";
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword(); //leave it here to connect true and false section hopefully
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);