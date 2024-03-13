function solve(product, quantity){

    if (product === 'coffee'){
        console.log((1.50 * quantity).toFixed(2))
    }else if(product === 'water'){
        console.log((1 * quantity).toFixed(2))
    }else if(product === 'coke'){
        console.log((1.40 * quantity).toFixed(2))
    }else if(product === 'snack'){
        console.log((2 * quantity.toFixed(2)))
    }

}


solve("coffee",2)