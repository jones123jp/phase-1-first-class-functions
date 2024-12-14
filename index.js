function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function.");
    }
    return namedFunction;
}


function returnsAnAnonymousFunction() {
    return function () {
      return 'I am anonymous!';
    };
  }
  
  