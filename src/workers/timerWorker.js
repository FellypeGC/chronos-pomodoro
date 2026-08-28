let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tickTack() {
    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.ceil((endDate - now) / 1000);

    setTimeout(tickTack, 1000);
  }

  tickTack();
};
