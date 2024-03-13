window.addEventListener("load", solve);

function solve() {
    
  const inputDomSelectors = {
    name: document.getElementById('student'),
    university: document.getElementById('university'),
    score: document.getElementById('score'),
  }

  const otherDomSelectors = {
    nextBtn: document.getElementById('next-btn'),
    form: document.querySelector('.applyContent'),
    previewList: document.getElementById('preview-list'),
    candidatesList: document.getElementById('candidates-list'),
  }

  otherDomSelectors.nextBtn.addEventListener('click', nextButtonAction)

  let localDataInfo = {}

  function nextButtonAction(event){
    if (event){
      event.preventDefault()
    }

    let nonEmptyFields = 
      Object.values(inputDomSelectors)
        .every((input) => input.value != '')

    if (!nonEmptyFields){
      console.log('There are empty fields')
      return
    }


    let newLi = createElement('li', otherDomSelectors.previewList, '', ['application'])
    let newArticle = createElement('article', newLi, '')
    createElement('h4', newArticle, `${inputDomSelectors.name.value}`)
    createElement('p', newArticle, `University: ${inputDomSelectors.university.value}`)
    createElement('p', newArticle, `Score: ${inputDomSelectors.score.value}`)
    let editBtn = createElement('button', newLi, 'edit', ['action-btn', 'edit'])
    let applyBtn = createElement('button', newLi, 'apply', ['action-btn', 'apply'])

    editBtn.addEventListener('click', editBtnAction)
    applyBtn.addEventListener('click', applyBtnAction)

    localDataInfo[inputDomSelectors.name.value] = {
      name: inputDomSelectors.name.value,
      university: inputDomSelectors.university.value,
      score: inputDomSelectors.score.value,
    }

    otherDomSelectors.nextBtn.disabled = true

    otherDomSelectors.form.reset()

  }

  function editBtnAction(){
    let id = this.parentNode.querySelector('h4').textContent
    console.log(localDataInfo[id])

    inputDomSelectors.name.value = localDataInfo[id].name
    inputDomSelectors.university.value = localDataInfo[id].university
    inputDomSelectors.score.value = localDataInfo[id].score
    
    otherDomSelectors.nextBtn.disabled = false

    this.parentNode.remove()
    delete localDataInfo[id]
  }

  function applyBtnAction(){
    let container = this.parentNode
    otherDomSelectors.candidatesList.appendChild(container)

    document.querySelector('#candidates-list > li > button.action-btn.apply').remove()
    document.querySelector('#candidates-list > li > button.action-btn.edit').remove()

    otherDomSelectors.nextBtn.disabled = false
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
  