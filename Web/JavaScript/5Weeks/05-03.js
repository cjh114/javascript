const div = document.querySelector('div')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    div.innerHTML = 'Hoya'
})

button.style.backgroundColor = 'pink'
button.style.fontSize = '30px'

div.style.fontSize = '30px'