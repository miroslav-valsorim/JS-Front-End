function solve(input){
    for (const property in input) {
        console.log(`${property} -> ${input[property]}`)
    }
}

console.log(solve(
    {
        name: "Plovdiv",
        
        area: 389,
        
        population: 1162358,
        
        country: "Bulgaria",
        
        postCode: "4000"
        
        }
))