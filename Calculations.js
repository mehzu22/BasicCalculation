//Problem statement
//addition ,subtraction,multiply,divide
//ceil,floor(round up / round down)
//ceil(2.5--->2)(round down)
//floor(2.5--->3)(round up)
//default mai error return list wala[a+b,'msg']
//factory function return full function of what parameter
//factorial, sum of n ,subtract of n,multiply of n,division of n

const addition = (...numbers) => {

    let sum = 0;

    for (let i = 0; i < numbers.length; ++i)
        sum += numbers[i];

    return [sum, 'Success'];


}

console.log(addition(4, 2, 7.8, 9.0));
console.log(addition('8', '8'));

const subtract = (...numbers) => {
    if (isNaN(numbers) == false) {
        return [0, 'Failed']
    }
    let result = numbers[0];

    for (let index = 1; index < numbers.length; index++) {
        result -= Math.abs(numbers[index]);
    }
    return [result, 'Success']

}
console.log(subtract(6, 7, 9));
console.log(subtract(6.8, 9.2, 3.5));
console.log(subtract('hj','hu'));

const multiply = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            return [0, 'Failed'];
        }
    }
    
    let result = numbers[0];

    for (let index = 1; index < numbers.length; index++) {
        result *= numbers[index];
    }
    
    return [result, 'Success'];
}

console.log(multiply(2, 3, 5));
console.log(multiply(4, 'hello', 2));
console.log(multiply(1, 2, 3, 4, 5));

const divide = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            return [0, 'Failed'];
        }
    }
    
    let result = numbers[0];

    for (let index = 1; index < numbers.length; index++) {
        result /= numbers[index];
    }
    
    return [result, 'Success'];
}

console.log("Division : ",divide(2,5));

const factoryFunction = (functionName)=>{
    switch(functionName){
        case 'addition' :
            return addition;
            
        case 'subtract' :
            return subtract;
            
        case 'multiply' :
            return multiply;
            
        case 'divide' :
            return divide;
            
        default:
            "Wrong Function Name"
            break;
    }
}

console.log("Addition defination :",factoryFunction('addition'));
// console.log("Subtract defination :",factoryFunction('subtract'));
// console.log("Multiply defination :",factoryFunction('multiply'));
// console.log("Divide defination :",factoryFunction('divide'));

const ceilFunction =(...numbers)=>{
    result = Math.ceil(numbers)
    return result;
}

console.log("ceil : ",ceilFunction(9.5));

const floorFunction =(...numbers)=>{
    result=Math.floor(numbers)
    return result;
}
console.log("floor : ",floorFunction(9.5));