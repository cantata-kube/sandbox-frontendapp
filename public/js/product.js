window.onload = function () {

    fetch('http://localhost:8080/selectAllEmployee')
        .then(response => {
            if (response.status == 200) {
                //통신 성공
                console.log("통신 성공");
                return response.json();
            } else {
                //통신 실패
                console.log("통신 실패");
            }
        })
        .then(jsonData => {
            const tbody = document.querySelector("tbody")
            
            for(let employee of jsonData) {
                const tr = document.createElement("tr");
                const td_employee_id = document.createElement("td");
                const td_employee_name = document.createElement("td");
                
                td_employee_id.textContent = employee.employeeId
                td_employee_name.textContent = employee.employeeName

                tr.appendChild(td_employee_id)
                tr.appendChild(td_employee_name)

                tbody.appendChild(tr)
            }
        })
        .catch(err => {
            console.log(err)
        })

}

function insertEmployee() {
    const insertEmployeeId = document.querySelector("#insertEmployeeId").value
    const insertEmployeeName = document.querySelector("#insertEmployeeName").value

    fetch(`http://localhost:8080/insertEmployee`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            employeeId: insertEmployeeId,
            employeeName: insertEmployeeName
        }),

    })
        .then(response => {
            if (response.status == 200) {
                //통신 성공
                console.log("등록 성공");
                return response.json();
            } else {
                //통신 실패
                console.log("등록 실패");
            }
        })
        .then(jsonData => {
            console.log(jsonData);
        })
        .catch(err => {
            console.log(err)
        })    
}

function updateEmployee() {
    const updateEmployeeId = document.querySelector("#updateEmployeeId").value
    const updateEmployeeName = document.querySelector("#updateEmployeeName").value

    fetch(`http://localhost:8080/updateEmployee/${updateEmployeeId}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            employeeName: updateEmployeeName
        }),

    })
        .then(response => {
            if (response.status == 200) {
                //통신 성공
                console.log("업데이트 성공");
                return response.json();
            } else {
                //통신 실패
                console.log("업데이트 실패");
            }
        })
        .then(jsonData => {
            console.log(jsonData);
        })
        .catch(err => {
            console.log(err)
        })    
}