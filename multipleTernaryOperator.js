var Person = {
  name: {
    first: "Supun",
    last: "",
  },
};

function multipleTernaryOperator() {
  /* 
    * we can use multiple ternary operators to check nested params 
    * if param not available 
        * simply undefined will return
        * not going to throw exception
   */
  console.log(
    "multipleTernaryOperator :: variable available ",
    Person?.name?.last === "" ? undefined : Person?.name?.last
  );
}

multipleTernaryOperator();
