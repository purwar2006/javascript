//API
async function Accessdata() {
    let data = await fetch('https://jsonplaceholder.typicode.com/photos')
    let res = await data.json()
    let frmdata = res.filter((e) => `
    
    <tr>
     <td> ${e.id} </td>
     <td> ${e.title} </td>
     <td> <img src=${e.thumbnailUrl} > </td>
    </tr>

    `).join('')

    document.querySelector('#shw').innerHTML = frmdata
}

Accessdata()