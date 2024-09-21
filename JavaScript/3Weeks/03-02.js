let random_n = Math.floor(Math.random()*100)+1;

alert("Up And Down 게임을 시작합니다. \n숫자의 범위는 1~100 사이입니다.");

let count=0
while (true) {
    let player_n = parseInt(prompt('숫자 입력'));
    count++
    if (random_n == player_n) {
        alert(`정답입니다. \n총 ${count}번 시도했습니다.`)
        break
    }
    else if (random_n > player_n) {
        alert('UP')
    }
    else {
        alert('DOWN')
    }
}