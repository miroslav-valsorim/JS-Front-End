function solve(){

    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    const inputDomSelectors = {
        name: document.getElementById('name'),
        days: document.getElementById('num-days'),
        date: document.getElementById('from-date')
    }

    const otherDomSelectors = {
        form: document.querySelector('#form > form'),
        addVacationBtn: document.getElementById('add-vacation'),
        editVacationBtn: document.getElementById('edit-vacation'),
        loadVacationBtn: document.getElementById('load-vacations'),
        divList: document.getElementById('list')
    }

    otherDomSelectors.loadVacationBtn.addEventListener('click', loadAllData)
    otherDomSelectors.addVacationBtn.addEventListener('click', addNewVacationFunc)
    otherDomSelectors.editVacationBtn.addEventListener('click', uploadChangedVacation)

    let localDataStorage = {}
    let currentIdToChange = ''

    function loadAllData(event){
        if (event){
            event.preventDefault()
        }

        otherDomSelectors.divList.innerHTML = ''

        fetch(BASE_URL)
            .then((data) => data.json())
            .then((data) => {
                Object.values(data)
                    .forEach( value => {
                        // console.log(value)
                        let newDiv = createElement('div', otherDomSelectors.divList,'', ['container']);
                        newDiv.id = value._id
                        createElement('h2', newDiv, `${value.name}`);
                        createElement('h3', newDiv, `${value.date}`);
                        createElement('h3', newDiv, `${value.days}`);
                        let changeBtn = createElement('button', newDiv, 'Change', ['change-btn']);
                        let doneBtn = createElement('button', newDiv, 'Done', ['done-btn']);

                        changeBtn.addEventListener('click', changeVacationFunc)
                        doneBtn.addEventListener('click', doneVacationFunc)

                        localDataStorage[value._id] = {
                            name: value.name,
                            days: value.days,
                            date: value.date,
                            id: value._id,
                        }

                    })
            })
            .catch((err) => console.log(err))

            
    }

    function addNewVacationFunc(event){
        if (event){
            event.preventDefault()
        }

        let checkEmptyFields =
            Object.values(inputDomSelectors)
                .every( input => input.value != '')

        if (!checkEmptyFields){
            console.log('There is an empty field!')
            return
        }

        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                name: inputDomSelectors.name.value,
                days: inputDomSelectors.days.value,
                date: inputDomSelectors.date.value,
            })
        }

        fetch(BASE_URL,httpHeaders)
            .then(() => {
                loadAllData();
                otherDomSelectors.form.reset()
            })

    }

    function changeVacationFunc(event){
        if (event){
            event.preventDefault()
        }

        let id = this.parentNode.id
        currentIdToChange = id
        inputDomSelectors.name.value = localDataStorage[id].name
        inputDomSelectors.days.value = localDataStorage[id].days
        inputDomSelectors.date.value = localDataStorage[id].date

        this.parentNode.remove()

        otherDomSelectors.addVacationBtn.disabled = true
        otherDomSelectors.editVacationBtn.disabled = false

    }

    function uploadChangedVacation(event){
        if (event){
            event.preventDefault()
        }

        let checkEmptyFields =
            Object.values(inputDomSelectors)
                .every( input => input.value != '')

        if (!checkEmptyFields){
            console.log('There is an empty field!')
            return
        }

        let httpHeaders = {
            method: 'PUT',
            body: JSON.stringify({
                name: inputDomSelectors.name.value,
                days: inputDomSelectors.days.value,
                date: inputDomSelectors.date.value,
                _id: currentIdToChange
            })
        }

        console.log(currentIdToChange)

        fetch(`${BASE_URL}${currentIdToChange}`,httpHeaders)
            .then(() => {
                loadAllData();
                otherDomSelectors.form.reset();
                otherDomSelectors.editVacationBtn.disabled = true;
                otherDomSelectors.addVacationBtn.disabled = false;
            })
            .catch((err) => console.log(err))



    }

    function doneVacationFunc(event){
        if (event){
            event.preventDefault()
        }

        let id = this.parentNode.id
        let httpHeaders = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadAllData())
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