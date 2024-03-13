function solve(array){

    let n = array.shift()
    let objRace = {}

    for (let i=0; i < n; i++){
       let [name, fuel, position] = array.shift('').split('|')
       objRace[name] = { fuel, position}
    }

    for (item of array){
        let command = item.split(' - ')[0]
        
        if (command === 'StopForFuel'){
            let [command, name, minimumFuel, changePosition] = item.split(' - ')
            stopForFuel(name, minimumFuel, changePosition)
        }else if(command === 'Overtaking'){
            let [command, riderOne, riderTwo] = item.split(' - ')
            overtakin(riderOne,riderTwo)
        }else if(command === 'EngineFail'){
            let [command, rider, lapsLeft] = item.split(' - ')
            engineFail(rider, lapsLeft)
        }else if(command === 'Finish'){
            for (racer in objRace){
                console.log(racer)
                console.log(`  Final position: ${objRace[racer].position}`)
            }
        }
    }

    function stopForFuel(rider,minimumFuel, changePosition){
        if (Number(objRace[rider].fuel) < Number(minimumFuel)){
            objRace[rider].position = changePosition
            console.log(`${rider} stopped to refuel but lost his position, now he is ${changePosition}.`)
        }else{
            console.log(`${rider} does not need to stop for fuel!`)
            
        }
    }

    function overtakin(riderOne, riderTwo){
        if (objRace[riderOne].position < objRace[riderTwo].position){
            let value = objRace[riderTwo].position
            objRace[riderTwo].position = objRace[riderOne].position
            objRace[riderOne].position = value
            console.log(`${riderOne} overtook ${riderTwo}!`)
        }
    }

    function engineFail(rider, lapsLeft){
        delete objRace[rider]
        console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
    }

}

// solve(
//     (["3",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|2",
//     "Jorge Lorenzo|80|3",
//     "StopForFuel - Valentino Rossi - 50 - 1",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"])
// )

solve(
    (["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])

)