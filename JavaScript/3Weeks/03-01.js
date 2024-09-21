function sum_f(n1, n2) {
    return `${n1} + ${n2} = ${n1+n2}`
}

function sub_f(n1, n2) {
    return `${n1} - ${n2} = ${n1-n2}`
}

function mul_f(n1, n2) {
    return `${n1} X ${n2} = ${n1*n2}`
}

function div_f(n1,n2) {
    return `${n1} % ${n2} = ${n1/n2}`
}

while(true) {
    let answer = parseInt(prompt('번호를 입력해 주세요.\n1. 더하기 2. 빼기 3. 곱하기 4. 나누기 5. 종료'));
    if(answer==5) {
        alert('종료합니다')
        break
    }
    let n1 = parseInt(prompt('첫 번째 숫자 입력'))
    let n2 = parseInt(prompt('두 번째 숫자 입력'))
    if(answer==1) {
        alert(sum_f(n1, n2))
    }
    else if(answer==2) {
        alert(sub_f(n1, n2))
    }
    else if(answer==3) {
        alert(mul_f(n1,n2))
    }
    else {
        alert(div_f(n1,n2))
    }
}

