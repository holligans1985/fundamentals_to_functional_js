function possibleError(msg) {
  console.log(msg);
}

try {
  possibleError("Use the try block to wrap the code you think can throw an error");
} catch (error) {
  console.log("catch block is only executed if an exception occured, It catch the error");
} finally {
  console.log("Finally block is always executed, no matter if an error happened or not");
}

// Throw statement allow you to throw an custom exception
// +++++ EXAMPLE #1 ++++++++
function addNumbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) throw "We'll throw a custom error here";
  // If throw is executed the rest of the code inside this function will not be executed
}

try {
  addNumbers("NaN", 15);
} catch (error) {
  console.log("If a throw statement is executed the control is passed to the catch block ");
}

// EXAMPLE #2
// Using a constructor to handle different errors
function UserException(msg) {
  this.message = msg;
  this.name = "UserException";
}

function getMonthName(monthIndex) {
  const adjustedIndex = monthIndex - 1;
  ("adjust index to make January = 1 and december = 12");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (months[adjustedIndex] !== undefined) {
    return months[adjustedIndex];
  } else {
    throw new UserException("se jodio esto");
  }
}

try {
  const desiredMonth = 23;
  var desiredMonthName = getMonthName(desiredMonth);
} catch (error) {
  desiredMonthName = "unknown";
  console.error(error.message, error.name); // pass exception object to err handler
}
