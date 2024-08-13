
// admin data
document.querySelector('#saveData').addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e);

  const allinput = document.querySelectorAll('.createData input')
  console.log(allinput[0]);
  console.log(allinput[1]);
  console.log(allinput[2]);

  const tname = allinput[0].value
  const dname = allinput[1].value
  const sname = allinput[2].value

  const arr = JSON.parse(localStorage.getItem('facultList')) || [];
  const facultyinfo = {
    tname, dname, sname
  }
  arr.push(facultyinfo)
  console.log(arr);
  console.log(facultyinfo);
  localStorage.setItem('facultList', JSON.stringify(arr))
  showAdmin()
})

function showAdmin() {
  const facultlist = JSON.parse(localStorage.getItem('facultList'))
  let result = " ";
  facultlist.forEach((element, index) => {
    result +=
      `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element.tname}</td>
                <td>${element.dname}</td>
                <td>${element.sname}</td>
                <td><button class="btn-primary" onclick="edit(${index})">Edit</button> 
                <button class="btn-primary ms-3"  onclick="trash(${index})">Delete</button> </td>
            </tr>
    `
  });

  document.querySelector('#tabledata').innerHTML = result
}
showAdmin()

function trash(id) {
  if (confirm("Do you want to delete?")) {
    const facultlist = JSON.parse(localStorage.getItem('facultList'))
    facultlist.splice(id, 1)
    localStorage.setItem('facultList', JSON.stringify(facultlist))
    showAdmin()
  }
}

function edit(id) {
  document.querySelector('#add').style.display = "none"
  document.querySelector('#update').style.display = "block"

  const facultlist = JSON.parse(localStorage.getItem('facultList'))
  console.log(facultlist[id]);

  const singleinfo = facultlist[id]
  const allinput = document.querySelectorAll('.createData input')
  allinput[0].value = singleinfo.tname
  allinput[1].value = singleinfo.dname
  allinput[2].value = singleinfo.sname

  document.querySelector('#update').addEventListener('click', () => {

    const allinput = document.querySelectorAll('.createData input')
    const tname = allinput[0].value
    const dname = allinput[1].value
    const sname = allinput[2].value
    const newinfo = {
      tname, dname, sname
    }
    console.log(newinfo);
    facultlist.splice(id, 1, newinfo)
    localStorage.setItem('facultList', JSON.stringify(facultlist))
    showAdmin()
  })

}
// Function to display student list
// function show() {
//   const studentlist = JSON.parse(localStorage.getItem('studentList')) || [];
//   console.log(studentlist)
//   let stdResult = "";

//   studentlist.forEach((student, index) => {
//     stdResult +=
//       `<tr>
//           <th scope="row">${index + 1}</th>
//           <td>${student.sname}</td>
//           <td>${student.semail}</td>
//           <td>
//             <button class="btn-primary" onclick="edit(${index})">Approve</button> 
//             <button class="btn-primary ms-3" onclick="studentrej(${index})">Reject</button>
//           </td>
//         </tr>`;
//   });

//   // Update HTML content of table
//   document.querySelector('#approvedata').innerHTML = stdResult;
// }
// show();
