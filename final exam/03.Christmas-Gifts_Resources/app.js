function solve(){
    const inputDomSelectors = {
        present: document.getElementById('gift'),
        for: document.getElementById('for'),
        price: document.getElementById('price'),
    }

    const otherDomSelectors = {
        addBtn: document.getElementById('add-present'),
        editBtn: document.getElementById('edit-present'),
        loadAllPresents: document.getElementById('load-presents'),
        form: document.querySelector('#form > form'),
        giftList: document.getElementById('gift-list'),
    }

    otherDomSelectors.addBtn.addEventListener('click', addNewPresent)
    otherDomSelectors.editBtn.addEventListener('click', editPresent)
    otherDomSelectors.loadAllPresents.addEventListener('click', loadAllDataInfo)

    const BASE_URL = 'http://localhost:3030/jsonstore/gifts/'
    let localDataInfo = {}
    let curredIdNeeded = ''

    function loadAllDataInfo(event){
        if (event){
            event.preventDefault()
        }

        otherDomSelectors.giftList.innerHTML = ''

        fetch(BASE_URL)
            .then((data) => data.json())
            .then((data) => {
                Object.values(data)
                    .forEach(info => {
                        let newDiv = createElement('div', otherDomSelectors.giftList,'', ['gift-sock'])
                        newDiv.id = info._id
                        let secondDiv = createElement('div', newDiv, '',['content'])
                        createElement('p', secondDiv, `${info.gift}`)
                        createElement('p', secondDiv, `${info.for}`)
                        createElement('p', secondDiv, `${info.price}`)
                        let buttonsDiv = createElement('div', newDiv, '', ['buttons-container'])
                        let changeBtn = createElement('button', buttonsDiv, 'Change', ['change-btn'])
                        let deleteBtn = createElement('button', buttonsDiv, 'Delete', ['delete-btn'])

                        changeBtn.addEventListener('click', editPresentFirst)
                        deleteBtn.addEventListener('click', deletePresent)

                        localDataInfo[info._id] = {
                            gift: info.gift,
                            for: info.for,
                            price: info.price,
                            id: info._id,
                        }

                    })
            })
            .catch((err) => console.log(err))
    }

    function addNewPresent(event){
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
                gift: inputDomSelectors.present.value,
                for: inputDomSelectors.for.value,
                price: inputDomSelectors.price.value,
            })
        }

        fetch(BASE_URL, httpHeaders)
        .then(() => {
            loadAllDataInfo();
            Object.values(inputDomSelectors)
                .forEach(input => input.value = '')
        })
        .catch((err) => console.log(err))
    }

    function editPresentFirst(event){
        if(event){
            event.preventDefault()
        }

        let id = this.parentNode.parentNode.id
        curredIdNeeded = id
        
        inputDomSelectors.present.value = localDataInfo[id].gift
        inputDomSelectors.for.value = localDataInfo[id].for
        inputDomSelectors.price.value = localDataInfo[id].price

        otherDomSelectors.addBtn.disabled = true
        otherDomSelectors.editBtn.disabled = false

        this.parentNode.parentNode.remove()
    }

    function editPresent(event){
        if (event){
            event.preventDefault()
        }

        let httpHeaders = {
            method: 'PUT',
            body: JSON.stringify({
                gift: inputDomSelectors.present.value,
                for: inputDomSelectors.for.value,
                price: inputDomSelectors.price.value,
                _id: curredIdNeeded
            })
        }

        fetch(`${BASE_URL}${curredIdNeeded}`,httpHeaders)
            .then(() => {
                loadAllDataInfo(),
                otherDomSelectors.addBtn.disabled = false
                otherDomSelectors.editBtn.disabled = true
                Object.values(inputDomSelectors)
                    .forEach( input => input.value = '')
            })
            .catch((err) => console.log(err))
    }

    function deletePresent(event){
        if(event){
            event.preventDefault()
        }

        id = this.parentNode.parentNode.id
        
        let httpHeaders = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadAllDataInfo())
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