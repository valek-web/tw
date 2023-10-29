const video__player = document.querySelector('.video__player')

video__player.addEventListener('click', () => {
  if (video__player.paused) {
    video__player.play()
    return
  }
  video__player.pause()
  console.log(Math.floor(video__player.currentTime % 60))
})

video__player.addEventListener('timeupdate', function () {
  let minutes = Math.floor(video__player.currentTime / 60)
  let seconds = Math.floor(video__player.currentTime % 60)
  let milliseconds = Math.floor((video__player.currentTime % 1) * 1000)

  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds
  milliseconds =
    milliseconds < 100 ? (milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds) : milliseconds

  currentTime.innerHTML = minutes + ':' + seconds + ':' + milliseconds
})
