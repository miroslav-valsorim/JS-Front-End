// TODO:
function attachEvents() {

    const inputDom = {
        taskTitle: document.getElementById('title'),
        taskDescription: document.getElementById('description'),
    }

    const buttonsInputDom = {
        loadBtn: document.getElementById('load-board-btn'),
        addTaskBtn: document.getElementById('create-task-btn')
    }

    let tasksList = {
        toDo: document.getElementById('todo-section'),
        inProgress: document.getElementById('in-progress-section'),
        codeReview: document.getElementById('code-review-section'),
        done: document.getElementById('done-section'),
    }

    const otherDomSelectors = {
        form: document.querySelector('#form-section > form'),
        ul: document.getElementById('task-list')
    }

    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    buttonsInputDom.loadBtn.addEventListener('click', loadAllData)
    buttonsInputDom.addTaskBtn.addEventListener('click', addNewTask)

    function loadAllData(event){
        if (event){
            event.preventDefault()
        }

        if (!inputDom.taskDescription != '' && inputDom.taskTitle != ''){
            console.log('empty fields')
            return
        }

        for (item in tasksList){
            tasksList[item].querySelector('.task-list').textContent = ''
        }

        fetch(BASE_URL)
            .then((data) => data.json())
            .then(data => {
                Object.values(data)
                    .forEach( element => {
                        // console.log(element.status)
                        let mainDiv = ''
                        let buttonContext = ''
                        if (element.status === 'ToDo'){
                            mainDiv = tasksList.toDo
                            buttonContext = 'Move to in Progress'
                        }else if(element.status === 'In Progress'){
                            mainDiv = tasksList.inProgress
                            buttonContext = 'Move to Code Review'
                        }else if(element.status === 'Code Review'){
                            mainDiv = tasksList.codeReview
                            buttonContext = 'Move to Done'
                        }else if(element.status === 'Done'){
                            mainDiv = tasksList.done
                            buttonContext = 'Close'
                        }

                        // console.log(mainDiv)
                        let differentDivquerySel = mainDiv.querySelector(`.task-list`)
                        // console.log(differentDivquerySel)
                        let newLi = createElement('li', differentDivquerySel,'', ['task'])
                        newLi.id = element._id
                        let header = createElement('h3', newLi, `${element.title}`)
                        let paragraph = createElement('p', newLi, `${element.description}`)
                        let newBtn = createElement('button', newLi, `${buttonContext}`)

                        if (buttonContext === 'Close'){
                            newBtn.addEventListener('click', closeLastDelete)
                        }else{
                            newBtn.addEventListener('click', moveToNext)
                        }

                    })
            })
            .catch((err) => console.log(err))

    }

    function addNewTask(event){
        if (event){
            event.preventDefault()
        }

        httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                title: inputDom.taskTitle.value,
                description: inputDom.taskDescription.value,
                status: 'ToDo'
            })
        }

        fetch(BASE_URL, httpHeaders)
            .then(
                loadAllData(),
                otherDomSelectors.form.reset()
                )
            .catch((err) => console.log(err))
    }

    function moveToNext(event){
        if (event){
            event.preventDefault()
        }

        let id = this.parentNode.id
        // console.log(id)
        let btnCondition = this.parentNode.querySelector('button').textContent
        // let container = this.parentNode.parentNode.parentNode
        // console.log(container)
        // if(container.id === 'todo-section'){
        //     tasksList.inProgress.querySelector('.task-list').appendChild(this.parentNode)
        // }else if(container.id == 'in-progress-section'){
        //     tasksList.codeReview.querySelector('.task-list').appendChild(this.parentNode)
        // }else if(container.id == 'code-review-section'){
        //     tasksList.done.querySelector('.task-list').appendChild(this.parentNode)
        // }
        
        let stat = ''
        if (btnCondition  === 'Move to in Progress'){
            stat = 'In Progress'
        }else if(btnCondition === 'Move to Code Review'){
            stat = 'Code Review'
        }else if(btnCondition === 'Move to Done'){
            stat = 'Done'
        }

        httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({
                status: stat,
            })
        }

        fetch(`${BASE_URL}${id}`,httpHeaders)
            .then(loadAllData())
            .catch((err) => console.log(err))

    }

    function closeLastDelete(event){
        if (event){
            event.preventDefault()
        }

        httpHeaders = {
            method: 'DELETE'
        }

        let id = this.parentNode.id
        console.log(id)

        fetch(`${BASE_URL}${id}`,httpHeaders)
            .then(loadAllData())
            .catch((err) => console.log(err))
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

attachEvents();