let person = {
    name:"abhishek",
age : 19,
city:"bhopal"
}
// for add
person.email="abhishekpurwar@gmail.com"
// for upadte
person.age=90
console.log(person.name)
console.log(person)



// let emp = {emp_name:"",emp_age:"",emp_contact:""}
// emp.emp_name=prompt("enter name")
// emp.emp_age=prompt(parseInt("enter age"))
// emp.emp_contact=prompt("enter contact")



// console.log(emp)





// for values
for(let k in person){
    console.log(person[k])
}


// for keys
for(let k in person){
    console.log(k)
}



// // for access all keys
// console.log(Object.keys(person))
// // for access only one key
// console.log(Object.keys(person[0]))
// // for access all values
// console.log(Object.values(person))
// // for access only one value
// console.log(Object.values(person[0]))


let store = {
    stname:"kirana",
    week_income:[52,582,0,88,55,88,589],
    frachisy:{
first:"mpnagar",
second:"indp"
    }
}
console.log(store.week_income[1])
console.log(store.frachisy.second)
