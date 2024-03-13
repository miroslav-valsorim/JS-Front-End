function solve(array){

    let n = array.shift()
    let objRace = {}

    for (let i=0; i < 3; i++){
       let [name, fuel, position] = array.shift('').split('|')
       objRace[name] = { fuel, position}
    }

    console.log(array)

    function StopForFuel(rider,minimumFuel, changePosition){
        if (objRace[rider].fuel < minimumFuel){
            objRace[rider].position = changePosition
            console.log(`${rider} stopped to refuel but lost his position, now he is ${changePosition}."`)
        }else{
            console.log(`${rider} does not need to stop for fuel!`)
        }
    }


    // console.log(Object.values(objRace).forEach(input => console.log(input)))
}

solve(
    (["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
)