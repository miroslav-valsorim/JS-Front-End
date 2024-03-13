function solve(fruit, grams, pricePerkg){

    let gramsToKg = grams * 0.001

    let totalPrice = gramsToKg * pricePerkg

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${gramsToKg.toFixed(2)} kilograms ${fruit}.`)

}

solve('orange', 2500, 1.80)