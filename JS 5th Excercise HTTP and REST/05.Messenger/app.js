function attachEvents() {
    const submitButton = document.getElementById('submit')
    const refreshButton = document.getElementById('refresh')
    const nameInput = document.querySelector('#controls > div:nth-child(1) > input[type=text]')
    const messageInput = document.querySelector('#controls > div:nth-child(2) > input[type=text]')
    const messageBox = document.getElementById('messages')
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger'

    submitButton.addEventListener('click',submitInfo)
    refreshButton.addEventListener('click',refreshInfo)

    function submitInfo(){
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                author: nameInput.value, 
                content: messageInput.value
            })
        }
        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then(
                nameInput.value = '',
                messageInput.value = ''
            )
            .catch((er) => console.error(er))
    }

    function refreshInfo(){
        fetch(BASE_URL)
            .then((res) => res.json())
            .then(data => {
                Object.entries(data).forEach(([key, value]) => {
                    messageBox.value += `${value.author}: ${value.content} `+ '\n'
                })
            })
            .catch((er) => console.error(er))
    }
}

attachEvents();