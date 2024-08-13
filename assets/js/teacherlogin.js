function teacherlogindata() {
    const facultlist = JSON.parse(localStorage.getItem('facultList'))

    const tname = document.querySelector('#tname').value
    const tpassword = document.querySelector('#tpassword').value

    const existfaculty = facultlist.find((faculty) => {
        return faculty?.tname === tname
    })
    console.log(existfaculty);

    if (tname !== "") {
        if (tname === existfaculty?.tname) {
            sessionStorage.setItem('teacherlogin', JSON.stringify(existfaculty))
            alert("login sucessfully....")
            window.location.href = 'teacherviewappoitment.html';
        } else {
            alert("Enter the correct username")
        }
    } else {
        alert("Enter the username")
    }
}

