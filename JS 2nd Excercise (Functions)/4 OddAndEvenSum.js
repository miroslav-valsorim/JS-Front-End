function solve(numberString){

    let strFromNum = String(numberString)
    let arrayFromNum = strFromNum.split('')
    let odd = 0
    let even = 0

    for (let num of arrayFromNum){
        // console.log(num)
        if (num % 2 == 0){
            even += Number(num)
        }else{
            odd += Number(num)
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}



solve(1000435)