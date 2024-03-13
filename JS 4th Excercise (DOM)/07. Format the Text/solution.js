function solve() {
  const textToSplit = document.getElementById('input').value.split('.')
  textToSplit.pop() // removes the last element from the list which is an empty str or '.' (dot)

  while (textToSplit.length > 0){
    let paragraphOfThree = textToSplit.splice(0,3).join('. ') + '.'
    let newP = document.createElement('p')
    newP.textContent = paragraphOfThree
    let outputDiv = document.getElementById('output')
    outputDiv.appendChild(newP)
  }
}