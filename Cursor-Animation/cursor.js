const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('.nav-links li a');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.top = mouseY + "px";
  cursor.style.left = mouseX + "px";
});

function animateFollower() {
  followerX += (mouseX - followerX) / 8;
  followerY += (mouseY - followerY) / 8;
  follower.style.top = followerY + "px";
  follower.style.left = followerX + "px";
  requestAnimationFrame(animateFollower);
}
animateFollower();

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    follower.style.transform = "scale(1.5)";
    cursor.style.transform = "scale(0.7)";
  });

  link.addEventListener('mouseleave', () => {
    follower.style.transform = "scale(1)";
    cursor.style.transform = "scale(1)";
  });
});

document.addEventListener('click', () => {
  cursor.classList.add('click');
  setTimeout(() => cursor.classList.remove('click'), 400);
});
