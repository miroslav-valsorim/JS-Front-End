function garage(array){

    objGarage = {}

    for (let command of array){
        let firstCommand = command.split(' - ')[0]
        let secondCommand = command.split(' - ')[1]
 
        if (!objGarage.hasOwnProperty(firstCommand)){
            objGarage[firstCommand] = []
            objGarage[firstCommand].push(secondCommand)
        }else{
            objGarage[firstCommand].push(secondCommand)
        }
    }

    for (let value of Object.values(objGarage)){
        if (value.length > 1){
            for (info of value){
                console.log(info)
            }
        }else{
            console.log(JSON.stringify(value))
        }
    }
}

garage(
    ['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
)