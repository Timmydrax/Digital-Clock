function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  //Conditional Operation
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //Declaring Variables and getting them by IDs
  const hoursElement = document.getElementById("Hours");
  const minutesElement = document.getElementById("Minutes");
  const secondsElement = document.getElementById("Seconds");

  //Syling the span contents timeElement
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// For constant update of time display
setInterval(updateClock, 1000);
