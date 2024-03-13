window.addEventListener("load", solve);

function solve() {

  let inputDomFields = {
    name: document.getElementById('player'),
    score: document.getElementById('score'),
    round: document.getElementById('round'),
  }

  let otherDomSelectors = {
    form: document.querySelector('.scoring-content'),
    spotOn: document.getElementById('sure-list'),
    addBtn: document.getElementById('add-btn'),
    scoreBoard: document.getElementById('scoreboard-list'),
    clearBtn: document.querySelector('#players-container > div > div > button')
  }

  otherDomSelectors.addBtn.addEventListener('click', addNewScore)
  otherDomSelectors.clearBtn.addEventListener('click', reloadPage)

  let localDataInfo = {}

  function addNewScore(event){
    if (event){
      event.preventDefault()
    }

    let noEmptyFields = Object.values(inputDomFields).every(input => input.value != '')
    if (!noEmptyFields){
      console.log('there is empty field')
      return
    }

    let newLi = createElement('li', otherDomSelectors.spotOn, '', ['dart-item'])
    let newArticle = createElement('article', newLi, '')
    createElement('p', newArticle, `${inputDomFields.name.value}`)
    createElement('p', newArticle, `Score: ${inputDomFields.score.value}`)
    createElement('p', newArticle, `Round: ${inputDomFields.round.value}`)
    let editBtn = createElement('button', newLi, 'edit', ['btn', 'edit'])
    let okBtn = createElement('button', newLi, 'ok', ['btn', 'ok'])

    editBtn.addEventListener('click', editBtnFunc)
    okBtn.addEventListener('click', okBtnFunc)

    localDataInfo[inputDomFields.name.value] = {
      name: inputDomFields.name.value,
      score: inputDomFields.score.value,
      round: inputDomFields.round.value,
    }

    console.log(localDataInfo)
    console.log(localDataInfo[inputDomFields.name.value])

    otherDomSelectors.addBtn.disabled = true
    otherDomSelectors.form.reset()
  }

  function editBtnFunc(){
    let name = this.parentNode.querySelector('article > p:nth-child(1)').textContent
    // console.log(name)
    // console.log(localDataInfo[name])

    inputDomFields.name.value = localDataInfo[name].name
    inputDomFields.round.value = localDataInfo[name].round
    inputDomFields.score.value = localDataInfo[name].score

    otherDomSelectors.addBtn.disabled = false
    this.parentNode.remove()
  }

  function okBtnFunc(){
    let container = this.parentNode
    otherDomSelectors.scoreBoard.appendChild(container)

    document.querySelector('#scoreboard-list > li > button.btn.edit').remove()
    document.querySelector('#scoreboard-list > li > button.btn.ok').remove()

    otherDomSelectors.addBtn.disabled = false
  }

  function reloadPage(){
    window.location.reload()
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
  