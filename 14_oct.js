// JS

// let b = parseInt(prompt("enter number : "))
// for (let a = 1 ; a <= 10 ; a++) {
//     console.log(b*a)
// }




// let sum = 0
// for (let c = 1 ; c<=15; c++){
//     sum=sum+c
// }
// console.log(sum)



// for (let d = 20 ; d>=1; d--){
// if (d%2==0){
//     console.log(d*d)
// }
// }





let a = parseInt(prompt("enter number : "))
if (a >= 1 && a <= 10) {
    for (let b = 1; b <= a; b++) {
        console.log(b)
    }
}
else if (a > 10 && a <= 20) {
    for (let c = 20; c >= 1; c--) {
        console.log(c)
    }
}
else {
    if (a < 0 && a > 20) {
        console.log("print valid number range between 1 to 20")
    }
}






let A = parseInt(prompt("enter the first number : "))
let B = parseInt(prompt("enter the second number : "))

if (B % 3 == 0) {
    for (let C = 10; C >= 1; C--) {
        if (C % 2 != 0) {
            console.log(C * C)
        }
    }
}
else {
    let sum = 1
    for (let D = 1; D <= 5; D++) {
        sum = sum *D
    }
}
console.log(sum + A)





