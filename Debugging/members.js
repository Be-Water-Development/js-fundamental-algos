// Caroline manages the member directory of her club and decided
// to implement a program she can
// use for doing that. Since the club is not very big, it's
// sufficient for her to keep
// the members' names and phone numbers in an object.
// Later she wants to add functionality
// that allows her to write this object to a file.

// One requirement Caroline takes very seriously is input validation.
// She intended for her code to strictly require that only alphabetic
// letters be included in the members'
// first and last names, separated by a space. But upon making a
// typo when entering the information of
// the newest member, she realizes that isn't the case.

// Figure out why not and fix the code so that it works as expected.
// You may also consider writing a
// few more test cases to insure that the input validation
// requirement is properly met.

const memberDirectory = {
  "Jane Doe": "323-8293",
  "Margaret Asbury": "989-1111",
  "Callum Beech": "533-9090",
  "Juanita Eastman": "424-1919",
};

function isValidName(name) {
  // BUG:
  // the regex here was not eliminating numeric characters because \w includes
  // a-zA-Z, 0-9 and _. Changing the regex to the below invalidates the provided
  // test case and the additional ones. ^ indicates that the beginning of the word
  // must start with one of the characters in the character set, and it must match
  // one or more times. Then the next word must match the end of the input,
  // also looking for any alphabetic character 1 or more times. The whitespace
  // after the first + sign is taken as literal whitespace.
  return /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  // Old expression
  // return /^\w+ \w+$/.test(name);
}

function isValidPhone(phone) {
  return /^\d{3}-\d{4}$/.test(phone); // Hint:  Take a look at 'javascript regex'
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log("Invalid member information.");
  }
}

addMember("Laura Carlisle", "444-2223");
addMember("Rachel Garcia", "232-1191");
addMember("Earl 5mith", "331-9191"); // Invalid member information
addMember("3arl Smitty", "302-3346"); // Invalid member information
addMember("DickRichards", "457-8906"); // Invalid member information
addMember("Borat Excite Sagdyev", "456-9086"); // Invalid member information
addMember("Rudy Giuliani", "987-h3ll"); // Invalid member information
addMember("My Dad", "3045-4596"); // Invalid member information

console.log(memberDirectory);

// dope
