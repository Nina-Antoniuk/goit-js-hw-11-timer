class CountdownTimer {
  constructor({ selector, date }) {
    this.targetDate = date,
    this.rootSelector = document.querySelector(selector),
    this.refs = {
      days: this.rootSelector.querySelector('[data-value="days"]'),
      hours: this.rootSelector.querySelector('[data-value="hours"]'),
      minutes: this.rootSelector.querySelector('[data-value="mins"]'),
      seconds: this.rootSelector.querySelector('[data-value="secs"]')
    }
  }

  init() {
    setInterval(() => {
      const time = this.targetDate - Date.now();
      const days = this.getDays(time);
      const hours = this.getHours(time);
      const mins = this.getMins(time);
      const secs = this.getSecs(time);
      this.dataRendering({days, hours, mins, secs})
    }, 1000)
  }

  getDays(time) {
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }

  getHours(time) {
    return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  getMins(time) {
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  }

  getSecs(time) {
    return Math.floor((time % (1000 * 60)) / 1000);
  }

  dataRendering({days, hours, mins, secs}) {
    this.refs.days.innerHTML = days < 10 ? `0${days}` : days;
    this.refs.hours.innerHTML = hours < 10 ? `0${hours}` : hours;
    this.refs.minutes.innerHTML = mins < 10 ? `0${mins}` : mins;
    this.refs.seconds.innerHTML = secs < 10 ? `0${secs}` : secs;
  }

}

const newTimer = new CountdownTimer({selector: '#timer-1', date: new Date('2022, 03, 01')});

window.addEventListener("DOMContentLoaded", newTimer.init());




