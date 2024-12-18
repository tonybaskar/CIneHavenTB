// Add Movie to Local Storage
document.getElementById('add-movie-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const movieName = document.getElementById('movie-name').value;
    const director = document.getElementById('movie-director').value;
    const rating = document.getElementById('movie-rating').value;
    const image = document.getElementById('movie-image').value;

    const movie = { name: movieName, director, rating, image, watched: false, liked: false };
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));

    alert('Movie added successfully!');
    document.getElementById('add-movie-form').reset();
});
