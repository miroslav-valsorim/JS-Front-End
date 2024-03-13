function solve(){
    
    const inputDomSelectors = {
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacherName: document.getElementById('teacher-name')
    }

    const formButtons = {
        addCourse: document.getElementById('add-course'),
        editCourse: document.getElementById('edit-course'),
    }

    const otherDomSelectors = {
        loadCoursesBtn: document.getElementById('load-course'),
        divList: document.getElementById('list'),
        form: document.querySelector('#form > form')
    }

    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    otherDomSelectors.loadCoursesBtn.addEventListener('click', loadAllDataForCourses)
    formButtons.addCourse.addEventListener('click', addNewCourse)
    formButtons.editCourse.addEventListener('click', editCourseAndPut)

    let localDataInfo = {}
    let currentEditID = ''

    function loadAllDataForCourses(event){
        if (event){
            event.preventDefault()
        }

        otherDomSelectors.divList.innerHTML = ''

        fetch(BASE_URL)
            .then((data) => data.json())
            .then(data => {
                Object.values(data)
                    .forEach((value) => {
                        
                        let newDiv = createElement('div', otherDomSelectors.divList, '', ['container'])
                        newDiv.id = value._id
                        createElement('h2', newDiv, value.title)
                        createElement('h3', newDiv, value.teacher)
                        createElement('h3', newDiv, value.type)
                        createElement('h4', newDiv, value.description)
                        let editBtn = createElement('button', newDiv, 'Edit Course', ['edit-btn'])
                        let finishBtn = createElement('button', newDiv, 'Finish Course', ['finish-btn'])

                        editBtn.addEventListener('click', editCourse)
                        finishBtn.addEventListener('click', finishCourse)

                        localDataInfo[value._id] = {
                            title: value.title,
                            type: value.type,
                            description: value.description,
                            teacher: value.teacher,
                        }

                    })
            })
            .catch((err) => console.log(err))

    }

    function addNewCourse(event){
        if (event){
            event.preventDefault()
        }

        let checkValuesNonEmpty = Object.values(inputDomSelectors)
        .every((input) => input.value !== '')

        if (!checkValuesNonEmpty){
            console.log('There is an empty field')
            return
        }

        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                title: inputDomSelectors.title.value,
                type: inputDomSelectors.type.value,
                description: inputDomSelectors.description.value,
                teacher: inputDomSelectors.teacherName.value,
            })
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadAllDataForCourses();
                otherDomSelectors.form.reset()
            })
            .catch((err) => console.log('error'))
    }

    function editCourse(event){
        if (event){
            event.preventDefault()
        }

        let id = this.parentNode.id
        currentEditID = id
        // console.log(id)
        // console.log(localDataInfo[id])
        // console.log(currentEditID)

        inputDomSelectors.title.value = localDataInfo[id].title
        inputDomSelectors.type.value = localDataInfo[id].type
        inputDomSelectors.description.value = localDataInfo[id].description
        inputDomSelectors.teacherName.value = localDataInfo[id].teacher

        formButtons.addCourse.disabled = true
        formButtons.editCourse.disabled = false

        this.parentNode.remove()
    }

    function editCourseAndPut(event){
        if (event){
            event.preventDefault()
        }

        let httpHeaders = {
            method: 'PUT',
            body: JSON.stringify({
                title: inputDomSelectors.title.value,
                type: inputDomSelectors.type.value,
                description: inputDomSelectors.description.value,
                teacher: inputDomSelectors.teacherName.value,
                _id: currentEditID,
            })
        }

        fetch(`${BASE_URL}${currentEditID}`, httpHeaders)
            .then(() => {
                loadAllDataForCourses()
                otherDomSelectors.form.reset()
                formButtons.editCourse.disabled = true
                formButtons.addCourse.disabled = false
            })
            .catch((err) => console.log(err))
    }

    function finishCourse(event){
        if (event){
            event.preventDefault()
        }

        let id = this.parentNode.id
        currentEditID = id

        let htppHeaders = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, htppHeaders)
            .then(loadAllDataForCourses())
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

solve()