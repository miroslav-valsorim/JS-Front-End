
function solve(array){

    let shoppingCard = array.shift().split('!')
    
    for (item of array){
        if (item.includes('Go Shopping!')){
            console.log(shoppingCard.join(', '))
        }else if (item.includes('Urgent')){
            
            [command, product] = item.split(' ')
            if (shoppingCard.includes(product)){
                continue
            }else{
                shoppingCard.unshift(product)
            }

        }else if(item.includes('Unnecessary')){
            
            [command, product] = item.split(' ')
            if (shoppingCard.includes(product)){
                shoppingCard = shoppingCard.filter(prod => prod !== product)
            }

        }else if(item.includes('Correct')){

            [command, oldProduct, newProduct] = item.split(' ')
            if (shoppingCard.includes(oldProduct)){
                let index = shoppingCard.indexOf(oldProduct)
                shoppingCard[index] = newProduct
            }

        }else if(item.includes('Rearrange')){

            [command, product] = item.split(' ')
            if (shoppingCard.includes(product)){
                shoppingCard = shoppingCard.filter(prod => prod !== product)
                shoppingCard.push(product)
            }
        }

    }
}

// solve(
//     (["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"])
// )

solve(
    (["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)