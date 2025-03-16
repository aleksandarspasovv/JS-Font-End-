function replaceChar(word, text) {
    while (text.include(word)) {
        text = text.replace(word, '*'.repeat(word.length))
    }
}

