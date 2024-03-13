function convertToObject(jsonStr) {
    let person = JSON.parse(jsonStr);

    for (const property in person) {
        console.log(`${property}: ${person[property]}`);
    }

}

console.log(convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}'))