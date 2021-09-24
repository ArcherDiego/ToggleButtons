const buttonOne = document.getElementById('button-1')
const buttonTwo = document.getElementById('button-2')
const buttonThree = document.getElementById('button-3')
const buttonFour = document.getElementById('button-4')

const button = document.querySelectorAll('.btn')

const toggleButton = (toggle) => {
    if(toggle == 'OFF'){
        button.innerText = 'ON'
        button.classList.remove('btn-off')
        button.classList.add('btn-on')
    } else {
        button.innerText = 'OFF'
        button.classList.add('btn-off')
        button.classList.remove('btn-on')
    }
}

buttonOne.onclick = () => toggleButton(button.innerText)