const incrBtn = document.querySelector(".increment")
const decrBtn = document.querySelector(".decrement")
const resetBtn = document.querySelector(".reset")
const counter = document.querySelector("h3")
const modalWindow = document.querySelector(".counter__modal")
const btnToOpenModal = document.querySelector("#openCounterModalBtn")
const btnToCloseModal = document.querySelector(".closeModal")
const counterBtnCont = document.querySelector(".counter__button")
let count = 0;

const hideModal = () => {
    modalWindow.style.display = "none"
    counterBtnCont.style.display = "flex"
}
const showModal = () => {
    modalWindow.style.display = "block"
    counterBtnCont.style.display = "none"
}

hideModal()

const checkCountColor = () => {
    if (count > 0) {
        counter.style.color = "#00ff00"
    } else if (count < 0) {
        counter.style.color = "#ff0000"
    } else {
        counter.style.color = "#555"
    }
}

incrBtn.addEventListener("click", function () {
    count++
    counter.innerText = count;
    checkCountColor()
})

decrBtn.addEventListener("click", function () {
    count--
    counter.innerText = count;
    checkCountColor()
})

resetBtn.addEventListener("click", function () {
    count = 0
    counter.innerText = count;
    checkCountColor()
})

btnToOpenModal.addEventListener("click", function () {
    showModal()
})

btnToCloseModal.addEventListener("click", function () {
    hideModal()
})