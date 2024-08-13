document.querySelector('#messagedata').addEventListener('submit',(e) => {
    e.preventDefault()
    console.log(e);

    const teacherviewlist = document.querySelector('#teacherviewlist').value
    const message = document.querySelector('#message').value
    const allinput = document.querySelectorAll('.allmsgdata input')
    console.log(allinput[0]);

    const subject = allinput[0].value

    const arr = JSON.parse(localStorage.getItem('messageList')) || [];
    const messageview = {
        teacherviewlist,subject,message
    }
    arr.push(messageview)
    console.log(arr);
    console.log(messageview);

    localStorage.setItem('messageList',JSON.stringify(arr))
})