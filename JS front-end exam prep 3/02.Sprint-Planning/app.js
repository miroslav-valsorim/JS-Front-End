window.addEventListener('load', solve);

function solve() {

    const labelToIconMap = {
        'Feature': '&#8865;',
        'Low Priority Bug': '&#9737;',
        'High Priority Bug': '&#9888;',
    };
    const labelNameToClassMap = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority',
    };

    const formInputDomSelectors = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee'),
    }

    const buttonDomSelectors = {
        create: document.getElementById('create-task-btn'),
        delete: document.getElementById('delete-task-btn'),
    }
    
    const otherDomSelectors = {
        taskSection: document.getElementById('tasks-section'),
        totalPoints: document.getElementById('total-sprint-points'),
        form: document.getElementById('create-task-form'),
    }

    buttonDomSelectors.create.addEventListener('click',createTasks)
    buttonDomSelectors.delete.addEventListener('click',mainDelete)

    const tasksObject = {}
    let taskCounter = 0
    let totalPoints = 0
    let currentDeleteForm = ''

    function createTasks(event){
        if (event){
            event.preventDefault()
        }

        let everythingSigned = Object.values(formInputDomSelectors)
        .every((input) => input.value !== '')

        if (!everythingSigned){
            console.log('Empty field')
            return
        }

        const { title, description, label, points, assignee } = formInputDomSelectors

        taskCounter++
        let article = createElement('article', otherDomSelectors.taskSection,'',['task-card'], `task-${taskCounter}`)
        let firstDiv = createElement('div', article, `${label.value} ${labelToIconMap[label.value]}`, ['task-card-label', labelNameToClassMap[label.value]], null, true);
        let hThree = createElement('h3', article, title.value, ['task-card-title'])
        let p = createElement('p', article, description.value, ['task-card-description'])
        let secondDiv = createElement('div', article, `Estimated at ${points.value} pts`, ['task-card-points'])
        let thirdDiv = createElement('div', article, `Assigned to: ${assignee.value}`, ['task-card-assignee'])
        let lastDiv = createElement('div', article,'', ['task-card-actions'])
        let delBtn = createElement('button', lastDiv, 'Delete')

        delBtn.addEventListener('click', deleteCurrentClick)


        totalPoints += Number(formInputDomSelectors.points.value)
        otherDomSelectors.totalPoints.textContent = `Total Points ${totalPoints}pts`

        tasksObject[`task-${taskCounter}`] = {
            title: title.value,
            description: description.value,
            label: label.value,
            points: points.value,
            assignee: assignee.value,
        }

        otherDomSelectors.form.reset()
   
    }

    function deleteCurrentClick(){
        let taskId = this.parentNode.parentNode.id
        // document.getElementById('task-id').value = taskId;
        // for (const key in formInputDomSelectors) {
        //     formInputDomSelectors[key].value = tasksObject[taskId][key];
        // }
        currentDeleteForm = taskId

        formInputDomSelectors.title.value = tasksObject[taskId].title
        formInputDomSelectors.description.value = tasksObject[taskId].description
        formInputDomSelectors.label.value = tasksObject[taskId].label
        formInputDomSelectors.points.value = tasksObject[taskId].points
        formInputDomSelectors.assignee.value = tasksObject[taskId].assignee

        Object.values(formInputDomSelectors)
            .forEach((input) => {
                input.setAttribute('disabled', true);
            })

        buttonDomSelectors.delete.removeAttribute('disabled')
        buttonDomSelectors.create.disabled = true
        
    }

    function mainDelete(){
        document.getElementById(currentDeleteForm).remove()
        
        Object.values(formInputDomSelectors)
            .forEach((input) => {
                input.removeAttribute('disabled');
            });

        buttonDomSelectors.create.disabled = false
        buttonDomSelectors.delete.disabled = true

        totalPoints -= Number(formInputDomSelectors.points.value)
        otherDomSelectors.totalPoints.textContent = `Total Points ${totalPoints}pts`

        delete tasksObject[currentDeleteForm]
        otherDomSelectors.form.reset()
    }
    

    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml){
        const htmlElement = document.createElement(type)
    
        if (content && useInnerHtml){
            htmlElement.InnerHtml = content;
        } else {
            if (content && type !== 'input'){
                htmlElement.textContent = content;
            }
        
            if (content && type === 'input'){
                htmlElement.value = content;
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