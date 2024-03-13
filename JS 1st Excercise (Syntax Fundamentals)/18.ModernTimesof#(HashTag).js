function specialWords(text){

    let textSplit = text.split(' ')

    for (let i=0 ; i <= textSplit.length; i++){

        if (String(textSplit[i]).startsWith('#') && textSplit[i].length > 1){
            let match = String(textSplit[i])
            console.log(match.substring(1))
        
         }
    }

}

specialWords('Nowadays everyone uses # to tag a #special word in #socialMedia')