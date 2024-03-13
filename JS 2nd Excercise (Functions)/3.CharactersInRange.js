function charsInRange(one, two){

    let asciiOne = one.charCodeAt(0);
    let asciiTwo = two.charCodeAt(0);

    // console.log(asciiOne);
    // console.log(asciiTwo);

    let first = Math.min(asciiOne,asciiTwo)
    let second = Math.max(asciiOne,asciiTwo) 

    let result = ' '
    for (let i=first + 1; i < second; i++ ){
        // console.log(String.fromCharCode(i))
        result += String.fromCharCode(i) + ' '
    }
    console.log(result)

}

charsInRange('#',

':')