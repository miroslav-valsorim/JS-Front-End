function attachEvents() {
    const loadButton = document.getElementById('btnLoad')
    const phonebook = document.getElementById('phonebook')
    const createButton = document.getElementById('btnCreate')
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook'

    loadButton.addEventListener('click', loadInfo)
    createButton.addEventListener('click', createContact)

    function loadInfo(){
        phonebook.textContent = ''
        fetch(BASE_URL)
            .then((res) => res.json())
            .then(data => {
                Object.entries(data).forEach(([key,value]) => {
                    let newLi = document.createElement('li')
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    newLi.textContent = `${value.person}: ${value.phone}`
                    newLi.setAttribute("id", value._id)
                    deleteBtn.addEventListener('click', onDelete)
                    newLi.appendChild(deleteBtn)
                    phonebook.appendChild(newLi)

                })
            })
            .catch((er) => console.error(error))
    }

    function createContact(){
        const person = document.getElementById('person')
        const phone = document.getElementById('phone')

        const htppHeaders = {
            method: 'POST',
            body: JSON.stringify({
                person: person.value,
                phone: phone.value
            })
        }

        fetch(BASE_URL, htppHeaders)
            .then((res) => res.json())
            .then(
                person.value = '',
                phone.value = '',
                phonebook.textContent = '',
                loadInfo()
                
            )
            .catch((er) => console.log(er))
    }

    async function onDelete(e) {
        const id = e.target.parentElement.id;
        console.log(id)
        e.target.parentElement.remove();
        console.log(e.target.parentElement)
    
        const response = await fetch(`${BASE_URL}/${id}`, {
          method: "delete",
        });
      }

}

attachEvents();