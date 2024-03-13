function matrixN(n){
    let result = new Array(n).fill(new Array(n).fill(n))
        .forEach(row => console.log(row.join(" ")))
}

matrixN(7)