function solve(){

    const inputDomSelectors = {
        location: document.getElementById('location'),
        temperature: document.getElementById('temperature'),
        date: document.getElementById('date'),
    }

    const otherDomSelectors = {
        form: document.querySelector('#form > form'),
        addBtn: document.getElementById('add-weather'),
        editBtn: document.getElementById('edit-weather'),
        loadBtn: document.getElementById('load-history'),
        weatherContainer: document.getElementById('list')
    }

    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    let localDataInfo = {}
    let curredIdNeeded = ''

    otherDomSelectors.loadBtn.addEventListener('click', loadAllDataFromServer)
    otherDomSelectors.editBtn.addEventListener('click', editWeather)
    otherDomSelectors.addBtn.addEventListener('click', addNewWeather)

    function loadAllDataFromServer(event){
        if (event){
            event.preventDefault()
        }

        otherDomSelectors.weatherContainer.innerHTML = ''

        fetch(BASE_URL)
            .then((data) => data.json())
            .then( (data) => {
                Object.values(data)
                    .forEach(info => {
                        let newDiv = createElement('div', otherDomSelectors.weatherContainer, '',['container'])
                        newDiv.id = info._id
                        createElement('h2', newDiv, `${info.location}`)
                        createElement('h3', newDiv, `${info.date}`)
                        createElement('h3', newDiv, `${info.temperature}`, null, 'celsius')
                        let buttonsDiv = createElement('div', newDiv, '', ['buttons-container'])
                        let changeBtn = createElement('button', buttonsDiv, 'Change', ['change-btn'])
                        let deleteBtn = createElement('button', buttonsDiv, 'Delete', ['delete-btn'])

                        changeBtn.addEventListener('click', changeWeather)
                        deleteBtn.addEventListener('click', deleteWeather)

                        localDataInfo[info._id] = {
                            location: info.location,
                            temperature: info.temperature,
                            date: info.date,
                            id: info._id,
                        }
                    })

            })
            .catch((err) => console.log(err))
    }

    function addNewWeather(event){
        if (event){
            event.preventDefault()
        }

        let checkIfEmpty = Object.values(inputDomSelectors).every(input => input.value != '')
        if (!checkIfEmpty){
            console.log('some field is empty')
            return
        }

        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                location: inputDomSelectors.location.value,
                temperature: inputDomSelectors.temperature.value,
                date: inputDomSelectors.date.value,
            })
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadAllDataFromServer();
                Object.values(inputDomSelectors)
                    .forEach(input => input.value = '')
            })
            .catch((err) => console.log(err))
    }

    function changeWeather(event){
        if (event){
            event.preventDefault()
        }

        let id = this.parentNode.parentNode.id
        curredIdNeeded = id
        // console.log(id)
        inputDomSelectors.location.value = localDataInfo[id].location
        inputDomSelectors.temperature.value = localDataInfo[id].temperature
        inputDomSelectors.date.value = localDataInfo[id].date

        otherDomSelectors.addBtn.disabled = true
        otherDomSelectors.editBtn.disabled = false

        this.parentNode.parentNode.remove()

    }

    function editWeather(event){
        if (event){
            event.preventDefault()
        }

        let httpHeaders = {
            method: 'PUT',
            body: JSON.stringify({
                location: inputDomSelectors.location.value,
                temperature: inputDomSelectors.temperature.value,
                date: inputDomSelectors.date.value,
                _id: curredIdNeeded
            })
        }

        fetch(`${BASE_URL}${curredIdNeeded}`,httpHeaders)
            .then(() => {
                loadAllDataFromServer(),
                otherDomSelectors.addBtn.disabled = false
                otherDomSelectors.editBtn.disabled = true
                Object.values(inputDomSelectors)
                    .forEach( input => input.value = '')
            })
            .catch((err) => console.log(err))
    }

    function deleteWeather(event){
        if (event){
            event.preventDefault()
        }

        id = this.parentNode.parentNode.id
        
        let httpHeaders = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadAllDataFromServer())
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