function getWalletId() {
  console.log("calling getWalletId");

  return "1234";
}

function checkAssignmentInsideCondition() {
  //whatever value returned from function will assigned to variable and passing it to the condition
  if ((walletId = getWalletId())) {
    console.log("wallet id available and that is", walletId);
  } else {
    console.log("wallet id not available");
  }
}

// checkAssignmentInsideCondition();

const image = {
  url: '',
}

function isundefinedequalstoemptystring(){
console.log('isundefinedequalstoemptystring ', image.name && image.name !== '')
// console.log('isundefinedequalstoemptystring ', image?.name !== '') // dont use this, this will give true coz undefined !== ''

}

isundefinedequalstoemptystring();
