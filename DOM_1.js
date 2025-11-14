var num = 0
function increment() {
    document.getElementById('count').textContent = ++num

}
function decrement() {
    if(num>0)
    document.getElementById('count').textContent = --num
    else{
        alert("decrement not perform")
    }

}
function reset(){
    num=0
     document.getElementById('count').textContent = num
}

