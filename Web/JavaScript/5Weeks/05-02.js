const number = document.querySelector(".number");
let result = document.querySelector(".result");
const go = document.querySelector(".go")
const reset = document.querySelector(".reset")
let D = document.querySelector(".D")

let random_n = 0
function func () {
    return Math.floor(Math.random()*(100))
}
random_n = func()
let n = 0
let n_ = 0

go.addEventListener("click",() => {
    if (n_ == 0) {
        n += 1
        let number_ = parseInt(number.value)
        D.innerHTML = `입력하신 숫자는 ${number_}입니다.`
        if (random_n == number_) {
            n_ += 1
            result.innerHTML ='Good!'
            D.innerHTML = `${n}번 만에 성공하셨습니다.`
        }
        else if (random_n > number_) {
            result.innerHTML = 'Up'
        }
        else {
            result.innerHTML = 'Down'
        }   
    }
    else {
        D.innerHTML = 'Reset 버튼을 눌러주세요.'
    }
})

reset.addEventListener("click",() => {
    result.innerHTML = ''
    D.innerHTML = '0 에서 99 사이의 숫자를 입력해 주세요.'
    number.innerHTML = ''
    n = 0
    n_ = 0
    func(random_n)
})