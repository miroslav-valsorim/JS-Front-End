function solve(number){

    for(let i = 1; i <= 10; i++) {

        const result = i * number;

        console.log(`${number} X ${i} = ${result}`);
    }
}

solve(5)