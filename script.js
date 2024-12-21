// Functionality to toggle navigation menu (for smaller screens)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scrolling for "Learn More" button on the homepage
const learnMoreBtn = document.querySelector('.btn');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        const featuresSection = document.querySelector('#features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Fetch Weather API Functionality
function fetchWeather() {
    const cityInput = document.querySelector('#cityInput');
    const weatherContainer = document.querySelector('#weatherData');
    const apiKey = '266ad9df9db0459589d11612242112'; // Replace with your actual API key

    if (!cityInput || !weatherContainer) return;

    const city = cityInput.value || 'Marina'; // Default city
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            weatherContainer.innerHTML = `
                <h3>Current Weather</h3>
                <p>Location: ${data.location.name}</p>
                <p>Condition: ${data.current.condition.text}</p>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <img src="${data.current.condition.icon}" alt="Weather Icon">
            `;
        })
        .catch(error => {
            weatherContainer.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
            console.error('Error fetching weather data:', error);
        });
}

// Attach event listener to Fetch Weather button
function attachFetchWeatherListener() {
    const fetchWeatherBtn = document.querySelector('#fetchWeatherBtn');
    if (fetchWeatherBtn) {
        fetchWeatherBtn.addEventListener('click', fetchWeather);
    }
}

// Background color change on hover in features section
function addFeaturesHoverEffect() {
    const featuresSection = document.querySelector('.features');
    if (featuresSection) {
        featuresSection.addEventListener('mouseover', () => {
            featuresSection.style.backgroundColor = '#e0f7fa';
        });
        featuresSection.addEventListener('mouseout', () => {
            featuresSection.style.backgroundColor = '#fff';
        });
    }
}

// Initialize functionality based on the page type
function initializePage() {
    const pageIdentifier = document.body.dataset.page; // Use a data attribute to identify the page

    if (pageIdentifier === 'home') {
        addFeaturesHoverEffect();
        attachFetchWeatherListener();
    } else if (pageIdentifier === 'weather') {
        attachFetchWeatherListener();
    }
}

// Ensure everything is initialized once the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);


