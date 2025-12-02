async function accessdata() {
    let apidata = await fetch('https://jsonplaceholder.typicode.com/albums')
    let resdata = await apidata.json()
    console.log(resdata)

    // for acceess particular data from array of abject

    let access = resdata.map((e) => { return e.id })
    console.log(access)

}
accessdata()





