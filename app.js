class BeatMachine {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 120;
    this.playBtn = document.querySelector(".play");
  }
  repeat() {
    let beat = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${beat}`);
    console.log(activeBars);
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, interval);
  }
  activePad() {
    this.classList.toggle("active");
  }
}

const beatMachine = new BeatMachine();

beatMachine.pads.forEach((pad) => {
  pad.addEventListener("click", beatMachine.activePad);
});

beatMachine.playBtn.addEventListener("click", function () {
  beatMachine.start();
});
