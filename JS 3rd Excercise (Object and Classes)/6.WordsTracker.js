function tracker(listOfWords){

    let wordsLookFor = listOfWords.shift()
    let listOfWordsWeLookFor = wordsLookFor.split(" ")
    
    listOfObjects = []
    while (listOfWordsWeLookFor.length > 0){
        if (listOfWords.includes(listOfWordsWeLookFor[0])){
            count = 0
            for (word of listOfWords){
                if (word === listOfWordsWeLookFor[0]){
                    count += 1
                }
            }
            let obj = {topWord: listOfWordsWeLookFor[0], count}
            listOfObjects.push(obj)

            listOfWordsWeLookFor.shift()
        }else if (word === " "){
            listOfWordsWeLookFor.shift()
        }else{
            break
        }
    }
    listOfObjects.sort((function(a, b) { 
        return b.count - a.count;
    }))

    for (let chars of listOfObjects){
        console.log(`${chars.topWord} - ${chars.count}`)
    }
}


// function wordTracker (data) {
//     let result = new Map();

//     let words = data.shift().split(' ');
//     for (let word of words) {
//         result.set(word, 0);
//     }
//     for (let word of data) {
//         if(result.has(word)) {
//             let oldValue = result.get(word);
//             result.set(word, oldValue + 1);
//         }
//     }

//     let sortResult = Array.from(result).sort(([keyA, valueA], [keyB, valueB]) => {
//         return valueB - valueA
//     });

//     for(let [key, value] of sortResult) {
//         console.log(key, '-', value)
//     }

// }
tracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])