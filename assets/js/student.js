// document.querySelector('#signupdata').addEventListener('submit', (e) => {
//   e.preventDefault();

//   const allinput = document.querySelectorAll('.inputdata input');
//   const sname = allinput[0].value;
//   const semail = allinput[1].value;

//   const arr = JSON.parse(localStorage.getItem('studentList')) || [];
//   const studentinfo = { sname, semail };
//   arr.push(studentinfo);

//   localStorage.setItem('studentList', JSON.stringify(arr));
//   show();
// });

// function show() {
//   const studentlist = JSON.parse(localStorage.getItem('studentList'));
//   let result2 = ""; // Corrected variable name to 'result2'
  
//   if (studentlist) {
//     studentlist.forEach((student, index) => {
//       result2 +=
//         `<tr>
//             <th scope="row">${index + 1}</th>
//             <td>${student.sname}</td>
//             <td>${student.semail}</td>
//             <td>
//               <button class="btn-primary" onclick="edit(${index})">Approve</button> 
//               <button class="btn-primary ms-3"  onclick="trash(${index})">Reject</button>
//             </td>
//           </tr>`;
//     });
//   }

//   document.querySelector('#approvedata').innerHTML = result2;
// }

// show(); // Initial call to popu

// JavaScript for expanding/collapsing sidebar on smaller screens
const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

