var answer = 0;
// var n = answer;
// Function Definitions

// 1. Write a function called add that takes two arguments and adds them together, returning the result
function add(a,b){
   return a + b
}

// 2. Write a function called subtract that takes two arguments and subtracts them from each other, returning the result
function subtract(a,b){
    return a - b
}
// 3. Write a function called multiply that takes two arguments and multiplies them other, returning the result
function multiply(a,b){
    return a * b
}
// 4. Write a function called divide that takes two arguments and divides them from each other, returning the result
function divide(a,b){
    return a / b
}
 
// Add an increment button with an id of "increment" and a function named increment that adds 1 to the current answer. 
function increment(){
   return answer + 1
}

// Add an decrement button with an id of "decrement" and a function named decrement that subtracts 1 from the the current answer.
function decrement(){
   return answer - 1
}

// Allow the answers to build on one another.
function build(){
    return answer += answer
}

// Event Handlers
document.querySelector('#calc').addEventListener('click', function(e) {
    var calcFunction = e.target.id,
        number1 = Number(document.querySelector('#number1').value),
        number2 = Number(document.querySelector('#number2').value);

    answer = window[calcFunction](number1, number2);

    document.querySelector('#answer').innerHTML = answer;
});
