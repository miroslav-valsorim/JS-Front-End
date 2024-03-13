// function solve(num){
//     if (num == 1){
//         return 1
//     }else{
//         let result = num / 2
//         return solve(result)
//     }

// }


// console.log(solve(14))

// program to find the factorial of a number
function factorial(x) {
    
    if (x < 1){
        return "DONE"
    }else{
        console.log(x)
        return factorial(x / 2)
    }
}

console.log(factorial(15))