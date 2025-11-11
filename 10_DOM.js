let head = document.getElementsByTagName('h1')
// return nodelist in form of array
console.log(head)
head[2].textContent="abhishek"


let list = document.getElementsByClassName('node')
// return nodelist in form of array
console.log(list)
list[2].textContent="sharma"


let coed = document.getElementById('coe')
console.log(coed)
coed.innerHTML="<i>abhishek purwar</i>"


coed.style.backgroundColor="cyan"
coed.style.padding="10px"


coed.style.cssText="background-color:red;color:white;padding:20px"



