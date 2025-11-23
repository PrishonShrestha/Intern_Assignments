const upper_case_field = document.getElementById("upper-case");
const lower_case_field = document.getElementById("lower-case");
const number_field = document.getElementById("number");
const special_character_field = document.getElementById("special-character");

const generate_password_button = document.getElementById(
  "generate-password-button"
);
const copy_password_button = document.getElementById("copy-password-button");
const password_length = document.getElementById("password-length");
const password_length_display = document.getElementById(
  "password-length-display"
);

const password_display = document.getElementById("password-display");
const check_box = document.getElementsByClassName("check-box");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*";

let included_text = [];
let unshuffled_password = [];
let final_password = "";

const includedText = () => {
  if (upper_case_field.checked) included_text.push(uppercase);
  if (lower_case_field.checked) included_text.push(lowercase);
  if (number_field.checked) included_text.push(numbers);
  if (special_character_field.checked) included_text.push(specialCharacters);
  console.log(included_text.length);
};

//Generate password
const generatePassword = () => {
  if (included_text.length < 2) {
    alert("Please select at least 2 type");
    return;
  }
  while (unshuffled_password.length < Number(password_length.value)) {
    for (let i = 0; i < included_text.length; i++) {
      const currentText = included_text[i];
      const randomChar =
        currentText[Math.floor(Math.random() * currentText.length)];
      unshuffled_password.push(randomChar);

      if (unshuffled_password.length >= password_length.value) break;
    }
  }
  console.log("Generated PW: " + unshuffled_password);
  //Shuffle array and convert to string
  for (let i = unshuffled_password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [unshuffled_password[i], unshuffled_password[j]] = [
      unshuffled_password[j],
      unshuffled_password[i],
    ];
  }
  final_password = unshuffled_password.join("");
  console.log("Final password " + final_password);

  //Clear array and checkbox
  clearField();

  return final_password;
};

//Display password
const displayPassword = () => {
  console.log("From display " + final_password);
  password_display.innerText = final_password;
};

// Clear fields
const clearField = () => {
  included_text = [];
  unshuffled_password = [];
  // for (let i = 0; i < check_box.length; i++) {
  //   check_box[i].checked = false;
  // }
};

// Copy password to clipboard
const copyPassword = () => {
  if (final_password === "" || final_password === null) {
    alert("Nothing to copy");
    return;
  }
  navigator.clipboard.writeText(final_password);
};

// Generate new random password
generate_password_button.addEventListener("click", () => {
  includedText();
  console.log(password_length.value);
  console.log(included_text);
  console.log(unshuffled_password);
  generatePassword();
  displayPassword();
});

// Display password length in span field
password_length.addEventListener("input", () => {
  password_length_display.textContent = password_length.value;
});

// Copy password on button click
copy_password_button.addEventListener("click", () => {
  copyPassword();
});
