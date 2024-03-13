function deleteByEmail() {
    let input = document.querySelector('body > label > input[type=text]').value;
    let secondColumn = document.querySelectorAll('#customers tr td:nth-child(2)');

    for (let td of secondColumn){
        if (td.textContent == input){
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = 'Deleted';
            document.querySelector('body > label > input[type=text]').value = ''
            return
        }

        document.getElementById('result').textContent = 'Not found'
    }

    console.log(secondColumn)
}