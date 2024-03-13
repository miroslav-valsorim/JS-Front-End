function getInfo() {
    const domainServer = "http://localhost:3030/jsonstore/bus/businfo/"
    const busStopID = document.getElementById('stopId').value
    const fullURL = domainServer + busStopID

    const busStopName = document.getElementById('stopName')
    const busStops = document.getElementById('buses')

    busStopName.textContent = 'Loading...'
    busStops.replaceChildren()

    fetch(fullURL)
        .then((res) => res.json())
        .then(data => {
            console.log(data.name)
            console.log(data.buses)
            busStopName.textContent = data.name
            Object.entries(data.buses).forEach( b => {
                const li = document.createElement('li');
                li.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`
                busStops.appendChild(li);
            } )
        })
        .catch(err =>
            busStopName.textContent = 'Error')

}