function solve() {
    const departButton = document.getElementById('depart')
    const arriveButton = document.getElementById('arrive')
    const infoDisplay = document.getElementById('info')
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/'

    let nextStop = 'depot'
    let stopName = ''

    function depart() {

        fetch(BASE_URL+nextStop)
            .then((res) => res.json())
            .then( data => {
                nextStop = data.next
                stopName = data.name
                infoDisplay.textContent = `Next stop ${stopName}`
                departButton.disabled = true
                arriveButton.disabled = false
            })
            .catch(err => {
                infoDisplay.textContent = 'Error'
                departButton.disabled = true
                arriveButton.disabled = true
            })
    }

    async function arrive() {
        infoDisplay.textContent = `Arrived at ${stopName}`
        departButton.disabled = false
        arriveButton.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();