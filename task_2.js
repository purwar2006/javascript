function handle() {
    let age = document.querySelector('#age').value
    let contact = document.querySelector('#contact').value
    if (age =="" || isNaN(age)) {
        alert("Enter valid age")
        document.querySelector('#age').focus()
        return false
    }
    else if (age.length <= 1 || age.length >= 3) {
        alert("age not accepted")
        document.querySelector('#age').focus()
        return false
    }
    else if (contact = "" || isNaN(contact)) {
        alert("Enter valid number")
        document.querySelector('#contact').focus()
        return false
    }
    else if (contact.length < 10 || contact.length > 10) {
        alert("contact must be ten digit accepted")
        document.querySelector('#contact').focus()
        return false
    }
}
