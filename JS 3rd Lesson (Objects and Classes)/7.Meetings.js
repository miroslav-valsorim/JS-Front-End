function meetings(arrayOfStrings){

    obj = {}

    for (let days of arrayOfStrings){
        let inputArray = days.split(" ")
        let day = inputArray[0]
        let person = inputArray[1]
        

        if (Object.keys(obj).includes(day)){
            console.log(`Conflict on ${day}!`)
        }else{
            console.log(`Scheduled for ${day}`)
            obj[day] = person
        }
    }

    for (let meets of Object.entries(obj)){
        console.log(`${meets[0]} -> ${meets[1]}`)
        
    }

}

meetings(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George'])