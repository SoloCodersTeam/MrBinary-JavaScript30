function beatIt(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key-item[data-key="${e.keyCode}"]`);

    // selecting the branding element
    const branding = document.querySelector(`.branding[data-key="${e.keyCode}"]`);

    // Stoping function from running if there's no audio
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    // Adding the class 'playing' to the key-items or 'branding-decor' to the branding text
    if(key){
        key.classList.add('playing');
    } else {
        branding.classList.add('branding-decor');
    }
    
};

// Removing the transition effect from key-items
function removeTransition(e) {
    if(e.propertyName == 'transform'){
        this.classList.remove('playing');
    } else if(e.propertyName == '-webkit-text-stroke-color'){
        this.classList.remove('branding-decor');
    }
}

// Removing 'playing' class from 'key-items'
const keys = document.querySelectorAll('.key-item');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

// Removing 'branding-decor' class from 'branding'
const branding = document.querySelector('.branding');
branding.addEventListener('transitionend',removeTransition);

window.addEventListener('keydown',beatIt);