// function solve(names){

//     let sortedNames = names.sort()
    
//     for (let i = 0; i <= sortedNames.length - 1; i++){
//         console.log(`${1+i}.${sortedNames[i]}`)
//     }
// }

// solve(["John","Bob","Christina","Ema"])

function listOfNames(names){
    return [...names]
    .sort((aName, bName) => aName.localeCompare(bName))
    .map((name,index) => `${index + 1}.${name}`)
    .join('\n')
}

console.log(
    listOfNames(["John","Bob","Christina","Ema"])
)