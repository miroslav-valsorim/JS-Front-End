function lockedProfile() {
   let buttons = document.querySelectorAll('.profile button')

   Array.from(buttons).forEach(
    button => button.addEventListener('click', onClick))

    function onClick(event){
        let profile = event.target.parentElement
        let children = Array.from(profile.children)
        let isActive = profile.querySelector('input[value="unlock"]').checked;
        let btn = this

        if (isActive && btn.textContent == 'Show more'){
            btn.textContent = 'Hide it'
            children[9].style.display = 'block'
        }else if(isActive && btn.textContent == 'Hide it'){
            btn.textContent = 'Show more'
            children[9].style.display = 'none'
        }
        
    }
}