function createDictionary(arr) {
    let dictionary = {};

    // Loop through each JSON string in the array
    for (let jsonString of arr) {
        let entry = JSON.parse(jsonString);  // Parse the JSON string
        let term = Object.keys(entry)[0];    // Get the term (key)
        let definition = entry[term];        // Get the definition (value)

        // Add or update the dictionary with the term and definition
        dictionary[term] = definition;
    }

    // Sort the dictionary keys alphabetically
    let sortedTerms = Object.keys(dictionary).sort();

    // Print the sorted terms and their definitions
    for (let term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}

createDictionary([
    '{"Python": "A high-level programming language"}',
    '{"JavaScript": "A programming language that is commonly used in web development"}',
    '{"HTML": "A markup language used for creating web pages"}',
    '{"CSS": "A style sheet language used for describing the look and format of a document"}',
    '{"JavaScript": "A programming language commonly used for interactive effects within web browsers"}'
]);
