const carouselSlider = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 1;
const size = images[0].clientWidth;

carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

prevBtn.addEventListener('click', function(){
    carouselSlider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
nextBtn.addEventListener('click', function(){
    carouselSlider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlider.addEventListener('transitionend', () => {
    if(images[counter].id === 'lastClone' || images[counter].id === 'firstClone'){
        carouselSlider.style.transition = 'none';
        if(images[counter].id === 'lastClone')
            counter = images.length - 2;
        else
            counter = images.length - counter;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});






