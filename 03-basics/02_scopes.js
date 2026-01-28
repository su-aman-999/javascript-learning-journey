//{} -> Scope
//>-:::Global Scope:::->

var varNum = 300;
letNum = 400;

if (true) {
  //4 way to create variables
  //:::Block Scope:::

  let letNum = 10;
  const constNum = 20;
  var varNum = 30;
  Num = 40;

  console.log("INNER: ", letNum); //=> INNER: 10
}

//console.log(letNum); => ERROR
//console.log(constNum); => ERROR
//console.log(varNum); => 30
//console.log(Num); => 40

/*
:::Browser global scope and Node global scope both are different::: 
*/

/* >-::: Nested Scope:::-> */

function oneFun() {
  const userName = "Aman";
  function twoFun() {
    const websiteName = "YouTube";
    console.log(`User Name: ${userName}`);
  }
  // console.log(`Website Name: ${websiteName}`); => websiteName is not defined
  twoFun();
}
oneFun();

if (true) {
  const userName = "Hridyam";
  if (userName === "Hridyam") {
    const webSite = "YouTube";
    console.log(userName + webSite);
  }
  //console.log(webSite); =>webSite is not defined
}
//console.log(userName); =>userName is not defined

//>>====== INTERESTING =====>>
addOne(2);  //=> We can call of addOne() after declaration
function addOne(num) {
  return num + 1;
}

addTwo(3); //=> We can not call addTwo() after declaration
const addTwo = function (num) {
  return num + 2;
};
