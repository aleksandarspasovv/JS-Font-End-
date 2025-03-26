function oddOcurrences(arr) {
    let finalResult = {};
    let words = arr.split(' ');

    for (i=0; i < words.length; i++){
        let word = words[i].toLowerCase();
        if (word in finalResult){
            finalResult[word]++;
        } else {
            finalResult[word] = 1;
        }
    }
    
    for (let word in finalResult) {
        if (!(finalResult[word] % 2 == 0)){
            console.log(word)
        }
    }
}

oddOcurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')