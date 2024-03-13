// TODO
function attachEvents() {
    
    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    let loadButton = document.getElementById('load-button')
    let addButton = document.getElementById('add-button')
    let input = document.getElementById('title')
    let ul = document.getElementById('todo-list')

    loadButton.addEventListener('click', loadDataButton)
    addButton.addEventListener('click', addDataButton)

    function loadDataButton(event){
        
        if (event){
            event.preventDefault()
        }
        

        fetch(BASE_URL)
            .then((data) => data.json())
            .then((data) => {
                ul.innerHTML = ''
                Object.entries(data)
                    .forEach(([key, value]) => {
                        // console.log(key, value)
                        // console.log(value._id)
                        // console.log(li)
                        const li = document.createElement('li')
                        li.id = value._id
                        ul.appendChild(li)
                        const span = document.createElement('span')
                        span.textContent = value.name
                        li.appendChild(span)
                        const removeButton = document.createElement('button')
                        removeButton.textContent = 'Remove'
                        const editButton = document.createElement('button')
                        editButton.textContent = 'Edit'
                        editButton.addEventListener('click', editDataButton)
                        removeButton.addEventListener('click', deleteDataButton)
                        li.appendChild(removeButton)
                        li.appendChild(editButton)
                    })
            })
            .catch((err) => console.error(err))
    }

    function addDataButton(event){
        if (event){
            event.preventDefault()
        }
        
        httpHeaders = {
            method:'POST',
            body: JSON.stringify({
            name : input.value
            })
        }

        fetch(BASE_URL,httpHeaders)
            .then((res) => res.json())
            .then(
                input.value = '',
                loadDataButton()
            )
            .catch((err) => console.error(err))

    }

    function editDataButton(event){
        if (event){
            event.preventDefault()
        }
        // console.log(event.currentTarget.parentNode)
        // console.log(this.parentNode)
        // console.log(this.parentNode.firstChild)

        const liParent = event.currentTarget.parentNode
        const [ span, _removeBtn, editBtn] = Array.from(liParent.children)
        const editInput = document.createElement('input')
        editInput.value = span.textContent
        liParent.prepend(editInput)
        const submitButton = document.createElement('button')
        submitButton.textContent = 'Submit'
        submitButton.addEventListener('click', submitTaskHandler)
        liParent.appendChild(submitButton)
        span.remove()
        editBtn.remove()
    }

    function submitTaskHandler(event){
        const liParent = event.currentTarget.parentNode;
        const id = liParent.id;
        const [ input ] = Array.from(liParent.children);
        // console.log(id)
        // console.log(input.value)
        
        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({name: input.value})
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadDataButton())
            .catch((err) => console.error(err))
        
    }

    function deleteDataButton(event){
        const liParent = this.parentNode
        id = event.currentTarget.parentNode.id
        // console.log(id)

        httpHeaders = {
            method: "DELETE",
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadDataButton())
            .catch((err) => console.error(err))
    }

    function handleError(err){
        console.log(err)
    }

}

attachEvents();
