// Functionality to toggle navigation menu (for smaller screens)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scrolling for "Learn More" button
const learnMoreBtn = document.querySelector('.btn');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
    });
}

// Fetch Weather API
function fetchWeather() {
    const cityInput = document.querySelector('#cityInput');
    const weatherContainer = document.querySelector('#weatherData');
    const apiKey = '266ad9df9db0459589d11612242112'; // Your valid API key

    if (!cityInput || !weatherContainer) {
        console.error("Missing input field or container for weather data.");
        return;
    }

    const city = cityInput.value || 'Marina'; // Default city if no input
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    // Fetch weather data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display weather data
            weatherContainer.innerHTML = `
                <h3>Current Weather</h3>
                <p><strong>Location:</strong> ${data.location.name}</p>
                <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
                <img src="${data.current.condition.icon}" alt="Weather Icon">
            `;
        })
        .catch(error => {
            // Display error message
            weatherContainer.innerHTML = `<p style="color: red;">Error fetching weather data: ${error.message}</p>`;
            console.error('Error fetching weather data:', error);
        });
}

// Attach event listener to Fetch Weather button
const fetchWeatherBtn = document.querySelector('#fetchWeatherBtn');
if (fetchWeatherBtn) {
    fetchWeatherBtn.addEventListener('click', fetchWeather);
} else {
    console.error("Fetch Weather button not found.");
}

// Change background color on mouse events in features section
const featuresSection = document.querySelector('.features');
if (featuresSection) {
    featuresSection.addEventListener('mouseover', () => {
        featuresSection.style.backgroundColor = '#e0f7fa';
    });
    featuresSection.addEventListener('mouseout', () => {
        featuresSection.style.backgroundColor = '#fff';
    });
}

// Carousel Functionality for Weather Tips
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCarousel() {
    if (!carouselItems) return;
    carouselItems.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    });
}

// Initialize Carousel
if (carouselItems.length > 0) {
    updateCarousel();
}


