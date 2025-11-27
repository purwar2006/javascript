let store = {
    add: function () {
        console.log(9 + 4)
    },
    sub: function (a, b) {
        return a - b
    }
}
console.log(store.sub(9, 3))
store.add()


// use spread operator


let person = {
    name: "abhishek", city: "bpl"
}
let salary = {
    ...person,
    monthly: 30000,
    yearly: "3.6lpa"
}
console.log(salary)









// destructuring in object



let { stname, stcity, stdate } = {
    stname: "abhishek", stcity: "bpl", stdate: 25
}
console.log(stname)

// add multiple data of person in object
// use array of object



let student = [
    {
        stname: "abhishek",
        stage: 20
    },
    {
        stname: "sgr",
        stage: 20
    },
    {
        stname: "aamit",
        stage: 20
    }
]
console.log(student)


student.push({
    
        stname:"karan",
        stage:"45"
}
)
student.pop({})
// do it student.splice()