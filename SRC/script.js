// LOADER FUNCTION
window.addEventListener("load", () => {
    document.querySelector(".loaderContainer").classList.add("hide");
});

// HOME IMGS FUNCTION
var object1 = $('#img2');
var object2 = $('#img4');

var layer = $('#home');

layer.mousemove(function(e) {
    var valueX = (e.pageX * -1 / 20);
    var valueY = (e.pageY * -1 / 20);

    object1.css({
        'transform':'translate(-50%, -50%) translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});

layer.mousemove(function(e) {
    var valueX = (e.pageX * -1 / 50);
    var valueY = (e.pageY * -1 / 50);

    object2.css({
        'transform':'translate(-50%, -50%) translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});

// HOME IMGS FUNCTION
var object1 = $('#img2');
var object2 = $('#img4');

var layer = $('#about');

layer.mousemove(function(e) {
    var valueX = (e.pageX * -1 / 20);
    var valueY = (e.pageY * -1 / 20);

    object1.css({
        'transform':'translate(-50%, -50%) translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});

layer.mousemove(function(e) {
    var valueX = (e.pageX * -1 / 50);
    var valueY = (e.pageY * -1 / 50);

    object2.css({
        'transform':'translate(-50%, -50%) translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});

// CURSOR FUNCTIONALITY
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll(".link"));

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});

let filters = Array.from(document.querySelectorAll(".filter"));

filters.forEach((filter) => {
    filter.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    filter.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});

let projectBtns = Array.from(document.querySelectorAll(".projectBtn"));

filters.forEach((projectBtn) => {
    projectBtn.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    projectBtn.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});

let projectLinks = document.querySelectorAll("a");
let projectFilters = document.querySelectorAll(".filter");

let projects = [
  {
    heading: "Timeline",
    class: "project2",
    techStack: "HTML/CSS",
    description: "Timeline which features experience information cards.",
    liveURL: "https://serene-ptolemy-3b08d3.netlify.app/",
    githubURL: "https://github.com/Jaydenmay-040/Glassmorphism-timeline",
  },
  {
    heading: "Contact Form",
    class: "project3",
    techStack: "HTML/CSS",
    description:
      "Contact form made with HTML/CSS. It sends submissions to a server and the owner gets a email notification",
    liveURL: "https://peaceful-franklin-056a5c.netlify.app",
    githubURL: "https://github.com/Jaydenmay-040/contact-form",
  },
  {
    heading: "JavaScript Music Player",
    class: "project4",
    techStack: "Javascript",
    description:
      "A site made with Javascript to play music. The site also has next, previous, seek and pause functionality",
      liveURL: "https://distracted-kare-0c7c42.netlify.app/",
      githubURL: "https://github.com/Jaydenmay-040/JS_Music_Player",
  },
  {
    heading: "JavaScript Calculator",
    class: "project5",
    techStack: "Javascript",
    description:
      "A simple site made with Javascript to for calculation of numbers, addition, muliplication, subraction and division",
    liveURL: "https://condescending-brown-8c2d51.netlify.app",
    githubURL: "https://github.com/Jaydenmay-040/js-calculator",
  },
  {
    heading: "BMI Calculator",
    class: "project6",
    techStack: "PYTHON",
    description:
      "Program made with tkinter module to calculate Body Mass Index and Ideal Body Mass Index. It then tells you what category you fall under.",
    liveURL: "https://replit.com/join/oieqvhuu-dekapaan",
    githubURL: "https://github.com/dekapaan/python-BMI-calculator",
  },
  {
    heading: "Pokemon Cards",
    class: "project7",
    techStack: "Javascript",
    description:
      " A site that has clickable pokeballs that transform into cards with the respective pokemon's details. The site also has next and previous functionality",
    liveURL: "https://cocky-neumann-949fe8.netlify.app",
    githubURL: "https://github.com/Jaydenmay-040/PokeDex",
  },
  {
    heading: "Tkinter-Adding-Numbers",
    class: "project8",
    techStack: "PYTHON",
    description:
      " Program made with tkinter module to add two digit. It tells you the sum of the digits",
    liveURL: "https://replit.com/@Jaydenmay040/tkinter-adding-numbers#.replit",
    githubURL: "https://github.com/Jaydenmay-040/tkinter-adding-numbers",
  },
  {
    heading: "Vuejs Live Weather App",
    class: "project9",
    techStack: "Vuejs",
    description:
      " A site made with a quasar and vuejs to provide weather conditions, current location, search bar and a functional day or night background changer according to current time",
    liveURL: "https://vuejs-live-weather-app.netlify.app/#/",
    githubURL: "https://github.com/Jaydenmay-040/Weather_App",
  },
  {
    heading: "CSS Cigarette",
    class: "project10",
    techStack: "HTML/CSS",
    description:
      " A simple site made with HTML and CSS that contains a cigarette and neon text",
    liveURL: "https://cigarette-css.netlify.app/",
    githubURL: "https://github.com/Jaydenmay-040/cigarette_css",
  },
];

function newCard(card) {
  let newCard = `
  <div class="project ${card.class} fade" techStack=${card.techStack}>
    <div>
    <p class="project-heading style txt">${card.heading}</p>
    <p class="project-tool style txt">${card.techStack}</p>
    <p class="project-description style txt">
      ${card.description}
    </p>
    </div> 
    <div class="project-buttons style txt">
      <a class="projectBtn" href=${card.liveURL} target="_blank"
        >Live</a
      ><a
        class="projectBtn"
        href=${card.githubURL}
        target="_blank"
        >Github</a
      >
    </div>
  </div>
  `;

  return newCard;
}

function displayCards() {
  let container = document.querySelector(".projects_container");
  for (project of projects) {
    let card = newCard(project);
    container.innerHTML += card;
  }
}

displayCards();

function filterProjects(category) {
  let projects = document.getElementsByClassName("project");
  if (category == "All") {
    for (project of projects) {
      project.style.display = "flex";
    }
    return;
  }
  for (project of projects) {
    project.style.display = "none";
  }
  let selected = document.querySelectorAll(`[techStack='${category}']`);
  console.log(selected);
  for (project of selected) {
    project.style.display = "flex";
  }
}