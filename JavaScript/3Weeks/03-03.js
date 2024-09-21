function cardGame() {
    // 카드 네 장에 대한 숫자를 배열에 저장
    let cards = [1, 2, 3, 4];
    let player_card; // 사용자 선택 카드 번호 저장 변수
    // 컴퓨터가 랜덤으로 선택하는 숫자 변수
    const answer_card = cards[Math.floor(Math.random() * cards.length)]
    player_card = parseInt(prompt(`
카드 게임 시작입니다.
1. ♠ 2. ♣ 3. ◈ 4. ♥
카드 네 장 중 원하는 카드의 숫자를 입력하세요.`, 0));

    let cards_ = ['1. ♠', '2. ♣', '3. ◈', '4. ♥']
    if (player_card == answer_card) {
        alert(`정답 카드 ${cards_[answer_card-1]} \n카드를 찾았습니다.`)
    }
    else {
        alert(`정답 카드 ${cards_[answer_card-1]} \n카드를 못찾았습니다.`)
    }
    

    return restart();
}

// 재시작 함수
function restart() {
    let restart = parseInt(prompt('카드 게임을 다시 시작하시겠습니까? 1. Yes 2. No', 1));
    if (restart == 1) {
        cardGame()
    }
}

cardGame();