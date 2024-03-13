function calc() {
    const numberOne = document.getElementById('num1')
    const numberTwo = document.getElementById('num2')

    let first = Number(numberOne.value)
    let two = Number(numberTwo.value)
    let result = first + two

    let resultElements = document.getElementById('sum');
    resultElements.value = result;
}
