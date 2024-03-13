function colorize() {
    let everySecond = document.querySelectorAll('tr:nth-child(even)')
    everySecond.forEach(td => td.style.backgroundColor = 'teal')
}