function receivesAFunction(callback) {
    //call the callback function 
    callback();
}




function returnsANamedFunction() {
    //Define and return a named function
    function NamedFunction() {
        console.log("I am a named Function");
    }
    return namedFunction;
}


function returnsAnAnonymousFunction() {
    //DEfine and return an anonymuos function
    function Anonymuous() {
        console.log("I am an anonymuos Function")
    }
    return anonymuousFunction;

}