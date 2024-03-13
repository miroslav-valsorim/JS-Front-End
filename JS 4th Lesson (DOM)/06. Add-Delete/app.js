function addItem() {

    let UlContainer = document.getElementById('items')
    let input = document.getElementById('newItemText')
    let newLi = document.createElement('li')
    let newAnchor = document.createElement('a')

    newLi.textContent = input.value
    newAnchor.textContent = '[Delete]'
    newAnchor.addEventListener('click',deleteHandler)
    UlContainer.appendChild(newLi)
    newLi.appendChild(newAnchor)

    input.value = ''

    function deleteHandler(e){
        let liItem = e.currentTarget.parentElement
        liItem.remove()
    }
}  
