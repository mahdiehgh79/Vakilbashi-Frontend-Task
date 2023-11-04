fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
    return data.json()
}).then((objectData) => {
    let tableData = ""
    objectData.map((values) => {
        tableData += `
            <tr>
              <td>${values.id}</td>
              <td>${values.name}</td>
              <td>${values.address.street},${values.address.city}</td>
              <td>${values.email}</td>
              <td>${values.phone}</td>
              <td>${values.website}</td>
            </tr>
        `
    })
    document.getElementById("table-body").innerHTML=tableData


})
const getcellvalue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent
const comparer = (idx, asc) => (a, b) => ((v1,v2) =>
     v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1-v2 : v1.toString().localeCompare(v2)
     )(getcellvalue(asc ? a : b, inx), getcellvalue(asc ? b : a, inx))
document.querySelectorAll("th").forEach(th => th.addEventListener("click", (() => {
    const table = th.closest("table")
    // const tbody = table.querySelector("tbody")
    Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr))
})))