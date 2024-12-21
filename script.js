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

// Google Maps Initialization
function initMap() {
    const location = { lat: 53.293365, lng: -6.130501
 }; // Example coordinates (San Francisco)
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}



