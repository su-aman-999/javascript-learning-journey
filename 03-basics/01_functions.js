function sayMyName() {
  console.log("Aman Kumar");
}

// sayMyName -> function reference
// sayMyName() -> function call

sayMyName(); //=> Aman Kumar


//fun.1
function addNums1(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

addNums1(3, 4); //=> 7
addNums1(3, "4"); //=> 34
addNums1(3, "a"); //=> 3a


//fun.2
function addNums2(num1, num2) {
  return num1 + num2;
}

console.log(`Result: ${addNums2(3, 4)}`);


//fun.3
function logInMessage(userName = "aman") {
  if (!userName) {
    console.log("please enter username");
    return;
  }
  return `${userName} just loggedin`;
}
console.log(logInMessage("Hridyam")); //=> Hridya just loggedin

console.log(logInMessage()); //=> undefined just loggedin


//fun.4 rest operators (...)
function calculateCartPrice(num1, num2, ...nums) {
  return nums;
}
console.log(calculateCartPrice(100, 200, 300, 400, 500)); //=> [ 300, 400, 500 ]


//fun.5 handle object in functions
const user = {
  userName: "Aman",
  price: 199,
};

function handleObj(anyObj) {
  console.log(`Username is ${anyObj.userName} and Price is ${anyObj.price}`);
}

handleObj(user);
handleObj({
  userName: "Hidyam",
  price: 299,
});


//fun.6
const myArr = [1, 2, 3, 4, 5, 6];

function returnSecondValue(arr){
 return arr[1];
}

console.log(returnSecondValue(myArr)); //= 2
console.log(returnSecondValue(["1st", "2nd", "3rd", "4th", "5th"])); //=> 2nd

