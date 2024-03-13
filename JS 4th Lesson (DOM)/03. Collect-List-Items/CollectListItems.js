// function extractText() {
//     const liElements = Array.from(document.querySelectorAll('#items > li'));
//     const result = document.getElementById('result')

//     liElements
//     .forEach((li) => {
//         result.textContent += li.textContent + '\n'
//     })
// }

// 2nd 
function extractText() {
    let ulElement = document.getElementById('items');

    let textareaElement = document.getElementById('result');
    textareaElement.textContent = ulElement.textContent;
}