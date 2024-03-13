function names(arrayOfNames){

    // 1st decision without object
    // for (let name of arrayOfNames){
    //     console.log(`Name: ${name} -- Personal Number: ${name.length}`)
    // }

    // 2nd decision with object
    // let objectOfNames = {}
    // for (let name of arrayOfNames){
    //     objectOfNames.name = name ;
    //     objectOfNames.length = name.length ;
    //     console.log(`Name: ${objectOfNames.name} -- Personal Number: ${objectOfNames.length}`)
    // }

    // 3rd decision
    Object.entries(
        arrayOfNames.reduce((data, employee) => {
            data[employee] = employee.length;
            return data; 
        }, {})
    ).forEach(([employee, length]) => {
        console.log(`Name: ${employee} -- Personal Number: ${length}`);
    })  
}

names([

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

])