function subtract() {
    const firstNum = document.getElementById('firstNumber')
    const secondNum = document.getElementById('secondNumber')
    const resultFromSubstract = document.getElementById('result')

    let one = Number(firstNum.value)
    let two = Number(secondNum.value)
    let result = one - two

    let newElem = document.createElement('p')
    newElem.textContent = result

    resultFromSubstract.appendChild(newElem)

    // console.log(newElem)
}