window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0
    let inputFieldsDom = {
        genre: document.getElementById('genre'),
        songName: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    }

    let otherDomSelector = {
        addButton : document.getElementById('add-btn'),
        form : document.querySelector('#append-song > div > div > form'),
        allHitsContainer : document.querySelector('.all-hits-container'),
        savedHitsContainer : document.querySelector('.saved-container'),
        likes : document.querySelector('.likes > p')
    }

    otherDomSelector.addButton.addEventListener('click', addSongToFirstContainer)
    
    
    function addSongToFirstContainer(event){
        if (event){
            event.preventDefault()
        }

        let emptyField = Object.values(inputFieldsDom)
            .every((input) => input.value !== '')

        if (!emptyField){
            console.log('empty fields')
            return
        }

        let div = createElement('div', otherDomSelector.allHitsContainer,'', ['hits-info'])
        let image = createElement('img', div, '',null,null,{src: './static/img/img.png'})
        let h2Genre = createElement('h2', div, `Genre: ${inputFieldsDom.genre.value}`)
        let name = createElement('h2', div, `Name: ${inputFieldsDom.songName.value}`)
        let songAuthor = createElement('h2', div, `Author: ${inputFieldsDom.author.value}`)
        let songDate = createElement('h3', div, `Date: ${inputFieldsDom.date.value}`)
        let saveButton = createElement('button', div, 'Save song', ['save-btn'])
        let likeButton = createElement('button', div, 'Like song', ['like-btn'])
        let deleteButton = createElement('button', div, 'Delete', ['delete-btn'])

        saveButton.addEventListener('click', saveSongFunc)
        likeButton.addEventListener('click', likeButtonFunc)
        deleteButton.addEventListener('click', deleteSongFunc)

        // otherDomSelector.form.reset()

        clearAllInputs()
    }

    function clearAllInputs(){
        Object.values(inputFieldsDom)
            .forEach(e => e.value = '')
    }

    function saveSongFunc(){
        let container = this.parentNode
        otherDomSelector.savedHitsContainer.appendChild(container)

        document.querySelector('saved-container .save-btn').remove()
        document.querySelector('.saved-container .like-btn').remove()   
    }

    function likeButtonFunc(){
        this.setAttribute('disabled', true)
        totalLikes ++;
        otherDomSelector.likes.textContent = `Total Likes: ${totalLikes}`
    }

    function deleteSongFunc(){
        let deleteContainer = this.parentNode
        deleteContainer.remove()
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