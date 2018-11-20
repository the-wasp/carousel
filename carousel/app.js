(()=>{

const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

let img = [
    "ope-0",
    "ope-1",
    "ope-2",
    "ope-3",
    "ope-4",
    "ope-5",
    "ope-6"
    ];

let counter = 0;
let carousel = document.querySelector('.carousel');
carousel.style.backgroundImage = `url('../images/${img[counter]}.jpg')`;


rightBtn.addEventListener('click', () => {
    counter++;
    (counter > img.length - 1)? counter = 0 : counter;
    carousel.style.backgroundImage = `url('../images/${img[counter]}.jpg')`;
    
});

leftBtn.addEventListener('click', () => {
    counter--;
    (counter < 0)? counter = img.length - 1 : counter;
    carousel.style.backgroundImage = `url('../images/${img[counter]}.jpg')`;
    
});
})();
