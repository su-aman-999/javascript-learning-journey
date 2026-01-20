/* 
1. for
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}


*/

//1. For
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("5 is best number");
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("<---------->");
}

//break
for (let index = 1; index <= 20; index++) {
  if (index === 5) {
    console.log(`Detected ${index}`);
    break;
  }
  console.log(`Value of index is ${index}`);
}


//continue ->(jump on contion) ek baar maaf kar do
for (let index = 1; index <= 20; index++) {
  if (index === 5) {
    console.log(`Detected ${index}`);
    continue;
  }
  console.log(`Value of index is ${index}`);
}



