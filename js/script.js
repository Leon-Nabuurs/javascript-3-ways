// three ways to define a function

// first way: function declaration
function rekenenDeclaration (firstParam, secondParam) {
    result = (firstParam * firstParam) + (secondParam*secondParam);
    return result * result;
}

console.log(rekenenDeclaration(2,3));


// second way: function expression
const rekenenExpresion = function (firstParam, secondParam) {
    result = (firstParam * firstParam) + (secondParam*secondParam);
    return result * result;
}

console.log(rekenenExpresion(2,3));


// third way: arrow functions
const rekenenArrow = (firstParam, secondParam) => {
    result = (firstParam * firstParam) + (secondParam*secondParam);
    return result * result;
}

console.log(rekenenArrow(2,3));