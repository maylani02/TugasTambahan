const points = document.querySelectorAll('.point');
let touchStartY;

points.forEach((point) => {
  point.addEventListener('mousedown', (event) => {
    touchStartY = event.pageY;
  });
  point.addEventListener('mouseup', (event) => {
    if (event.pageY > touchStartY) {
      // Swipe ke bawah
      let currentPoint = parseInt(point.innerHTML);
      if (currentPoint > 0) {
        point.innerHTML = currentPoint - 1;
      }
    } else {
      // Swipe ke atas
      let currentPoint = parseInt(point.innerHTML);
      if (currentPoint < 21) {
        point.innerHTML = currentPoint + 1;
      }
    }
  });
  point.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].pageY;
  });
  point.addEventListener('touchmove', (event) => {
    event.preventDefault();
  });
  point.addEventListener('touchend', (event) => {
    if (event.changedTouches[0].pageY > touchStartY) {
      // Swipe ke bawah
      let currentPoint = parseInt(point.innerHTML);
      if (currentPoint > 0) {
        point.innerHTML = currentPoint - 1;
      }
    } else {
      // Swipe ke atas
      let currentPoint = parseInt(point.innerHTML);
      if (currentPoint < 21) {
        point.innerHTML = currentPoint + 1;
      }
    }
  });
});
