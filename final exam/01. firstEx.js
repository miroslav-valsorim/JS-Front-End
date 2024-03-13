function solve(array){
    let ourList = array.shift()

    let newList = []
    for (item of array){
        if (item.includes('TakeEven')){
            newList = []
            let randomList = ourList.split('')
            counter = 0
            for (item of randomList){
                counter++
                if (counter % 2){
                    newList.push(item)
                }
            }
            ourList = newList.join('')
            console.log(ourList)
        }else if(item.includes('Reverse')){
            let [command, string] = item.split('?')
            if (ourList.includes(string)){
                let newString = ourList.replace(string, '')
                let reversed = string.split('').reverse().join('')
                ourList = newString + reversed
                console.log(ourList)
            }else{
                console.log('error')
            }
        }else if(item.includes('ChangeAll')){
            let [command, first, second] = item.split('?')
            if (ourList.includes(first)){
                let newRandomList = ourList.split('')
                for (i=0; i< newRandomList.length; i++){
                    if (newRandomList[i] === first){
                        newRandomList[i] = second
                    }
                }
                ourList = newRandomList.join('')
            }
            console.log(ourList)
        }else if(item.includes('Buy')){
            console.log(`The cryptocurrency is: ${ourList}`)
        }
    }
}

solve(
    (["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"])
)

// solve(
//     (["PZDfA2PkAsakhnefZ7aZ", 
//     "TakeEven",
//     "TakeEven",
//     "TakeEven",
//     "ChangeAll?Z?X",
//     "ChangeAll?A?R",
//     "Reverse?PRX",
//     "Buy"])
// )