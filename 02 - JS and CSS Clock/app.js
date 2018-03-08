const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();
  console.log(`The time is: ${hour}:${minutes}:${seconds}`);
  const secondDegree = ((seconds / 60) * 359) + 90;
  const minuteDegree = ((minutes / 60) * 360) + 90;
  const hourDegree = ((hour / 12) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg`;
  hourHand.style.transform = `rotate(${hourDegree}deg`;
}

setInterval(setDate, 1000)