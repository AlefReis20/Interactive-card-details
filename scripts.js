let inputName = document.querySelector('#card-name')
let modifyName = document.querySelector('.name')

const inputCardName = () => {
    modifyName.textContent = inputName.value
}

let inputNumber = document.querySelector('#card-number')
let modifyNumbers = document.querySelector('#numbers')

const inputCardNumber = () => {
        modifyNumbers.textContent = inputNumber.value
}

let inputMounth = document.querySelector('#mounth')
let inputYear = document.querySelector('#year')
let modifyMounthAndYear = document.querySelector('.date')

const inputDate = () => {
    modifyMounthAndYear.textContent = `${inputMounth.value} / ${inputYear.value}`
}

let cvc = document.querySelector('#cvc')
let modifyCvc = document.querySelector('.cvc')

const inputCvc = () => {
    modifyCvc.textContent = cvc.value
}

const confirmButton = document.querySelector('#confirm-button')
const continueButton = document.querySelector('#continue-button')
const formAside = document.querySelector('.form')
const sucessAside = document.querySelector('.sucess')

const clickedConfirmButton = () => {
    formAside.style.display = 'none'
    sucessAside.style.display ='inline-block'
}

const clickedContinueButton = () => {
    formAside.style.display = 'inline-block'
    sucessAside.style.display ='none'
    inputName.value = ''
    modifyName.textContent = 'Jane Appleseed'
    inputNumber.value = ''
    modifyNumbers.textContent = '0000 0000 0000 0000'
    inputMounth.value = ''
    inputYear.value = ''
    modifyMounthAndYear.textContent = '00 / 00'
    cvc.value = ''
    modifyCvc.textContent = '000'
}

inputName.addEventListener('keypress',inputCardName)
inputNumber.addEventListener('keypress',inputCardNumber)
inputMounth.addEventListener('keypress',inputDate)
inputYear.addEventListener('keypress',inputDate)
cvc.addEventListener('keypress', inputCvc)
confirmButton.addEventListener('click', clickedConfirmButton)
continueButton.addEventListener('click', clickedContinueButton)