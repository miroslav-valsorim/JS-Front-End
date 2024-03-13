function parckingLot(arrayOfCars){
    let parking = new Set()

    for (carCoomand of arrayOfCars){
        [command, car] = carCoomand.split(", ")
        switch (command) {
            case 'IN':
                parking.add(car);
                break;
            case 'OUT':
                parking.delete(car);
                break;
        }
    }
    if(parking.size === 0) {
        return console.log('Parking Lot is Empty');
    }

    let sortParking = Array.from(parking.values()).sort();
    console.log(sortParking.join('\n'))
}

parckingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])