function addressBook(ourInput){

    obj={}

    for (let name of ourInput){
        let textSplitted = name.split(":")
        let person = textSplitted[0]
        let address = textSplitted[1]

        obj[person] = address

    }

    let sortedKeys = Object.keys(obj).sort();

    for (let key of sortedKeys) {
        console.log(`${key} -> ${obj[key]}`);
    }

}

addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])