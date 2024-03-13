function solve(km, zone){

    let motorwayLimit = 130
    let interstateLimit = 90
    let cityLimit = 50
    let residentialLimit = 20
    let difference = 0

    if (zone === "city"){
        if (km <= cityLimit){
            console.log(`Driving ${km} km/h in a ${cityLimit} zone`)
        }else if (km - cityLimit <= 20){
            difference = km - cityLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - speeding`)
        }else if (km - cityLimit > 20 && km - cityLimit <= 40 ){
            difference = km - cityLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - excessive speeding`)
        }else if (km - cityLimit > 40){
            difference = km - cityLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - reckless driving`)
        }
    }else if (zone === "interstate"){
        if (km <= interstateLimit){
            console.log(`Driving ${km} km/h in a ${interstateLimit} zone`)
        }else if (km - interstateLimit <= 20){
            difference = km - interstateLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - speeding`)
        }else if (km - interstateLimit > 20 && km - interstateLimit <= 40 ){
            difference = km - interstateLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - excessive speeding`)
        }else if (km - interstateLimit> 40){
            difference = km - interstateLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - reckless driving`)
        }
    }else if (zone === "motorway"){
        if (km <= motorwayLimit){
            console.log(`Driving ${km} km/h in a ${motorwayLimit} zone`)
        }else if (km - motorwayLimit <= 20){
            difference = km - motorwayLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - speeding`)
        }else if (km - motorwayLimit > 20 && km - motorwayLimit <= 40 ){
            difference = km - motorwayLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - excessive speeding`)
        }else if (km - motorwayLimit> 40){
            difference = km - motorwayLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - reckless driving`)
        }
    }else if (zone === "residential"){
        if (km <= residentialLimit){
            console.log(`Driving ${km} km/h in a ${residentialLimit} zone`)
        }else if (km - residentialLimit <= 20){
            difference = km - residentialLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - speeding`)
        }else if (km - residentialLimit > 20 && km - residentialLimit <= 40 ){
            difference = km - residentialLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - excessive speeding`)
        }else if (km - residentialLimit> 40){
            difference = km - residentialLimit
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - reckless driving`)
        }
    }


}

solve(200, 'motorway')