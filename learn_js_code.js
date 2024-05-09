let myYoutubename = "hiteshdotcom";
let anothername = myYoutubename;
console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

let userThree = userTwo;
userThree.email = "nabin@gmail.com";

console.log(userOne.email);
console.gitlog(userTwo.email);
console.log(userThree.email);

const gameName = new String("hiteshhc");
for (let i = 0; i < gameName.length; i++) {
  console.log(gameName[i]);
}

// String Methods
//************* *//
// length
// endswith;
// constructor;
// concatenate;
// charat(2);
// indexOf('t')
// substring(0,4)
// trim

// replace

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    hitest   ";
console.log(newStringOne);
console.log(newStringOne.trim());
