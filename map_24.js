// let student = [
//     {
//         stname: "abhishek",
//         stage: 20
//     },
//     {
//         stname: "sgr",
//         stage: 65
//     },
//     {
//         stname: "aamit",
//         stage: 95
//     }
// ]
// console.log(student)



// let new_array = student.map((e) => { return e.stname })
// console.log(new_array);


// console.log(student.filter((e) => { return e.stage >= 20 && e.stage <= 65 }))



let store = [
    {
        store_name: "store_1",
        store_location: "mpnagr",
        store_revenue: "3LPA"
    },
    {
        store_name: "store_2",
        store_location: "indp",
        store_revenue: 10
    },
    {
        store_name: "store_3",
        store_location: "vishal",
        store_revenue: "5LPA"
    },
    {
        store_name: "store_4",
        store_location: "indp",
        store_revenue: 6
    },
    {
        store_name: "store_5",
        store_location: "mpnagr",
        store_revenue: "16LPA"
    }


]

console.log(store.filter((e) => {return e.store_location =="indp" && e.store_revenue>=10 }))


