function asyncFunctionPromiseReturn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("inside time out");
      resolve("resolved");
    }, 500);
  });
}

async function asyncFunctionTimeout() {
  var promise1 = await new Promise((res) => {
    setTimeout(() => res(true), 500);
  });

  var promise2 =
    promise1 &&
    (await new Promise((res) => {
      setTimeout(() => res("success"), 1000);
    }));

  var promise3 =
    promise2 &&
    (await new Promise((res) => {
      setTimeout(() => res("success"), 1500);
    }));

  return promise3;
}

async function asyncFunctionInCondition() {
  /* 
    first condition will going to wait for the value returned from async function
   */
  if ((value = await asyncFunctionPromiseReturn())) {
    console.log("waiting for asyncFunctionPromiseReturn response:", value);
  } else {
    console.log("not waiting for asyncFunctionPromiseReturn response");
  }

  /* 
    second condition will going to wait for the value returned from async function
   */
  if ((value = await asyncFunctionTimeout())) {
    console.log("waiting for asyncFunctionTimeout response:", value);
  } else {
    console.log("not waiting for asyncFunctionTimeout response");
  }
}

asyncFunctionInCondition();
