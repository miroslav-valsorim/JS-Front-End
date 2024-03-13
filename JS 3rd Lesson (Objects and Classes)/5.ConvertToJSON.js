function convertToJSON(firstName, lastName, hairColor) {
    obj = {};
    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hairColor;

    let objToJson = JSON.stringify(obj)
    console.log(objToJson);
//     let jsonToObj = JSON.parse(objToJson)
//     console.log(jsonToObj.hairColor)
}

convertToJSON('Peter', 'Smith','Blond')
