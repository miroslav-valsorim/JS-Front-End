function solve(password){

    let passcheck = true

    if (password.length < 6 && password.length <= 10){
        console.log("Password must be between 6 and 10 characters")
        passcheck = false
    }

    let check = /^[A-Za-z0-9]*$/.test(password)
    if (check != true){
        console.log("Password must consist only of letters and digits")
        passcheck = false
    }

    let count = password.replace(/[^0-9]/g,"").length;
    if (count < 3){
        console.log("Password must have at least 2 digits")
        passcheck = false
    }

    if (passcheck === true){
        console.log("Password is valid")
    }
    
}


solve('Pa$s$s')