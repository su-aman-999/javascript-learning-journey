const coding = ["js", "ruby", "java", "python", "cpp"];

//for each

//1st way
coding.forEach(function (value, index, arr) {
  console.log(value);
});

//2nd Way
coding.forEach((value, index, array) => {
  console.log(`${array} => ${index} => ${value}`);
});

//3rd Way
coding.forEach(printMe);
function printMe(value) {
  console.log(value);
}

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Python",
    languageFileName: "js",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
];

myCoding.forEach((obj, index, arr) => {
  console.log(`${obj.languageName} |=| ${obj.languageFileName}`);
});
/*
👋output:-
JavaScript |=| js
Python |=| js
C++ |=| cpp
*/
