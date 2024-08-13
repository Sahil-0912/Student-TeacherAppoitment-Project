document.querySelector('#AppointMentdata').addEventListener('submit',(e) => {
    e.preventDefault()
    console.log(e);

    const teacherlist = document.querySelector('#teacherlist').value
    const Purpose = document.querySelector('#Purpose').value
    const allinput = document.querySelectorAll('.createdata input')
    console.log(allinput[0]);
    console.log(allinput[1]);
    console.log(allinput[2]);

    const date = allinput[0].value
    const timefrom = allinput[1].value
    const timeto = allinput[2].value
    
    const arr = JSON.parse(localStorage.getItem('appoitmentList')) || [];
    const appoitmentdata = {
        teacherlist,date,timefrom,timeto,Purpose
    }
    arr.push(appoitmentdata)
    console.log(arr);
    console.log(appoitmentdata);
    localStorage.setItem('appoitmentList',JSON.stringify(arr))
    window.location.reload()
})