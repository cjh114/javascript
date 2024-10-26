const button = document.querySelector(".random_btn")
const random_n = document.querySelector(".random_n")

button.addEventListener('click',() => {
    let n = Math.floor(Math.random()*(200-159+1))+159;

    random_n.innerText = n;
})