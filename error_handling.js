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
