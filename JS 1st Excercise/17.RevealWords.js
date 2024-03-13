function replaceWords(words,text){
    // console.log(words)
    // console.log(text)

    let textSplit = text.split(" ")
    let wordsArray = Array.from(words)

    for (let i=0 ; i <= textSplit.length; i++){
        if (String(textSplit[i]).startsWith('*')){
            let match = String(textSplit[i])
            console.log(match)
            
        }

    }

}




replaceWords('great, learning','softuni is ***** place for ******** new programming languages')

// replaceWords('great','softuni is ***** place for learning new programming languages')