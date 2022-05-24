const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const countDown = () => {
  const now = new Date();
  const eventDate = new Date("May 28, 2022 08:00:00");
  const currentTime = now.getTime();
  const eventTime = eventDate.getTime();
  const remTime = eventTime - currentTime;
  const s = Math.floor(remTime / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  day.innerHTML = d;
  hour.innerHTML = h % 24;
  minute.innerHTML = m % 60;
  second.innerHTML = s % 60;
};

countDown();
setInterval(countDown, 1000);
