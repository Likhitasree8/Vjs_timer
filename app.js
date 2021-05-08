let tl = document.getElementById('zip');
let audioPlay = document.getElementById('alarm-audio');
let next = document.getElementById('next');
let timer = document.getElementById('secs');
let up = document.getElementById('cd');
let timeleft = 5;

next.addEventListener('click', () => {
  timeleft = timer.value;
  let fun = setInterval(system, 1000);

  function system() {
    tl.innerText = timeleft;
    timeleft -= 1;
    if (timeleft < 0) {
      stop();
      audioPlay.play();
    } 
  }
  
  function stop() {
    clearInterval(fun);
  }
});