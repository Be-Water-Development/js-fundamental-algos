// Caroline manages the member directory of her club and decided to implement a program she can
// use for doing that. Since the club is not very big, it's sufficient for her to keep
// the members' names and phone numbers in an object. Later she wants to add functionality
// that allows her to write this object to a file.

// One requirement Caroline takes very seriously is input validation.
// She intended for her code to strictly require that only alphabetic letters be included in the members'
// first and last names, separated by a space. But upon making a typo when entering the information of
// the newest member, she realizes that isn't the case.

// Figure out why not and fix the code so that it works as expected. You may also consider writing a
// few more test cases to insure that the input validation requirement is properly met.

const memberDirectory = {
  "Jane Doe": "323-8293",
  "Margaret Asbury": "989-1111",
  "Callum Beech": "533-9090",
  "Juanita Eastman": "424-1919",
};

function isValidName(name) {
  //changed from \w to \D
  return /^\D+ \D+$/.test(name);
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
addMember("Earl 5mith", "331-9191"); // Invalid member information.
addMember("Earl Smith", "3t1-9191"); // Invalid member information.
addMember("Earl Smith", "Unicorns"); // Invalid member information.
addMember("331-9191", "Earl Smith"); // Invalid member information.

console.log(memberDirectory);

//The \w metacharacter is used to find a word character, a-z, A-Z, 0-9. So numeric values pass this regex expression. Changed \w to \D which matches any character that
//is not a digit, thus eliminating the invalid entry of "5mith".

// Nice
