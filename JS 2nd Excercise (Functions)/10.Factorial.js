function divideFactorial(first,second){
    return (factorial(first) / factorial(second)).toFixed(2)

    function factorial(n){
        if (n===1){
            return n
        }

        return n * factorial(n-1)
    }
}

console.log(divideFactorial(5,2))


// function factorial(n){
//     if (n===1){
//         return n
//     }
//     console.log(n)
//     return n * factorial(n-1)
// }

// console.log(factorial(5))