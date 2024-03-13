function solve(groupOfPeople, typeOfGroup, dayOfWeek){


    let ticketPrice = 0

    if (typeOfGroup === "Students"){
        if (dayOfWeek === "Friday"){
            ticketPrice = 8.45
        }else if (dayOfWeek === "Saturday"){
            ticketPrice = 9.80
        }else if (dayOfWeek === "Sunday"){
            ticketPrice = 10.46
        }
    }else if (typeOfGroup === "Business"){
        if (dayOfWeek === "Friday"){
            ticketPrice = 10.90
        }else if (dayOfWeek === "Saturday"){
            ticketPrice = 15.60
        }else if (dayOfWeek === "Sunday"){
            ticketPrice = 16
        }
    }else if (typeOfGroup === "Regular"){
        if (dayOfWeek === "Friday"){
            ticketPrice = 15
        }else if (dayOfWeek === "Saturday"){
            ticketPrice = 20
        }else if (dayOfWeek === "Sunday"){
            ticketPrice = 22.50
        }
    }

    let totalPrice = 0
    if(typeOfGroup === "Students" && groupOfPeople >= 30){
        totalPrice = (ticketPrice * groupOfPeople) - ((ticketPrice * groupOfPeople) * 0.15)
    }else if(typeOfGroup === "Business" && groupOfPeople >= 100){
        totalPrice = (ticketPrice * groupOfPeople) - (10 * ticketPrice)
    }else if (typeOfGroup === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20){
        totalPrice = (ticketPrice * groupOfPeople) - ((ticketPrice * groupOfPeople) * 0.05)
    }else{
        totalPrice = ticketPrice * groupOfPeople
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}

solve( 
    30,
    "Students",
    "Sunday")

solve(
    40,
    "Regular",
    "Saturday"
)