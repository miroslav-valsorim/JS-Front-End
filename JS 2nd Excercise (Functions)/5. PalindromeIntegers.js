function solve(arrayOfNums){

    for (let num of arrayOfNums){
        // console.log(typeof(num))
        let strOfNum = String(num)
        let result = strOfNum.split("").reverse().join("").split(" ").reverse().join(" ")
        if (num === Number(result)){
            console.log(true)
        }else{
            console.log(false)
        }
        // console.log(strOfNum)
        // console.log(result)
    }

}

solve([123,323,421,121])