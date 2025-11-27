function validate() {
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let number = document.querySelector('#number').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    if (name == "") {
        alert("fill name first")
        document.querySelector('#name').focus()
        return false
    }
    else if (age == "") {
        alert("fill age first")
        return false
    }
    else if (number == "") {
        alert("fill name first")
        return false


    }else if (email == "") {
        alert("fill name first")
        return false
    }else if (password == "") {
        alert("fill name first")
        return false
    }


   else if (isNaN(age)) {
        alert("fill age in integer form")
           document.querySelector('#age').focus()
        return false
    }

    else if (!(email.includes('@gamil.com'))){
           alert("fill valid eamil")
           document.querySelector('#email').focus()
        return false
    }

}