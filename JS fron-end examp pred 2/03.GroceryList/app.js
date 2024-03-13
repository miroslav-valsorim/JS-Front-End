function attachEvents(){

    let inputDomFields = {
        productName: document.getElementById('product'),
        productCount: document.getElementById('count'),
        productPrice: document.getElementById('price'),
    }

    let formButtons = {
        addProduct: document.getElementById('add-product'),
        updateProduct: document.getElementById('update-product'),
        loadAllProducts: document.getElementById('load-product'),
    }

    let otherDomSelectors = {
        tbody: document.getElementById('tbody'),
        form: document.querySelector('.list')
    }

    let BASE_URL = 'http://localhost:3030/jsonstore/grocery/'

    let localDataInfo = {}

    formButtons.loadAllProducts.addEventListener('click', loadAllProductsInfo)
    formButtons.updateProduct.addEventListener('click', updateProductButtonMain)
    formButtons.addProduct.addEventListener('click',addNewProduct)

    function loadAllProductsInfo(event){
        if (event){
            event.preventDefault()
        }

        otherDomSelectors.tbody.innerHTML = ''

        fetch(BASE_URL)
            .then((data) => data.json())
            .then(data => {
                Object.values(data)
                    .forEach(e => {
                        const newTr = createElement('tr',otherDomSelectors.tbody);
                        newTr.id = e._id
                        const firstTd = createElement('td', newTr, `${e.product}`, ['name']);
                        const secondTd = createElement('td', newTr, `${e.count}`, ['count-product']);
                        const thirdTd = createElement('td', newTr, `${e.price}`, ['product-pric']);
                        const forthTd = createElement('td', newTr, '',['btn'])
                        const updateBtn = createElement('button', forthTd, 'Update', ['update'])
                        const deleteBtn = createElement('button', forthTd, 'Delete', ['delete'])
                        updateBtn.addEventListener('click', updateInfo)
                        deleteBtn.addEventListener('click', deleteInfo)
                        localDataInfo[e._id] = {
                            product: e.product,
                            count: e.count,
                            price: e.price                    
                        }
                    })
                // console.log(localDataInfo)
            })
            .catch((err) => console.log(err))

    }

    function updateInfo(){
        id = this.parentNode.parentNode.id
        formButtons.addProduct.disabled = true
        formButtons.updateProduct.disabled = false
        inputDomFields.productName.value = localDataInfo[id].product
        inputDomFields.productCount.value = localDataInfo[id].count
        inputDomFields.productPrice.value = localDataInfo[id].price        
    }

    function updateProductButtonMain(event){
        if (event){
            event.preventDefault()
        }

        httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({
                product: inputDomFields.productName.value,
                count: inputDomFields.productCount.value,
                price: inputDomFields.productPrice.value
            })
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                loadAllProductsInfo();
                otherDomSelectors.form.reset()
                formButtons.addProduct.disabled = false
                formButtons.updateProduct.disabled = true
            })
            .catch((err) => console.log(err))
    }

    function addNewProduct(event){
        if (event){
            event.preventDefault()
        }

        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                product: inputDomFields.productName.value,
                count: inputDomFields.productCount.value,
                price: inputDomFields.productPrice.value
            })
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadAllProductsInfo();
                otherDomSelectors.form.reset()
            })
            .catch((err) => console.log(err))
    }
    function deleteInfo(){
        id = this.parentNode.parentNode.id
        console.log(id)
        let httpHeaders = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                loadAllProductsInfo()
            })
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

attachEvents()