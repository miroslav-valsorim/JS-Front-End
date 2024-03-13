window.addEventListener("load", solve);

function solve() {

  const inputDomSelectors = {
    title: document.getElementById('task-title'),
    category: document.getElementById('task-category'),
    content: document.getElementById('task-content'),
  }

  const otherDomSelectors = {
    publishBtn: document.getElementById('publish-btn'),
    form: document.querySelector('.newPostContent'),
    reviewList: document.getElementById('review-list'),
    publishedList: document.getElementById('published-list')
  }

  let localDataInfo = {}

  otherDomSelectors.publishBtn.addEventListener('click', createTask)

  function createTask(event){
    if (event){
        event.preventDefault()
    }

    let checkValuesNonEmpty = Object.values(inputDomSelectors)
    .every((input) => input.value !== '')

    if (!checkValuesNonEmpty){
        console.log('There is an empty fiels')
        return
    }

    const {title, category, content} = inputDomSelectors
    let newLi = createElement('li', otherDomSelectors.reviewList, '', ['rpost'])
    let newArticle = createElement('article', newLi, '')
    let header = createElement('h4', newArticle, `${title.value}`)
    let firstP = createElement('p', newArticle, `Category: ${category.value}`)
    let secondP = createElement('p', newArticle, `Content: ${content.value}`)
    let editBtn = createElement('button', newLi, 'Edit', ['action-btn', 'edit'])
    let postBtn = createElement('button', newLi, 'Post', ['action-btn', 'post'])

    editBtn.addEventListener('click', editPost)
    postBtn.addEventListener('click', postPost)

    localDataInfo[title.value] = {
        title: title.value,
        category: category.value,
        content: content.value,
    }

    // console.log(localDataInfo)
    // console.log(localDataInfo[title.value])
    otherDomSelectors.form.reset()
  }

  function editPost(){
    
    let titleCheck = this.parentNode.querySelector('article > h4').textContent
    // console.log(titleCheck)
    // console.log(localDataInfo[titleCheck].title)

    inputDomSelectors.title.value = localDataInfo[titleCheck].title
    inputDomSelectors.category.value = localDataInfo[titleCheck].category
    inputDomSelectors.content.value = localDataInfo[titleCheck].content

    this.parentNode.remove()
  }

  function postPost(){
    let container = this.parentNode
    otherDomSelectors.publishedList.appendChild(container)

    document.querySelector('#published-list .edit').remove()
    document.querySelector('#published-list .post').remove()   
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