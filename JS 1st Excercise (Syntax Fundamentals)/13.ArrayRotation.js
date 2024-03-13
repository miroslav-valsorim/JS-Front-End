function solve(listOfNumbers, rotations){

    let counter = 0

    for (let i=0; i<=rotations; i++){
        if (counter === rotations){
            break
        }else{
            counter += 1
            let getFirstItem = listOfNumbers.shift()
            listOfNumbers.push(getFirstItem)
        }
    }

    console.log(listOfNumbers.join(" "))
}

solve([2, 4, 15, 31],5)