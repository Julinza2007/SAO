const canvas = document.getElementById('constellations');
const ctx = canvas.getContext('2d');

canvas.width = Math.min(window.innerWidth, document.body.clientWidth);
canvas.height = window.innerHeight;

const stars = [];

class Star {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.opacity = Math.random();
    this.velocity = Math.random() * 0.02;
    this.direction = Math.random() > 0.5 ? 1 : -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.y += this.direction * this.velocity * 10;
    this.opacity += this.direction * this.velocity;

    if (this.opacity <= 0 || this.opacity >= 1) {
      this.direction *= -1;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.y = Math.random() * canvas.height;
    }
  }
}

function createConstellation() {
  stars.length = 0; // Limpiar el array de estrellas antes de crear nuevas
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 3;
    stars.push(new Star(x, y, radius, 'white'));
  }
}

function animateConstellation() {
  requestAnimationFrame(animateConstellation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    star.update();
    star.draw();
  }
}

createConstellation();
animateConstellation();

window.addEventListener('resize', function () {
  canvas.width = Math.min(window.innerWidth, document.body.clientWidth);
  canvas.height = window.innerHeight;
  createConstellation();
});
