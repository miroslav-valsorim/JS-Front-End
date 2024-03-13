function solve(arr){
    let summOdd = 0
    let summEven = 0

    for (let i=0; i<=arr.length - 1 ; i++){

        if (arr[i] % 2 === 0){
            summEven += arr[i]
        }else{
            summOdd += arr[i]
        }
    }

    console.log(summEven - summOdd)
    
}


// solve([1,2,3,4,5,6])

solve([3,5,7,9])