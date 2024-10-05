let star = ''

for(let i=1; i<6; i++) {
    for(let j=0; j<i; j++) {
            star += '*';
    }
    star += '\n';
}

console.log(star)



let star_ = ''

for(let i=1; i<6; i++) {
    for(let j=0; j<i; j++) {
        star_ += ' ';
    }
    star_ += '*\n';
}

console.log(star_)