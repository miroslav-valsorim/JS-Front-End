function inventory(arrayGames){

    class Hero{
        constructor(name,level,items){
            this.name = name
            this.level = level
            this.items = items
        }
    }

    let heroesList = []
    for (let charecter of arrayGames){
        [charName,charLevel,charItems] = charecter.split(" / ")
        newChar = new Hero(charName,charLevel,charItems)
        heroesList.push(newChar)
    }

    heroesList.sort((function(a, b) { 
        return a.level - b.level;
    }))

    for (let chars of heroesList){
        console.log(`Hero: ${chars.name}`)
        console.log(`level => ${chars.level}`)
        console.log(`items => ${chars.items}`)
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])