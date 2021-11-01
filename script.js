var bill = ""

function billValue() {
    bill = parseInt(document.getElementById("billInput").value) 
    calc()
}

const buttons = document.querySelectorAll('.porcent')

buttons.forEach(button => button.addEventListener('click', handleClick));

function handleClick({ target }){
    const previusActive = document.querySelector('.porcent-active');
    if (previusActive) previusActive.classList.remove('porcent-active')

    target.classList.add('porcent-active')
    porcentaV()
    calc()
}

var porcentValue = 0.15

function porcentaV() {
    porcentValue = parseFloat(document.querySelector('.porcent-active').value)
    porcentValue = porcentValue / 100
    console.log(porcentValue)
    calc()
}

var peopleValue = 1

function peopleV() {
    peopleValue = parseInt(document.getElementById("numPeople").value)
    console.log(peopleValue)
    calc()
}

const calcValue = document.querySelector('#calcValue')
const calcTotal = document.querySelector('#calcTotal')

function calc(){
    var tipAmount = bill / peopleValue * porcentValue
    calcValue.innerHTML = "$" + tipAmount.toFixed(2)

    var totalAmount = bill / peopleValue + tipAmount
    calcTotal.innerHTML = "$" + totalAmount.toFixed(2)


}

function resetFunctions(){
    bill = ""
    peopleValue = 1
    porcentValue = 0.15
    calc()

}