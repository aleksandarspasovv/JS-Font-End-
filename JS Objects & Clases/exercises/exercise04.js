function solve(movies) {
    let finalResult = [];   

    for (let i = 0; i < movies.length; i++) {
        let data = movies[i].split(' ');

        if (data[0] === 'addMovie') {
            // Take the rest of the string as the movie name (to account for multi-word names)
            let movieName = movies[i].slice(9).trim();  // Slice off the "addMovie " part
            finalResult.push({ name: movieName });
        }
        else if (movies[i].includes('directedBy')) {
            let movieName = movies[i].split(' directedBy ')[0].trim();
            let director = movies[i].split(' directedBy ')[1].trim();

            // Find the movie and add the director
            let movie = finalResult.find(movie => movie.name === movieName);
            if (movie) {
                movie.director = director;
            }
        }
        else if (movies[i].includes('onDate')) {
            let movieName = movies[i].split(' onDate ')[0].trim();
            let date = movies[i].split(' onDate ')[1].trim();

            // Find the movie and add the date
            let movie = finalResult.find(movie => movie.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    // Filter movies with all the necessary information
    let completeMovies = finalResult.filter(movie => movie.name && movie.director && movie.date);

    // Print the completed movies in JSON format
    console.log(JSON.stringify(completeMovies, null, 2));
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
)