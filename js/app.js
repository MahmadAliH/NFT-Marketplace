document.querySelector('.nav-burger-btn').addEventListener('click', function(){
    document.querySelector('.nav-links-mobile').classList.toggle('active');
})


var targetTime = new Date();
targetTime.setHours(24, 0, 0); // Устанавливаем целевое время на 12:00:00 сегодня

var timer = new Vue({
    el: '#timer',
    data: {
        time: '00:00:00',
        targetTime: targetTime,
    },
    methods: {
        updateTime: function() {
            var currentTime = new Date().getTime();
            var timeRemaining = this.targetTime - currentTime;

            if (timeRemaining <= 0) {
                clearInterval(this.timerID);
                this.time = '00:00:00';
            } else {
                var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
                var minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
                var seconds = Math.floor((timeRemaining / 1000) % 60);

                this.time = this.zeroPadding(hours, 2) + ' : ' + this.zeroPadding(minutes, 2) + ' : ' + this.zeroPadding(seconds, 2);
            }
        },
        zeroPadding: function(num, digit) {
            var zero = '';
            for (var i = 0; i < digit - num.toString().length; i++) {
                zero += '0';
            }
            return zero + num;
        },
    },
    created: function() {
        this.timerID = setInterval(this.updateTime, 1000);
        this.updateTime(); // Обновляем таймер сразу при создании
    },
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector("#carouselExampleDark");
    const carouselInner = carousel.querySelector(".carousel-inner");
    const prevButton = carousel.querySelector(".carousel-control-prev");
    const nextButton = carousel.querySelector(".carousel-control-next");
    const indicators = carousel.querySelectorAll(".carousel-indicators button");

    let activeSlideIndex = 0;

    function setActiveSlide(index) {
      const slides = carouselInner.querySelectorAll(".carousel-inner > div");
      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.classList.add("active");
        } else {
          indicator.classList.remove("active");
        }
      });
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
    }

    prevButton.addEventListener("click", function() {
      activeSlideIndex = (activeSlideIndex - 1 + 3) % 3;
      setActiveSlide(activeSlideIndex);
    });

    nextButton.addEventListener("click", function() {
      activeSlideIndex = (activeSlideIndex + 1) % 3;
      setActiveSlide(activeSlideIndex);
    });

    indicators.forEach((indicator, i) => {
      indicator.addEventListener("click", function() {
        activeSlideIndex = i;
        setActiveSlide(activeSlideIndex);
      });
    });

    // Set initial active slide
    setActiveSlide(activeSlideIndex);
  });