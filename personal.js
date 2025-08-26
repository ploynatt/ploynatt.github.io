

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: false   // force 24-hour format
  });
  
  const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
  document.getElementById("time").textContent = `${timeString}:${ms}`;

}

updateTime();
setInterval(updateTime, 100);

const images = [
    "artwork/aerial-view.png",
    "artwork/ahhh.png",
    "artwork/bitcoin-man.png",
    "artwork/catapult.png",
    "artwork/champ.png",
    "artwork/combman.png",
    "artwork/fart-smella.png",
    "artwork/fish.png",
    "artwork/gojo123.png",
   // "artwork/helmet.png",
    "artwork/hot-dog.png",
    "artwork/no-smoking.png",
    "artwork/sideye.png",
    "artwork/sonic.png"
  ];

  const coverImage = document.getElementById("coverImage");
  let currentIndex=-1;

  function showRandomImage() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * images.length);
  } while(nextIndex === currentIndex);

  currentIndex = nextIndex;
  coverImage.src = images[currentIndex];
}

setInterval(showRandomImage,500);

function showProjects() {
  const coverSection = document.getElementById("cover--section");
  const coverImage = document.getElementById("coverImage");
  const aboutSection = document.getElementById("project--section");
    const aboutButton = document.querySelector(".cover--enter");

  aboutButton.style.display = "none";

  coverSection.style.transform = "translateY(-100vh)";
  coverSection.style.opacity = "0";
  coverImage.style.transform = "translateY(-100vh)";
  coverImage.style.opacity = "0";

  setTimeout(() => {
    coverSection.style.display = "none";
    coverImage.style.display = "none";

    aboutSection.style.display = "block";
    
    setTimeout(() => {
      aboutSection.style.opacity = "1";
      aboutSection.style.transform = "translateY(0)";
    }, 50);
  }, 800);
}

document.addEventListener("DOMContentLoaded", () => {
  const coverSection = document.getElementById("cover--section");
  const coverImage = document.getElementById("coverImage");
  const projectsScreen = document.getElementById("projects--screen");
  const projectSection = document.getElementById("project--section");
  const aboutButton = document.querySelector(".cover--enter");
  const rope = document.getElementById("rope");

  function showProjects() {
    aboutButton.style.display = "none";

    coverSection.style.transition = "transform 0.8s, opacity 0.8s";
    coverImage.style.transition = "transform 0.8s, opacity 0.8s";
    coverSection.style.transform = "translateY(-100vh)";
    coverSection.style.opacity = "0";
    coverImage.style.transform = "translateY(-100vh)";
    coverImage.style.opacity = "0";

    setTimeout(() => {
      coverSection.style.display = "none";
      coverImage.style.display = "none";

      // Show projects screen
      projectsScreen.style.display = "block";
      projectsScreen.style.opacity = "0";

      setTimeout(() => {
        projectsScreen.style.transition = "opacity 0.5s";
        projectsScreen.style.opacity = "1";

        rope.style.transition = "top 0.5s ease-out";
        rope.style.marginTop="-250px";
        //swingRope();
      }, 50);
    }, 800);
  }

  /* function swingRope() {
    let angle = 5;
    let direction = 1;
    rope.swingInterval = setInterval(() => {
      rope.style.transform = `translateX(-40%) rotate(${angle}deg)`;
      angle += direction;
      if (angle > 10 || angle < -10) direction *= -1;
    }, 50);
  } */

  function pullRope() {
    clearInterval(rope.swingInterval);
    projectsScreen.style.transition = "transform 0.8s, opacity 0.8s";
    projectsScreen.style.transform = "translateY(100vh)";
    projectsScreen.style.opacity = "0";

    setTimeout(() => {
      projectsScreen.style.display = "none";
      coverSection.style.display = "block";
      coverImage.style.display = "block";


      coverSection.style.transition = "transform 0.8s, opacity 0.8s";
      coverImage.style.transition = "transform 0.8s, opacity 0.8s";
      coverSection.style.transform = "translateY(31.85%)";
      coverImage.style.transform = "translate(-50%, -50%)"
      coverSection.style.opacity = "1";
      coverImage.style.opacity = "1";

      aboutButton.style.display = "block";
      projectsScreen.style.transform = "translateY(0)";
    }, 800);
  }

  aboutButton.addEventListener("click", showProjects);
  rope.addEventListener("click", pullRope);
});
