document.querySelector('#signupdata').addEventListener('submit', (e) => {
    e.preventDefault();

    const allinput = document.querySelectorAll('.alldata input');
    const semail = allinput[0].value;
    const sclass = allinput[1].value
    const spassword = allinput[2].value;
    const Confirmpwd = allinput[3].value;
    const gender = allinput[4].value;


    const arr = JSON.parse(localStorage.getItem('studentList')) || [];
    const studentinfo = {
        semail,sclass,spassword,Confirmpwd,gender
    };
    arr.push(studentinfo);
    console.log(arr);
    console.log(studentinfo);

    localStorage.setItem('studentList', JSON.stringify(arr));
    window.location.reload()
    show();
});

function show() {
    const studentdata = JSON.parse(localStorage.getItem('studentList'));
    let result2 = ""; // Corrected variable name to 'result2'

    studentdata.forEach((student, index) => {
        result2 +=
            `<tr>
            <th scope="row">${index + 1}</th>
           <td>${student.semail}</td>
            <td>${student.sclass}</td>
            <td>${student.spassword}</td>
            <td>${student.Confirmpwd}</td>
            <td>${student.gender}</td>
            <td>
              <button class="btn-primary" onclick="edit(${index})">Approve</button> 
              <button class="btn-primary ms-3"  onclick="trash(${index})">Reject</button>
            </td>
          </tr>`;
    });
    document.querySelector('#approvedata').innerHTML = result2;
}
show(); // Initial call to popu