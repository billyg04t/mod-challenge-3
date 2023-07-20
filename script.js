// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password")
var charset1 = "abcdefghijklmnopqrstuvwxyz";
var charset2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charset3 = "0123456789";
var charset4 = "!@#$%^&*()=+";

// Generator Logic: sets alerts so user may choose which charsets to use.
function writePassword() {
  const sets = [];
  const useCharset1 = confirm("Do you want to use lowercase characters?");
  const useCharset2 = confirm("Do you want to use uppercase characters?");
  const useCharset3 = confirm("Do you want to use numbers?");
  const useCharset4 = confirm("Do you want to use special characters?");
  const passwordLength = prompt("How long do you want your password to be?");

  if (useCharset1) {
    sets.push(charset1);
  }
  if (useCharset2) {
    sets.push(charset2);
  }
  if (useCharset3) {
    sets.push(charset3);
  }
  if (useCharset4) {
    sets.push(charset4);
  }

  if (sets.length === 0) {
    alert("You must choose at least one character set.");
    return "";
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return "";
  }
// Calculates a random password based on prompt selection
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomSetIndex = Math.floor(Math.random() * sets.length);
    const randomSet = sets[randomSetIndex];
    password += randomSet.charAt(Math.floor(Math.random() * randomSet.length));
  }
  passwordText.value=password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
