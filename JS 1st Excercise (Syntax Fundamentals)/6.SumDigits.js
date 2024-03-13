function solve(numbers){
    
    arrayFromNumbers = Array.from(String(numbers), Number)
    sumOfNumbers = 0

    for (num of arrayFromNumbers){
        sumOfNumbers += num
    }

    console.log(sumOfNumbers)

}

solve(543)