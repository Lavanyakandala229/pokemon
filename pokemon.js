const time = Math.random() + .5; // I’m adding .5 here so the flicker isn’t too obnoxious

console.log(time);

const red = document.querySelector('#red');
red.style.setProperty('--animation-time', time +'s');