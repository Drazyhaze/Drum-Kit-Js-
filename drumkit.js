'use strict';
function playSound(e) {
    var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
    if (!audio) return; // stops the function if no key associated with audio
    audio.currentTime = 0; // rewinds to the start
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if its not a transition
    this.classList.remove('playing');
    console.log(e.propertyName);
}
var keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
    return key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playSound);
