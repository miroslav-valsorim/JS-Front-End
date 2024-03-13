function create(words) {
   const contentContainer = document.getElementById('content');
   let elements = words

   for (let word of words){
      let div = document.createElement('div')
      let p = document.createElement('p')
      let text = document.createTextNode(word)
      
      p.appendChild(text)
      p.style.display = 'none'
      div.appendChild(p)
      div.addEventListener('click', function(e){
         e.currentTarget.children[0].style.display = 'block'
      })

      contentContainer.appendChild(div)
   }
}