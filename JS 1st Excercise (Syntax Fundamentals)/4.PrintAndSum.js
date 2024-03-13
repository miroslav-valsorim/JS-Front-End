function solve(num1,num2){

    let numbersSum = 0
    let s = ""

    for (let i=num1; i<=num2; i++){

        s += i + " "
        numbersSum += i

    }

    console.log(s)
    console.log(`Sum: ${numbersSum}`)
}

solve(5,10)