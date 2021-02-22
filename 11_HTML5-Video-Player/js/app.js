// Get the elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreenButton = player.querySelector('.player__fullscreenButton')

// Build out functions
function togglePlay() {
    if(video.paused)
        video.play()
    else
        video.pause()
}

function updateButton() {
    const icon = video.paused ? '►' : '■'
    toggle.textContent = icon
}

function skip() {
    video.currentTime = video.currentTime+parseFloat(this.dataset.skip)
}

function handleRangeUpdate(e) {
    console.log(e)
    video[this.name] = this.value
}

function handleProgress() {
    const position = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${position}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

function handleFullscreen() {
    video.requestFullscreen()
}


// Hook up the event listeners
video.addEventListener('click',togglePlay)
toggle.addEventListener('click',togglePlay)

video.addEventListener('pause', updateButton)
video.addEventListener('play', updateButton)

skipButtons.forEach(button => button.addEventListener('click', skip))


ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
let rangeMousedown = false
ranges.forEach(range => range.addEventListener('mousemove', (e) => rangeMousedown && handleRangeUpdate(e)));
ranges.forEach(range => range.addEventListener('mousedown', () => rangeMousedown = true));
ranges.forEach(range => range.addEventListener('mouseup', () => rangeMousedown = false));

video.addEventListener('timeupdate', handleProgress)
progress.addEventListener('click', scrub)
let progressMousedown = false
progress.addEventListener('mousemove', (e) => progressMousedown && scrub(e))
progress.addEventListener('mousedown', () => progressMousedown = true)
progress.addEventListener('mouseup', () => progressMousedown = false)


fullscreenButton.addEventListener('click', handleFullscreen)