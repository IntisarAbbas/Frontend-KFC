

const openDrawerBtn = document.getElementById('burger-btn');
  const siteDrawer = document.getElementById('drawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

function openDrawer() {
    siteDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; 
}

function closeDrawer() {
    siteDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

openDrawerBtn.addEventListener('click', openDrawer);

drawerOverlay.addEventListener('click', closeDrawer);


// --- Product Slider Functionality ---
const productSlider = document.getElementById('product-Slider');
const prevSlideBtn = document.getElementById('prev-btn');
const nextSlideBtn = document.getElementById('next-btn');
const slides = productSlider.querySelectorAll('.slick-slider');

let currentIndex = 0; 
let itemsPerPage = 1; 

function updateItemsPerPage() {
    if (window.innerWidth >=1024) { 
        itemsPerPage = 5;
    }
   
    currentIndex = Math.min(currentIndex, slides.length - itemsPerPage);
    updateSlider();
    updateButtonStates();
}


function updateSlider() {
    const translateValue = -currentIndex * (100 / itemsPerPage);
    productSlider.style.transform = `translateX(${translateValue}%)`;
    updateButtonStates(); 
}


function updateButtonStates() {
    prevSlideBtn.disabled = currentIndex === 0;
    nextSlideBtn.disabled = currentIndex >= (slides.length - itemsPerPage);
}


nextSlideBtn.addEventListener('click', () => {
    if (currentIndex < (slides.length - itemsPerPage)) {
        currentIndex++;
        updateSlider();
    }
});

prevSlideBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

updateItemsPerPage(); 
window.addEventListener('resize', updateItemsPerPage);