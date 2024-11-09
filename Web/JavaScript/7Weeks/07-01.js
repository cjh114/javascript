const pw1 = document.getElementById('pw1')
const pw2 = document.getElementById('pw2')
const pw3 = document.getElementById('pw3')
const pw4 = document.getElementById('pw4')

const setbtn = document.querySelector('.setbtn')
const openbtn = document.querySelector('.openbtn')
const reset = document.querySelector('.reset')

let password

if (localStorage.getItem('password') == null) {
    password = [0, 0, 0, 0]
}
else {
    password = JSON.parse(localStorage.getItem('password'))
}

setbtn.addEventListener('click', () => {
    password[0] = pw1.value
    password[1] = pw2.value
    password[2] = pw3.value
    password[3] = pw4.value
    localStorage.setItem('password', JSON.stringify(password))
    pw1.value = '0'
    pw2.value = '0'
    pw3.value = '0'
    pw4.value = '0'
    alert('비밀번호가 설정되었습니다.')
})

openbtn.addEventListener('click', () => {
    if ((password[0] == pw1.valueAsNumber) &&
        (password[1] == pw2.valueAsNumber) &&
        (password[2] == pw3.valueAsNumber) &&
        (password[3] == pw4.valueAsNumber)
    ) {
        alert('비밀번호가 일치합니다. \n가방이 열렸습니다.')
    }
    else {
        alert('비밀번호가 틀렸습니다.')
    }
})

reset.addEventListener('click', () => {
    password = [0, 0, 0, 0]
    localStorage.clear()
    pw1.value = '0'
    pw2.value = '0'
    pw3.value = '0'
    pw4.value = '0'
})
