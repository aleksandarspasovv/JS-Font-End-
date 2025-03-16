function revealWords(phrase, text) {
    let ph = phrase.split(', ');

    let tokens = text.split(' ');

    for (let i=0; i < text.length; i++){
        for (let word of ph) {
            let stars = '*'.repeat(word.length);
            if (tokens[i] == stars) {
                tokens[i] = word;
                break;
            }
        }
    }

    console.log(tokens.join(' '))

}

revealWords('great',
'softuni is ***** place for learning new programming languages')