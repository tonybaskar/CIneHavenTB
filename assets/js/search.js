window.onload = () => {
    const movieList = document.getElementById('movie-list');
    const searchInput = document.getElementById('search-input');
    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    // Function to render movies
    const renderMovies = (filteredMovies) => {
        movieList.innerHTML = '';
        filteredMovies.forEach((movie, index) => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.name}">
                <h3>${movie.name}</h3>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Rating:</strong> ${movie.rating}/10</p>
            `;
            movieList.appendChild(movieCard);
        });
    };

    // Filter movies based on the search input
    const filterMovies = () => {
        const searchQuery = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => {
            return movie.name.toLowerCase().includes(searchQuery) || movie.director.toLowerCase().includes(searchQuery);
        });
        renderMovies(filteredMovies);
    };

    
    searchInput.addEventListener('input', filterMovies);

    
    renderMovies(movies);
};
