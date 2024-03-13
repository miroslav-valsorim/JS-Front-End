function attachEvents() {
  const loadButton = document.getElementById('loadBooks')
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books'
  const tableBody = document.querySelector('body > table > tbody')
  const submitSaveButton = document.querySelector('#form > button')
  const titleInput = document.querySelector('#form > input[type=text]:nth-child(3)')
  const authorInput = document.querySelector('#form > input[type=text]:nth-child(5)')

  submitSaveButton.addEventListener('click', addToTable)
  loadButton.addEventListener('click',loadInfo)

  let editButtonID = null
  
  function loadInfo(){
    tableBody.replaceChildren()
    fetch(BASE_URL)
      .then((res) => res.json())
      .then(data => {
        Object.entries(data).forEach(([key, value]) => {
          console.log(key)
          console.log(value.author)
          const tableRow = document.createElement('tr')
          const title = document.createElement('td')
          title.textContent = value.title
          const author = document.createElement('td')
          author.textContent = value.author
          const action = document.createElement('td')
          
          const editButton = document.createElement('button')
          editButton.textContent = 'Edit'
          editButton.id = key
          editButton.addEventListener('click', editButtonFunc)

          const deleteButton = document.createElement('button')
          deleteButton.textContent = 'Delete'
          deleteButton.id = key
          deleteButton.addEventListener('click', onDelete)

          action.appendChild(editButton)
          action.appendChild(deleteButton)
          tableRow.appendChild(title)
          tableRow.appendChild(author)
          tableRow.appendChild(action)
          tableBody.appendChild(tableRow)
        })
      })
      .catch((er) => console.log(er))
  }

  function addToTable(){
    if(submitSaveButton.textContent === 'Submit'){
      httpHeaders = {
        method:'POST',
        body: JSON.stringify({
        title : titleInput.value,
        author : authorInput.value
      })
    }
    
    fetch(BASE_URL,httpHeaders)
      .then((res) => res.json())
      .then(
        titleInput.value = '',
        authorInput.value = '',
        loadInfo()
      )
    }else if(submitSaveButton.textContent === 'Save'){
      httpHeaders = {
          method:'PUT',
          body: JSON.stringify({
          title : titleInput.value,
          author : authorInput.value
        })
      }
    
      fetch(`${BASE_URL}/${editButtonID}`,httpHeaders)
        .then((res) => res.json())
        .then(
          titleInput.value = '',
          authorInput.value = '',
          loadInfo()
        )
        
      document.querySelector('#form > h3').textContent = 'FORM'
      submitSaveButton.textContent = 'Submit'

    }
 

  }

  async function onDelete(e) {
    const id = e.target.id;
    console.log(id)

    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "delete",
    });

    loadInfo()
  }

  function editButtonFunc(e){
    document.querySelector('#form > h3').textContent = 'Edit FORM'
    submitSaveButton.textContent = 'Save'
    titleInput.value =
    e.target.parentElement.parentElement.children[0].textContent;
    authorInput.value =
    e.target.parentElement.parentElement.children[1].textContent;
    editButtonID = e.target.id
  }

}

attachEvents();