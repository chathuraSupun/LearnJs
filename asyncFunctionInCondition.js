async function asyncFunction() {
  var returnVal;
  setTimeout(() => {
    returnVal = "now excuting";
  }, 500);

  return returnVal;
}

async function asyncFunctionInCondition() {
  /* 
    below await not going to wait for response
    so it will jump to else
   */
  if ((value =  asyncFunction())) {
    console.log("waiting for response", value);
  } else {
    console.log("not waiting for response");
  }
}

asyncFunctionInCondition()
