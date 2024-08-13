function studentlogin() {
    const studentdata = JSON.parse(localStorage.getItem('studentList'));

    const uemail = document.getElementById('uemail').value
    const upassword = document.getElementById('upassword').value


    const existstudent = studentdata.find((student) => {
        return student?.semail === uemail
    })
    console.log(existstudent);

    if (uemail !== "" && upassword !== "") {
        if (uemail === existstudent?.semail && upassword === existstudent?.spassword) {
            // existstudent.status = 1;
            // localStorage.setItem('studentList', JSON.stringify(studentdata))
            sessionStorage.setItem('userlogin',JSON.stringify(existstudent))
            alert("login sucessfully")
            window.location.href = 'studentdashboard.html';

        } else {
            alert("Enter the correct username aand password")
        }
    } else {
        alert("Enter the username and password")
    }
}


