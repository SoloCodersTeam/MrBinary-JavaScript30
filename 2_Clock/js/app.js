function setTime() {
    const now = new Date();

    //Testing with different times
    // now.setHours(12);
    // now.setMinutes(59);

    //Getting the hour, minute and second hand as an array
    const hand = document.querySelectorAll('.hand');

    // Second Hand operations
    const sec = now.getSeconds();
    const secDegrees = ((sec / 60) * 360) + 90;   
    const secHand = document.querySelector('.sec-hand');

    //Fixing the wierd hand reset to 0 glitch like effect
    if(secHand.style.transform == `rotate(444deg)`)
    {
        hand[2].style.transition = 'none';
        hand[2].style.display = 'none';
        hand[2].style.display = 'block';
    }
    else
        hand[2].style.transition = 'all .05s'

    secHand.style.transform = `rotate(${secDegrees}deg)`;

    // Minute Hand operations
    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    const minHand = document.querySelector('.min-hand');

    //Fixing the wierd hand reset to 0 glitch like effect
    if(minHand.style.transform == `rotate(444deg)`)
    {
        hand[1].style.transition = 'none';
        hand[1].style.display = 'none';
        hand[1].style.display = 'block';
    }
    else
        hand[1].style.transition = 'all .05s'

    minHand.style.transform = `rotate(${minDegrees}deg)`;

    // Hour Hand operations
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    const hourHand = document.querySelector('.hour-hand');

    //Fixing the wierd hand reset to 0 glitch like effect
    if(hourHand.style.transform == `rotate(420deg)`)
    {
        hand[0].style.transition = 'none';
        hand[0].style.display = 'none';
        hand[0].style.display = 'block';
    }
    else
        hand[0].style.transition = 'all .05s'

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setTime, 1000);