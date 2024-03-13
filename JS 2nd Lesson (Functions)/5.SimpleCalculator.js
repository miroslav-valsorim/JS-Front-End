function calculator(numOne, numTwo, operator){
    let operations = {
        multiply : (a,b) => a * b,
        divide : (a,b) => a / b,
        add : (a,b) => a + b,
        substact : (a,b) => a - b
    }

    return operations[operator](numOne, numTwo)
}

console.log(calculator(40,

    8,
    
    'divide'))