function solve(one, two, three){
    let summOfTwo = (one, two) => one + two ;
    let result = (summOfTwo , three) => summOfTwo - three;


    let final = result(summOfTwo(one,two), three)
    return final
}


console.log(solve(1,

    17,
    
    30))