let today = new Date()
console.log(today)

console.log(today.getFullYear())
console.log(today.getMonth()+1)
console.log(today.getDate())
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())



 setInterval(()=>{
    let time=new Date
    let currenttime=time.toLocaleTimeString()
    document.querySelector('#time').innerHTML = currenttime
      document.querySelector('#time').style.color="red"
},1000)



