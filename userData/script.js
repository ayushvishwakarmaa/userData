const tableBody = document.getElementById("tableBody")

const selectStatus = document.getElementById("selectStatus")
const searchTableData = document.getElementById("searchTableData")

const userList = [

    {
        "id": 1,
        "username": "john_smith",
        "name": "John Smith",
        "status": "active",
    },
    {
        "id": 2,
        "username": "alice",
        "name": "Alice",
        "status": "blocked",
    },
    {
        "id": 3,
        "username": "charlie",
        "name": "Charlie",
        "status": "active",
    },
    {
        "id": 4,
        "username": "david",
        "name": "David",
        "status": "active",
    },
    {
        "id": 5,
        "username": "emma",
        "name": "Emma",
        "status": "blocked",
    },
    {
        "id": 6,
        "username": "frank_smith",
        "name": "Frank Smith",
        "status": "active",
    },
    {
        "id": 7,
        "username": "grace",
        "name": "Grace",
        "status": "blocked",
    },
    {
        "id": 8,
        "username": "henry",
        "name": "Henry",
        "status": "active",
    },
    {
        "id": 9,
        "username": "ioy",
        "name": "Ivy",
        "status": "active",
    },
    {
        "id": 10,
        "username": "emma_jack",
        "name": "Emma Jack",
        "status": "blocked",
    },
]

function renderUserList(data){
    tableBody.innerHTML = ""
    data.forEach(function(user) {
        tableBody.innerHTML +=  `<tr>
        <th scope="row">${user.id}</th>
        <td>${user.username}</td>
        <td>${user.name}</td>
        <td>${user.status}</td>
       </tr>`
    });
}
renderUserList(userList)
selectStatus.addEventListener("change", function(e){
    const value =e.target.value
    const filterActivity = userList.filter(function(user){
        return user.status === value
    })
    if(value == "active" || value == "blocked"){
        renderUserList(filterActivity)
    }
    else if(value == "assending"){
        const sortAsc = userList.sort(function (a, b){
            return a.id - b.id
        })
        renderUserList(sortAsc)
    }
    else if(value == "descending"){
        const sortDesc = userList.sort(function(a,b){
            return b.id - a.id
        })
        renderUserList(sortDesc)
    }
    else if(value == "atoz"){
        const atoz = userList.sort(function(a,b){
            return a.username.localeCompare(b.username)
        })
        renderUserList(atoz)
    }
    else if(value == "ztoa"){
        const zToa = userList.sort(function(a,b){
            return b.username.localeCompare(a.username)
        })
        renderUserList(zToa)
    }
    
    else{
        renderUserList(userList)
    }
})

searchTableData.addEventListener('change',function(e){
    const value = e.target.value
    const filterActivity = userList.filter(function(user){
        return user.username.includes(value) || user.name.includes(value)
    })
if(value !== ""){
    renderUserList(filterActivity)
}
   else{
    renderUserList(userList)
   }
})
