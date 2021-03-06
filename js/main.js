const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerGroup: 1,
  slidesPerView: 1,
  autoHeight: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    980: {
      slidesPerGroup: 3,
      slidesPerView: 3
    },
    640: {
      slidesPerGroup: 2,
      slidesPerView: 2
    }
  }
});


// timer

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);

// input value number

document.oninput = function() {
    var input = document.querySelector('.number-input');
    input.value = input.value.replace (/[^\+\d]/g, '');
}

// scroll form

let scrollForm = document.querySelectorAll('.form-btn')
let form = document.querySelector('.form')

scrollForm.forEach(function(scroll) {
  scroll.addEventListener('click', function() {
    form.scrollIntoView({block: "start", behavior: "smooth"});
  })
})