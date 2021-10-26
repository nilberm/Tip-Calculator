var bill = ""

function billValue() {
    bill = parseInt(document.getElementById("billInput").value) 
    console.log(bill)
}

const buttons = document.querySelectorAll('.porcent')

buttons.forEach(button => button.addEventListener('click', handleClick));

function handleClick({ target }){
    const previusActive = document.querySelector('.porcent-active');
    if (previusActive) previusActive.classList.remove('porcent-active')

    target.classList.add('porcent-active')
}

var porcentValue = ""

function porcentaV() {
    porcentValue = parseInt(document.querySelector('.porcent-active').value)
    console.log(porcentValue)
}

var peopleValue = ""

function peopleV() {
    peopleValue = parseInt(document.getElementById("numPeople").value)
    console.log(peopleValue)
}