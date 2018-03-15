var imageEl = document.getElementById("image");

imageEl.onload = function() {
  moveYotsuba();
};

function moveYotsuba() {
  image.setPosition();
  image.setRotate();

  console.log(image);

  imageEl.animate(
    [
      {
        transform:
          "translate(" +
          image.prevX +
          "px, " +
          image.prevY +
          "px) rotate(" +
          image.prevDeg +
          "deg)"
      },
      {
        transform:
          "translate(" +
          image.x +
          "px, " +
          image.y +
          "px) rotate(" +
          image.deg +
          "deg)"
      }
    ],
    {
      duration: 600
      // easing: "linear"
    }
  ).onfinish = function() {
    moveYotsuba();
  };
}

var rotateDuration = 2000;
var rotateDegPerAnimation = 360 / (rotateDuration / 600);

var image = {
  prevX: 0,
  prevY: 0,
  x: 0,
  y: 0,

  prevDeg: 0,
  deg: 0,

  setPosition: function() {
    this.prevX = this.x;
    this.prevY = this.y;

    if (random()) {
      this.x += Math.floor(Math.random() * 8) + 1;
    } else {
      this.x -= Math.floor(Math.random() * 8) + 1;
    }

    if (random()) {
      this.y += Math.floor(Math.random() * 8) + 1;
    } else {
      this.y -= Math.floor(Math.random() * 8) + 1;
    }
  },

  setRotate: function() {
    this.prevDeg = this.deg;
    this.deg += rotateDegPerAnimation;
  }
};

function random() {
  return Math.round(Math.random()) === 1;
}
