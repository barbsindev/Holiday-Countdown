"use strict";

var dateDay = document.getElementsByClassName("days")[0];
var dateHour = document.getElementsByClassName("hours")[0];
var dateMinute = document.getElementsByClassName("minutes")[0];
var dateSecond = document.getElementsByClassName("seconds")[0];
var photo = document.querySelector(".photo");
var msg = document.querySelector(".msg");
var eventDay = new Date("July 13, 2022 00:00:00").getTime();
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;

var countDown = function countDown() {
  var now = new Date().getTime();
  var difference = eventDay - now;
  difference;

  if (difference < 0) {
    clearInterval();
    msg.innerHTML = "Enjoy your holiday!";
  } else {
    dateDay.innerHTML = Math.floor(difference / day);
    dateHour.innerHTML = Math.floor(difference % day / hour);
    dateMinute.innerHTML = Math.floor(difference % hour / minute);
    dateSecond.innerHTML = Math.floor(difference % minute / second);
  }
};

setInterval(countDown, second);
var apiKey = "563492ad6f91700001000001fa64397fe05e42d8945c20984dcb1c79";
var keyword = "Slovakia";
var header = {
  Authorization: "Bearer ".concat(apiKey)
};
var pexelApiUrl = "https://api.pexels.com/v1/search?query=".concat(keyword, "&per_page=50");
var images = [];
var index = 0;
fetch(pexelApiUrl, {
  headers: header
}).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log("Result", data);

  for (var i = 0; i < data.photos.length; i++) {
    images.push(data.photos[i].src.original);
  }
})["catch"](function (error) {
  return console.log("error", error);
});
setInterval(function () {
  photo.innerHTML = "<img src='".concat(images[index++], "'>");
}, 5000);
//# sourceMappingURL=index.dev.js.map
