function makeADictionary(data) {
    let filtered = {}
    
    for (let info of data) {
        info = JSON.parse(info)
        filtered[Object.keys(info)] = Object.values(info);
    }
    
    let filteredKeys = Object.keys(filtered).sort();


    for (let info of filteredKeys) {
        console.log(`Term: ${info} => Definition: ${filtered[info]}`)
    }
}

makeADictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}' ])
