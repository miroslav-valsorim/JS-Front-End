function reverse(n, inputArray){
    let array = []
    
    for (let i=0; i<=n-1 ; i++){
        array.push(inputArray[i])
    }

    let reversed = array.reverse()

    console.log(reversed.join(" "))

}

// reverse(3, [10, 20, 30, 40, 50])

// reverse(4, [-1, 20, 99, 5])

reverse(2, [66, 43, 75, 89, 47])