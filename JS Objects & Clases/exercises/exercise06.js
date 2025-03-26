function wordsTracker(arrayOfWords) {
    let wordsToFind = arrayOfWords[0].split(' ');
    let wordsCount = {};

    for (let word of wordsToFind) {
        wordsCount[word] = 0;
    }

    for (let i = 1; i < arrayOfWords.length; i++) {
        let currentWord = arrayOfWords[i];

        if (wordsCount.hasOwnProperty(currentWord)) {
            wordsCount[currentWord]++;
        }
    }

    let sortedWords = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
