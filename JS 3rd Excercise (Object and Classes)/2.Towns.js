function towns(arrayOfTowns){

    // 1st decision
    // let objectOfTowns = {};
    //
    // for (let city of arrayOfTowns){
    //     [currentTown,lat,long] = city.split(" | ") ;
    //     objectOfTowns.town = currentTown ;
    //     objectOfTowns.latitude = Number (lat).toFixed(2) ;
    //     objectOfTowns.longitude = Number (long).toFixed(2) ;
    //     console.log(objectOfTowns) ;
    // }

    // 2nd decison
    arrayOfTowns
        .map((line) => line.split(" | "))
        .map(([town, latitude, longitude]) => ({ town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) }))
        .forEach(obj => console.log(obj))
}


towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])