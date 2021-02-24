/*--------------------
Vars
--------------------*/
const deg = (a) => (Math.PI / 180) * a;
const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1));
const opt = {
  particles: window.width / 500 ? 1000 : 500,
  noiseScale: 0.009,
  angle: (Math.PI / 180) * -90,
  h1: rand(0, 360),
  h2: rand(0, 360),
  s1: rand(20, 90),
  s2: rand(20, 90),
  l1: rand(30, 80),
  l2: rand(30, 80),
  strokeWeight: 1.2,
  tail: 82,
};

const Particles = [];
let time = 0;
document.body.addEventListener("click", () => {
  opt.h1 = rand(0, 360);
  opt.h2 = rand(0, 360);
  opt.s1 = rand(20, 90);
  opt.s2 = rand(20, 90);
  opt.l1 = rand(30, 80);
  opt.l2 = rand(30, 80);
  opt.angle += deg(random(60, 60)) * (Math.random() > 0.5 ? 1 : -1);

  for (let p of Particles) {
    p.randomize();
  }
});

/*--------------------
Particle
--------------------*/
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lx = x;
    this.ly = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.hueSemen = Math.random();
    this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
    this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
    this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
    this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
  }

  randomize() {
    this.hueSemen = Math.random();
    this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
    this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
    this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
    this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
  }

  update() {
    this.follow();

    this.vx += this.ax;
    this.vy += this.ay;

    var p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    var a = Math.atan2(this.vy, this.vx);
    var m = Math.min(this.maxSpeed, p);
    this.vx = Math.cos(a) * m;
    this.vy = Math.sin(a) * m;

    this.x += this.vx;
    this.y += this.vy;
    this.ax = 0;
    this.ay = 0;

    this.edges();
  }

  follow() {
    let angle =
      noise(
        this.x * opt.noiseScale,
        this.y * opt.noiseScale,
        time * opt.noiseScale
      ) *
        Math.PI *
        0.5 +
      opt.angle;

    this.ax += Math.cos(angle);
    this.ay += Math.sin(angle);
  }

  updatePrev() {
    this.lx = this.x;
    this.ly = this.y;
  }

  edges() {
    if (this.x < 0) {
      this.x = width;
      this.updatePrev();
    }
    if (this.x > width) {
      this.x = 0;
      this.updatePrev();
    }
    if (this.y < 0) {
      this.y = height;
      this.updatePrev();
    }
    if (this.y > height) {
      this.y = 0;
      this.updatePrev();
    }
  }

  render() {
    stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`);
    line(this.x, this.y, this.lx, this.ly);
    this.updatePrev();
  }
}

/*--------------------
Setup
--------------------*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < opt.particles; i++) {
    if (window.CP.shouldStopExecution(0)) break;
    Particles.push(new Particle(Math.random() * width, Math.random() * height));
  }
  window.CP.exitedLoop(0);
  strokeWeight(opt.strokeWeight);
}

/*--------------------
Draw
--------------------*/
function draw() {
  time++;
  background(0, 100 - opt.tail);

  for (let p of Particles) {
    p.update();
    p.render();
  }
}

/*--------------------
Resize
--------------------*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//owl carousel
$(".owl-one").owlCarousel({
  items: 4,
  loop: true,
  margin: 0,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3500,
  responsive: {
    0: {
      items: 1.3,
    },
    600: {
      items: 2,
    },
    960: {
      items: 2.5,
    },
    1200: {
      items: 3.2,
    },
  },
});

$(".owl-two").owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2.3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
$(".owl-three").owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

//typewriter effect
(function ($) {
  // writes the string
  //
  // @param jQuery $target
  // @param String str
  // @param Numeric cursor
  // @param Numeric delay
  // @param Function cb
  // @return void
  function typeString($target, str, cursor, delay, cb) {
    $target.html(function (_, html) {
      return html + str[cursor];
    });

    if (cursor < str.length - 1) {
      setTimeout(function () {
        typeString($target, str, cursor + 1, delay, cb);
      }, delay);
    } else {
      cb();
    }
  }

  // clears the string
  //
  // @param jQuery $target
  // @param Numeric delay
  // @param Function cb
  // @return void
  function deleteString($target, delay, cb) {
    var length;

    $target.html(function (_, html) {
      length = html.length;
      return html.substr(0, length - 1);
    });

    if (length > 1) {
      setTimeout(function () {
        deleteString($target, delay, cb);
      }, delay);
    } else {
      cb();
    }
  }

  // jQuery hook
  $.fn.extend({
    teletype: function (opts) {
      var settings = $.extend({}, $.teletype.defaults, opts);

      return $(this).each(function () {
        (function loop($tar, idx) {
          // type
          typeString($tar, settings.text[idx], 0, settings.delay, function () {
            // delete
            setTimeout(function () {
              deleteString($tar, settings.delay, function () {
                loop($tar, (idx + 1) % settings.text.length);
              });
            }, settings.pause);
          });
        })($(this), 0);
      });
    },
  });

  // plugin defaults
  $.extend({
    teletype: {
      defaults: {
        delay: 100,
        pause: 2000,
        text: [],
      },
    },
  });
})(jQuery);
$("#target").teletype({
  text: ["everything!", "everyone."],
});
$("#target-team").teletype({
  text: [],
});

$("#cursor").teletype({
  text: ["_", " "],
  delay: 0,
  pause: 500,
});

$("#solutionsMain .solutions-container").hover(
  function () {
    $(this).siblings().css({
      transform: "translateY(-7%)",
      transition: "all ease-out 200ms",
    });
  },
  function () {
    $(this).siblings().css({
      transform: "none",
      transition: "all ease-out 200ms",
    });
  }
);
