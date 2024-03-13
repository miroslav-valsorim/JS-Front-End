window.addEventListener("load", solve);

function solve() {
 

  let previewList = document.getElementById('preview-list')
  let buttonPublish = document.getElementById('form-btn')
  let mainDiv = document.getElementById('main')
  buttonPublish.addEventListener('click', publishElements)

  let firstName = document.getElementById('first-name')
  let lastName = document.getElementById('last-name')
  let age = document.getElementById('age')
  let storyTitle = document.getElementById('story-title')
  let genre = document.getElementById('genre')
  let storyText = document.getElementById('story')

  let localInfo = {}

  function publishElements(){

    if (firstName.value !== '' && lastName.value !== '' && age.value !== '' && storyTitle.value !== '' && genre.value !== '' && storyText.value !== ''){
      //  console.log(firstName.value, lastName.value, age.value,storyTitle.value, genre.value, storyText.value)
      localInfo = {
        fName : firstName.value,
        lName : lastName.value,
        numberAge : age.value,
        sTitle : storyTitle.value,
        sGenre : genre.value,
        sText : storyText.value
      }
      // console.log(localInfo)

      const li = createElement('li', previewList, null, ['story-info'])
      const article = createElement('article', li)
      createElement('h4', article, `Name: ${firstName.value} ${lastName.value}`)
      createElement('p', article, `Age: ${age.value}`)
      createElement('p', article, `Title: ${storyTitle.value}`)
      createElement('p', article, `Genre: ${genre.value}`)
      createElement('p', article, storyText.value)

      const saveBtn = createElement('button', li, 'Save Story', ['save-btn'])
      const editBtn = createElement('button', li, 'Edit Story', ['edit-btn'])
      const deleteBtn = createElement('button', li, 'Delete Story', ['delete-btn'])

      saveBtn.addEventListener('click', saveEvent)
      editBtn.addEventListener('click', editEvent)
      deleteBtn.addEventListener('click', deleteEvent)

      firstName.value = ''
      lastName.value = ''
      age.value = ''
      storyTitle.value = ''
      genre.value = ''
      storyText.value = ''

      buttonPublish.disabled = true

    }

  }

  function saveEvent(){
    mainDiv.innerHTML = ''
    createElement('h1', mainDiv, 'Your scary story is saved!')
  }

  function editEvent(){
    previewList.innerHTML = ''
    createElement('h3', previewList, 'Preview')
    firstName.value = localInfo.fName
    lastName.value = localInfo.lName
    age.value = localInfo.numberAge
    storyTitle.value = localInfo.sTitle
    genre.value = localInfo.sGenre
    storyText.value = localInfo.sText
    buttonPublish.disabled = false
  }

  function deleteEvent(){
    previewList.innerHTML = ''
    createElement('h3', previewList, 'Preview')
    buttonPublish.disabled = false
  }

  function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml){
    const htmlElement = document.createElement(type)

    if (content &&useInnerHtml){
      htmlElement.useInnerHtml = content;
    }else{
      if (content && type !== 'input'){
        htmlElement.textContent = content;
      }

      if (content && type === 'input'){
        htmlElement.value = content
      }
    }

    if (classes && classes.length > 0){
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id
    }

    // { src: 'link, href: 'http'}
    // comes as object
    if (attributes) {
      for (const key in attributes){
        htmlElement[key] = attributes[key]
      }
    }

    if (parentNode){
      parentNode.appendChild(htmlElement)
    }

    return htmlElement
  }

}
