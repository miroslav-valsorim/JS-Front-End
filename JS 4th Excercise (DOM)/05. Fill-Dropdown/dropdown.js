function addItem() {
    const textInput = document.getElementById('newItemText').value;
    const valueInput = document.getElementById('newItemValue').value;
    const menuScroll = document.getElementById('menu');

    let opt = document.createElement('option');
    opt.text = textInput;
    opt.value = valueInput;

    if (textInput != '' && valueInput != ''){
        menuScroll.appendChild(opt)
    }

    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''
}