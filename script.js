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
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=266ad9df9db0459589d11612242112&q=Dublin';

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
            console.error('Error fetching weather data:', error);
        });
}

// Attach event listener to Fetch Weather button
const fetchWeatherBtn = document.querySelector('#fetchWeatherBtn');
if (fetchWeatherBtn) {
    fetchWeatherBtn.addEventListener('click', fetchWeather);
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

