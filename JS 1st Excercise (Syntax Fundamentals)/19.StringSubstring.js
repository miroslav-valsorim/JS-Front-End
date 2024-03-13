function solve(word, text){
    let listOfWords = text.split(' ')

    for (let i=0; i < listOfWords.length; i++){
        let ourWord = String(listOfWords[i])
        if (ourWord.toLowerCase() == word.toLowerCase()){
            return console.log(ourWord.toLowerCase())
        }
    }

    console.log(`${word.toLowerCase()} not found!`)
}

solve(
    'javascript',

'JavaScript is the best programming language'
)

solve(
    'python',

'JavaScript is the best programming language'
)