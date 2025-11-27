//  let a =setInterval(()=>{document.write("abhishek")},10000)
// console.log(a)



let btn = document.querySelector('#btn')
var vl = 0
let set
btn.addEventListener('click', () => {
    setInterval(() => {
        set = document.querySelector('#value').textContent = ++vl
    }, 1000)
})

let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', () => {
    clearInterval(set)
})
