const dateDay = document.getElementsByClassName("days")[0];
const dateHour = document.getElementsByClassName("hours")[0];
const dateMinute = document.getElementsByClassName("minutes")[0];
const dateSecond = document.getElementsByClassName("seconds")[0];
const photo = document.querySelector(".photo");
const msg = document.querySelector(".msg");
const eventDay = new Date("July 13, 2022 00:00:00").getTime();
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDown = () => {
  let now = new Date().getTime();
  let difference = eventDay - now;
  difference;
  if (difference < 0) {
    clearInterval();
    msg.innerHTML = "Enjoy your holiday!";
  } else {
    dateDay.innerHTML = Math.floor(difference / day);
    dateHour.innerHTML = Math.floor((difference % day) / hour);
    dateMinute.innerHTML = Math.floor((difference % hour) / minute);
    dateSecond.innerHTML = Math.floor((difference % minute) / second);
  }
};

setInterval(countDown, second);

const apiKey = "563492ad6f91700001000001fa64397fe05e42d8945c20984dcb1c79";
let keyword = "Slovakia";
let header = { Authorization: `Bearer ${apiKey}` };
const pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=50`;
const images = [];
let index = 0;

fetch(pexelApiUrl, { headers: header })
  .then((response) => response.json())
  .then((data) => {
    console.log("Result", data);
    for (let i = 0; i < data.photos.length; i++) {
      images.push(data.photos[i].src.original);
    }
  })
  .catch((error) => console.log("error", error));

setInterval(function () {
  photo.innerHTML = `<img src='${images[index++]}'>`;
}, 5000);
