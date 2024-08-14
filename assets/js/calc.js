function calc(num){
    document.querySelector('#res').value += num
}


function output(){
    var invalue = document.querySelector('#res')
    console.log(invalue.value);

    const finaloutput = eval(invalue.value)
    invalue.value = finaloutput
}

function clearAll(){
    document.querySelector('#res').value = " "
}

function lastdelete(){
    const invalue = document.querySelector('#res')
    invalue.value = invalue.value.slice(0,-1)
}