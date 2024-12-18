window.onload = () => {
    const movieList = document.getElementById('movie-list');
    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    // Function to render movies
    const renderMovies = () => {
        movieList.innerHTML = '';
        movies.forEach((movie, index) => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.name}">
                <h3>${movie.name}</h3>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Rating:</strong> ${movie.rating}/10</p>
                <button class="btn btn-like ${movie.liked ? 'active' : ''}" data-index="${index}">
                    ${movie.liked ? 'Liked' : 'Like'}
                </button>
                <button class="btn btn-watch" data-index="${index}">
                    ${movie.watched ? 'Watched' : 'Mark as Watched'}
                </button>
                <button class="btn btn-delete" data-index="${index}">Delete</button>
            `;
            movieList.appendChild(movieCard);
        });
    };

   
    movieList.addEventListener('click', (e) => {
        const target = e.target;
        const index = target.dataset.index;

        if (target.classList.contains('btn-like')) {
            movies[index].liked = !movies[index].liked;
        } else if (target.classList.contains('btn-watch')) {
            movies[index].watched = !movies[index].watched;
        } else if (target.classList.contains('btn-delete')) {
            movies.splice(index, 1);
        }
        localStorage.setItem('movies', JSON.stringify(movies));
        renderMovies();
    });

    renderMovies();
};
