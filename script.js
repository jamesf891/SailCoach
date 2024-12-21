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
        const featuresSection = document.querySelector('#features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Fetch Weather API Functionality
function fetchWeather() {
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=266ad9df9db0459589d11612242112&q=Marina';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherContainer = document.querySelector('#weatherData');
            if (weatherContainer) {
                weatherContainer.innerHTML = `
                    <h3>Current Weather</h3>
                    <p>Location: ${data.location.name}</p>
                    <p>Condition: ${data.current.condition.text}</p>
                    <p>Temperature: ${data.current.temp_c}°C</p>
                    <img src="${data.current.condition.icon}" alt="Weather Icon">
                `;
            }
        })
        .catch(error => {
            const weatherContainer = document.querySelector('#weatherData');
            if (weatherContainer) {
                weatherContainer.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
            }
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

// Call function to attach the weather event listener on load
attachFetchWeatherListener();

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

// Ensure functionality works on both Home and Weather pages
window.addEventListener('DOMContentLoaded', () => {
    const pageIdentifier = document.body.dataset.page; // Use a data attribute to identify the page
    if (pageIdentifier === 'weather') {
        attachFetchWeatherListener();
    }
});

