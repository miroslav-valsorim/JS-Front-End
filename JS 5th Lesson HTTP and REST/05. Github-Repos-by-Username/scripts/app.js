function loadRepos() {
	const BASE_URL = 'https://api.github.com/search/repositories?q=user:'
	const userName = document.getElementById('username').value
	const nameWeLookFor = BASE_URL + userName
	// https://api.github.com/search/repositories?q=user:k1r1L

	const ul = document.getElementById('repos')
	
	fetch(`${nameWeLookFor}`)
	.then((res) => res.json())
	.then((data) => {
		data.items.forEach(element => {
			const newLi = document.createElement('li')
			const newA = document.createElement('a')
			newA.textContent = element.full_name
			newA.href = element.full_name
			ul.appendChild(newLi)
			newLi.appendChild(newA)
			console.log(element)
		});
		})
	.catch((err) => {
        console.log(err)
    })
}