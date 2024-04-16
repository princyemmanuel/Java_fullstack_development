function Operation(operator, value1, value2) {
  switch (operator) {
    case "+":
      result = value1 + value2;
    // break;
    //if 1st break removed result = -10 ie will execute next case -
    case "-":
      result = value1 - value2;
    // break;
    //if 1st and 2nd break removed result = 3000 ie will execute next case *
    case "*":
      result = value1 * value2;
    // break;
    //if all breaks removed result = 0.833 ie "Invalid result"
    case "/":
      result = value1 / value2;
    // break;
    default:
      console.log("Invalid Result");
  }
  console.log(result);
}
Operation("+", 50, 60);
