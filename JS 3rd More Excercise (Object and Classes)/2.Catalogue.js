function solve(givenArray){

    obj = {}
    for (line of givenArray){
        let [item, price] = line.split(' : ')
        obj[item] = [price]
    }

    let ordered = Object.keys(obj).sort().reduce(
        (object, key) => { 
          object[key] = obj[key]; 
          return object;
        }, {}
      );

    for (item in ordered){
        console.log(`${item} : ${ordered[item]}`)
    }
}

solve([
    'Appricot : 20.5',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
    ])