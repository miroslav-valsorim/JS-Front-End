function replaceWords(words,text){

    let textSplit = text.split(' ')
    let wordsArray = words.split(', ')


    for (let i=0 ; i <= textSplit.length; i++){
        if (String(textSplit[i]).startsWith('*')){
            let match = String(textSplit[i])

            textSplit[i] = wordsArray[0]
            // textSplit[i].replace(match,String(wordsArray[0]))
            wordsArray.shift()
        }

    }

    console.log(textSplit.join(" "))

}




replaceWords('great, learning','softuni is ***** place for ******** new programming languages')

// replaceWords('great','softuni is ***** place for learning new programming languages')