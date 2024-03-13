function phoneBook(phone){
    obj = {}
    for (const data of phone) {
        let info = data.split(' ');
        let name = info[0];
        let phone = info[1];
        obj[name] = phone
    }

    for (const property of Object.entries(obj)) {
        console.log(`${property[0]} -> ${property[1]}`);
    }

}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])