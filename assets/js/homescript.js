// heading h1 cinematic animation
window.addEventListener('load', () => {
    const heading = document.querySelector('h1');
    heading.classList.add('animate-heading'); // Add class to trigger animation
});


// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
        darkModeToggle.classList.replace('btn-dark', 'btn-light');
    } else {
        darkModeToggle.textContent = 'Dark Mode';
        darkModeToggle.classList.replace('btn-light', 'btn-dark');
    }

    //  dark mode styles to other elements
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('dark-mode');
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.toggle('dark-mode'));
    const images = document.querySelectorAll('img');
    images.forEach(image => image.classList.toggle('dark-mode'));
});
// carousel script
document.addEventListener("DOMContentLoaded", function () {
    const movieCarousel = document.getElementById("movieCarousel");

    
    movieCarousel.addEventListener("mouseover", function () {
        const carouselInstance = bootstrap.Carousel.getInstance(movieCarousel);
        carouselInstance.pause();
    });

  
    movieCarousel.addEventListener("mouseout", function () {
        const carouselInstance = bootstrap.Carousel.getInstance(movieCarousel);
        carouselInstance.cycle();
    });

    
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    prevButton.addEventListener("click", () => {
        console.log("Previous slide");
    });

    nextButton.addEventListener("click", () => {
        console.log("Next slide");
    });

  
    movieCarousel.addEventListener("slid.bs.carousel", function (event) {
        console.log(`Active slide index: ${event.to}`);
    });
});


//fade-in effect 
const cards = document.querySelectorAll('.card');
window.addEventListener('load', () => {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in'); 
        }, index * 200);
    });
});

// Card click animation
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('clicked');
        setTimeout(() => card.classList.remove('clicked'), 300); 
    });
});


// search button
const searchMoviesButton = document.getElementById('search-movies');
searchMoviesButton.addEventListener('click', () => {
    window.location.href = 'search.html';  
});

// mark watched button
const markWatchedButton = document.getElementById('mark-button');
markWatchedButton.addEventListener('click', () => {
    window.location.href = 'myMovies.html';  
});





// footer script
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseover', function () {
        const platform = this.querySelector('img').alt;
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = platform;
        tooltip.style.position = 'absolute';
        tooltip.style.background = '#333';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.fontSize = '12px';
        tooltip.style.top = `${this.getBoundingClientRect().top - 30}px`;
        tooltip.style.left = `${this.getBoundingClientRect().left}px`;
        document.body.appendChild(tooltip);
        this.addEventListener('mouseleave', () => tooltip.remove());
    });
});

// scroll to top
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = 'flex';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// footer color change
const footerBg = document.querySelector('footer');

footerBg.addEventListener('mouseenter', () => {
    footerBg.style.background = 'linear-gradient(90deg, #4CAF50, #FF5722)';
    footerBg.style.transition = 'background 0.5s ease';
});

footerBg.addEventListener('mouseleave', () => {
    footerBg.style.background = 'lightgray';
});


// footer icons
document.querySelectorAll('.social-link img').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.boxShadow = '0 0 20px #4CAF50';
        icon.style.transition = 'box-shadow 0.3s ease';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.boxShadow = 'none';
    });
});





