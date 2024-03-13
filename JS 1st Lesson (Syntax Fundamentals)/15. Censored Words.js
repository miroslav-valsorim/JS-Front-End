function solve(sentence, word){

   
    let result = sentence.replace(word, repeat(word))
    while (result.includes(word)){
        result = result.replace(word, repeat(word))
    }

    function repeat(word){
        let counter = ""
        for (let i=0; i<word.length ; i++){
            counter += "*"
        }
        return counter
    }

    console.log(result)
}

solve('A small sentence with some words','small')