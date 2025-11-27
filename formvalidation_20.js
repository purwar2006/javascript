function handle() {
    let password = document.querySelector('#password').value
    let cpassword = document.querySelector('#cpassword').value

    if (!(password.match(/[¬!"£$%%^&*(_+-@)]/))) {
        alert("enter atleast one special character")
        document.querySelector('#password').focus()
        return false
    }
    else if (password != cpassword) {
        alert("both field not match")
        document.querySelector('#cpassword').focus()
        return false
    }
}