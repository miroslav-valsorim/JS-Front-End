function solve(array){
    
    obj = {}
    townsList = []
    for(let towns of array){
        [towns,population] = towns.split(" <-> ")
        obj.town = towns
        obj.p = population
        
    }
    console.log(obj)
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)