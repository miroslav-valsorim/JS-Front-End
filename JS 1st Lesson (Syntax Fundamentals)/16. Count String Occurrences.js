function solve(text, word){
    let splittedText = text.split(" ")
    let counter = 0

    for (let i=0; i<text.length-1; i++){
        
        if (splittedText[i] === word){
            counter += 1
        }
    }
    console.log(counter)
}

solve('This is a word and it also is a sentence','is')