<<<<<<< HEAD
const serviceUrl = 'http://localhost:8080'
window.onload = function () {

    fetch(`${serviceUrl}/search`)
=======
window.onload = function () {
    fetch('http://localhost:8080/search')
>>>>>>> 08f09a5 (develop-jyjeong-20211018)
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
            const tbody = document.querySelector('#employeeSearchAll')
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
<<<<<<< HEAD
        
}


=======
}

>>>>>>> 08f09a5 (develop-jyjeong-20211018)
function searchEmployee() {
    const tbody = document.querySelector('#employeeSearch')
    tbody.innerHTML = ""
    const employeeInfo = document.querySelector('#employeeInfo')
<<<<<<< HEAD
    fetch(`${serviceUrl}/search/${employeeInfo.value}`)
=======
    fetch('http://localhost:8080/search/' + employeeInfo.value)
>>>>>>> 08f09a5 (develop-jyjeong-20211018)
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

function executeNumberFormatExeption() {
<<<<<<< HEAD
    fetch(`${serviceUrl}/exception/numberformat`)
=======
    fetch('http://localhost:8080/exception/numberformat')
>>>>>>> 08f09a5 (develop-jyjeong-20211018)
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
        
    })
    .catch(err => {
        console.log(err)
    })
}

function executeNullPointExeption() {
<<<<<<< HEAD
    fetch(`${serviceUrl}/exception/nullpointer`)
=======
    fetch('http://localhost:8080/exception/nullpointer')
>>>>>>> 08f09a5 (develop-jyjeong-20211018)
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
        
    })
    .catch(err => {
        console.log(err)
    })
<<<<<<< HEAD
}

function insertEmployee() {
    const insertEmployeeId = document.querySelector("#insertEmployeeId").value
    const insertEmployeeName = document.querySelector("#insertEmployeeName").value

    fetch(`${serviceUrl}/insertEmployee`,{
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

    fetch(`${serviceUrl}/updateEmployee/${updateEmployeeId}`,{
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

const removeButton = document.querySelector("#removeEmployeeButton");
removeButton.addEventListener("click", () => {
    const employeeNumber = document.querySelector('#removeEmployeeInput').value
    fetch(`${serviceUrl}/remove/${employeeNumber}`,
        { method: 'POST' })
        .then(response => {
            if (response.status == 200) {
                //통신 성공
                console.log("통신 성공");
            } else {
                //통신 실패
                alert(`사원번호 ${employeeNumber}의 제거에 실패했습니다.`);
                console.log("통신 실패");
            }
        })
        .then(() => {
           // TODO: 리스트 재갱신
           alert(`사원번호 ${employeeNumber}의 제거를 수행헀습니다.`);
        })
        .catch(err => {
            console.log(err)
        })
});
=======
}
>>>>>>> 08f09a5 (develop-jyjeong-20211018)
