function create(name, population, treasury){
    let city = {}

    city.name = name
    city.population = population
    city.treasury = treasury

    return city
    // console.log(`name: ${city.name}, population: ${city.population}, treasury: ${city.treasury}`)

}

console.log(create('Tortuga',
7000,
15000
))

// create(create('Tortuga',
// 7000,
// 15000
// ))