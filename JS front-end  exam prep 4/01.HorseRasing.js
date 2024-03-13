function solve(array){

    let horsesNamesthatRace = array.shift().split('|')

    for (item of array){
        let splited = item.split(' ')
        let command = splited[0]

        if (command === 'Retake'){
            let overtaking = splited[1]
            let overtaken = splited[2]
            let indexOvertaking = horsesNamesthatRace.indexOf(overtaking)
            let indexOvertaken = horsesNamesthatRace.indexOf(overtaken)
            if (indexOvertaken > indexOvertaking){
                // console.log(indexOvertaken,overtaken)
                // console.log(indexOvertaking, overtaking)
                [horsesNamesthatRace[indexOvertaken],horsesNamesthatRace[indexOvertaking]] = [horsesNamesthatRace[indexOvertaking],horsesNamesthatRace[indexOvertaken]]
                console.log(`${overtaking} retakes ${overtaken}.`)
                // console.log(horsesNamesthatRace)
            }
        }else if(command === 'Trouble'){
            let horseName = splited[1]
            let index= horsesNamesthatRace.indexOf(horseName)
            if (index > 0){
                [horsesNamesthatRace[index], horsesNamesthatRace[index-1]] = [horsesNamesthatRace[index-1], horsesNamesthatRace[index]]
                console.log(`Trouble for ${horseName} - drops one position.`)
            }
        }else if(command === 'Rage'){
            let horseName = splited[1]
            let index= horsesNamesthatRace.indexOf(horseName)
            if ((horsesNamesthatRace.length -1) - index === 1){
                [horsesNamesthatRace[index], horsesNamesthatRace[horsesNamesthatRace.length-1]] =  [horsesNamesthatRace[horsesNamesthatRace.length-1], horsesNamesthatRace[index]]
            }else{
                let elem = horsesNamesthatRace.splice(index,1)[0]
                horsesNamesthatRace.splice(index + 2, 0, elem)
            }
            console.log(`${horseName} rages 2 positions ahead.`)
        }else if(command === 'Miracle'){
            let lastHorse = horsesNamesthatRace.shift()
            horsesNamesthatRace.push(lastHorse)
            console.log(`What a miracle - ${lastHorse} becomes first.`)
        }else if(command === 'Finish'){
            console.log(horsesNamesthatRace.join('->'))
            console.log(`The winner is: ${horsesNamesthatRace[horsesNamesthatRace.length - 1]}`)
            break
        }
    }
}

solve(
    (['Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly'])

)