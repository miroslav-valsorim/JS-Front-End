function flight(array){
    let objFlights = {}
    let neededStatus 

    for (let i=0; i<3 ; i++){
        if (i === 0){
            for (let el of array[i]){
                let [sector, destination] = el.split(' ')
                objFlights[sector] = {}
                objFlights[sector].Destination = destination
                objFlights[sector].Status = 'Ready to fly'
            }
        }

        if (i === 1){
            for (let el of array[i]){
                let [sector, status] = el.split(' ')
                if (sector in objFlights){
                    objFlights[sector].Status = status
                }
            }
        }

        if (i === 2){
            neededStatus = array[2][0]
        }
    }

    for (let fly in objFlights){
        let status = Object.values(objFlights[fly])[1]
        if (status == neededStatus){
            console.log(objFlights[fly])
        }
    }
}

flight([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]);