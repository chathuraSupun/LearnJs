// const values = [];
// const values = null;
const values = ['1','2','3'];

function arrayFuncs(){
   if(Array.isArray(values) && values.length > 0){
    console.log('arrayFuncs ', true);
   } else{
    console.log('arrayFuncs ', false);
   }
}

arrayFuncs();
