function pianist(array){
    
    let n = array.shift()
    let pianistObj = {}

    for (let i = 0; i < n; i++){
        let [song, author, key] = array.shift().split('|')
        pianistObj[song] = { author, key}
    }

    for (item of array){
        let [ command, song, author, key] = item.split('|')
      
        if (command === 'Stop'){
            break
        }else if(command === 'Add'){
            addPiece(song, author, key)
        }else if(command === "ChangeKey"){
            changeKey(song, author)
        }else if(command === "Remove"){
            removePiece(song)
        }

    }

    function addPiece(song, author, key){
        if (pianistObj.hasOwnProperty(song)){
            console.log(`${song} is already in the collection!`)
        }else{
            pianistObj[song] = {author , key}
            console.log(`${song} by ${author} in ${key} added to the collection!`)
        }
    }

    function removePiece(song){
        if (pianistObj.hasOwnProperty(song)){
            delete pianistObj[song]
            console.log(`Successfully removed ${song}!`)
        }else{
            console.log(`Invalid operation! ${song} does not exist in the collection.`)
        }
    }

    function changeKey(song, newKey){
        if (pianistObj.hasOwnProperty(song)){
            pianistObj[song].key = newKey
            console.log(`Changed the key of ${song} to ${newKey}!`)            
        }else{
            console.log(`Invalid operation! ${song} does not exist in the collection.`)
        }
    }

    for (const piece in pianistObj) {
        const {key, author } = pianistObj[piece]
        console.log(`${piece} -> Composer: ${author}, Key: ${key}`)
      }
      

}

pianist(
    [ '3', 'Fur Elise|Beethoven|A Minor',
     'Moonlight Sonata|Beethoven|C# Minor', 
     'Clair de Lune|Debussy|C# Minor', 
     'Add|Sonata No.2|Chopin|B Minor', 
     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 
     'Add|Fur Elise|Beethoven|C# Minor', 
     'Remove|Clair de Lune', 
     'ChangeKey|Moonlight Sonata|C# Major', 
     'Stop']
)