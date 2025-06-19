document.addEventListener('DOMContentLoaded', () => {
  const displayMinutes = document.querySelector('.timer-minutes');
  const displaySeconds = document.querySelector('.timer-seconds');
  const buttons = document.querySelectorAll('[data-interval]');
  const stop = document.querySelector('.secondary');
  let timer = null;
  const pad = value => value < 10 ? `0${value}` : value;

  Array.from(buttons).forEach(button => {
    button.addEventListener('click', event => {
      const interval = Number(event.target.getAttribute('data-interval'));
      let progress = 0;
      displayMinutes.textContent = '00 min';
      displaySeconds.textContent = '00 sec';

      clearInterval(timer);

      timer = setInterval(() => {
        progress += interval;
        
        const minutes = pad(Math.floor(progress / 60))
        const seconds = pad(progress % 60);

        if (minutes > 0) {
          displayMinutes.textContent = `${minutes} min`;
        }
        
        displaySeconds.textContent = `${seconds} sec`;
      }, interval * 1000);
    })
  });

  stop.addEventListener('click', event => {
      displayMinutes.textContent = 'Timer';
      displaySeconds.textContent = 'Off';
      clearInterval(timer);
    })
});
