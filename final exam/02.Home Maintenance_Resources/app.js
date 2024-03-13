window.addEventListener("load", solve);

function solve(){
    const inputDomSelectors = {
        place: document.getElementById('place'),
        action: document.getElementById('action'),
        person: document.getElementById('person')
    }

    const otherDomSelectors = {
        addBtn: document.getElementById('add-btn'),
        form: document.querySelector('#add-task > form'),
        taskList: document.getElementById('task-list'),
        doneList: document.getElementById('done-list'),
        allDonelist: document.querySelectorAll('#done-list > li')
    }

    otherDomSelectors.addBtn.addEventListener('click', addNewTask)

    let localDataInfo = {}
    let idGenerator = 0

    function addNewTask(event){
        if (event){
            event.preventDefault()
        }

        let emptyFieldsCheck = Object.values(inputDomSelectors).every(input => input.value != '')
        if (!emptyFieldsCheck){
            console.log('there is an empty field')
            return
        }

        idGenerator++

        let newLi = createElement('li', otherDomSelectors.taskList,'', ['clean-task'])
        newLi.id = idGenerator
        let newArticle = createElement('article', newLi, '')
        createElement('p', newArticle, `Place: ${inputDomSelectors.place.value}`)
        createElement('p', newArticle, `Action: ${inputDomSelectors.action.value}`)
        createElement('p', newArticle, `Person: ${inputDomSelectors.person.value}`)
        let newDiv = createElement('div', newLi, '',['buttons'])
        let editBtn = createElement('button', newDiv, 'Edit', ['edit'])
        let doneBtn = createElement('button', newDiv, 'Done', ['done'])

        editBtn.addEventListener('click', editTaskAction)
        doneBtn.addEventListener('click', doneWithTask)

        localDataInfo[idGenerator] = {
            place: inputDomSelectors.place.value,
            action: inputDomSelectors.action.value,
            person: inputDomSelectors.person.value,
        }

        otherDomSelectors.form.reset()
    }

    function editTaskAction(event){
        if(event){
            event.preventDefault()
        }

        let id = this.parentNode.parentNode.id
        console.log(localDataInfo[id])
        inputDomSelectors.place.value = localDataInfo[id].place
        inputDomSelectors.action.value = localDataInfo[id].action
        inputDomSelectors.person.value = localDataInfo[id].person

        this.parentNode.parentNode.remove()
    }

    function doneWithTask(event){
        if(event){
            event.preventDefault()
        }

        let container = this.parentNode.parentNode
        otherDomSelectors.doneList.appendChild(container)

        otherDomSelectors.doneList.querySelector('.buttons').remove()
  
        let deleteBtn = createElement('button', otherDomSelectors.doneList.querySelector('li'), 'Delete', ['delete'])
        deleteBtn.addEventListener('click', deleteTask)
    }

    function deleteTask(event){
        if (event){
            event.preventDefault()
        }
        // console.log(this.parentNode.id)
        this.parentNode.remove()
        delete localDataInfo[id]
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