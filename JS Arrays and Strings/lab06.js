function wordsCounter(text, word) {
    let tokens = text.split(' ');
    let counter = 0;

    for (let piece of tokens) {
        if (piece == word) {
            counter += 1;
        }
    }
    console.log(counter)
}

wordsCounter('This is a word and it also is a sentence',
'is'	)

