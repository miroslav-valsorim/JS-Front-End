function sumTable() {
    const firstNum = document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(2)')
    const secondNum = document.querySelector('body > table > tbody > tr:nth-child(3) > td:nth-child(2)')
    const thirdNum = document.querySelector('body > table > tbody > tr:nth-child(4) > td:nth-child(2)')

    let first = Number(firstNum.textContent)
    let second = Number(secondNum.textContent)
    let third = Number(thirdNum.textContent)
    let sum = first + second + third

    let result = document.getElementById('sum')
    result.textContent = sum
    
}

// one more way with reduce()
// function sumTable() {
//     let costElements = document.querySelectorAll('tr td:nth-of-type(2)');

//     let sum = Array.from(costElements).reduce((a, x) => {
//         let currValue = Number(x.textContent) || 0;
//         return a + currValue;
//     }, 0);
    
//     let resultElement = document.getElementById('sum');
//     resultElement.textContent = sum
   
// }