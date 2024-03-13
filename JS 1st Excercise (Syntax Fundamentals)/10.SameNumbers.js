function solve(numbers){
    
    let arrayFromNumbers = Array.from(String(numbers), Number)
    let sumOfNumbers = 0

    let equalOrNot = arrayFromNumbers => arrayFromNumbers.every(val => val === arrayFromNumbers[0])

    for (num of arrayFromNumbers){
        sumOfNumbers += num
    }

    console.log(equalOrNot(arrayFromNumbers))
    console.log(sumOfNumbers)

}

solve(2222222)