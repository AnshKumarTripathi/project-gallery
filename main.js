// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");
  themeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  // Save theme preference to localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Project Data
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    date: "2023-06-15",
    description:
      "A full-stack e-commerce platform with React frontend and Node.js backend.",
    image: "https://via.placeholder.com/300x180?text=E-Commerce",
    skills: ["javascript", "react", "node", "web"],
    github: "#",
    youtube: "#",
    website: "#",
  },
  {
    id: 2,
    title: "Weather App",
    date: "2023-04-10",
    description:
      "Real-time weather application using OpenWeather API with location detection.",
    image: "https://via.placeholder.com/300x180?text=Weather+App",
    skills: ["javascript", "html", "api", "web"],
    github: "#",
    youtube: "#",
    website: "#",
  },
  {
    id: 3,
    title: "Task Manager",
    date: "2022-11-20",
    description:
      "Productivity app to manage daily tasks with drag-and-drop functionality.",
    image: "https://via.placeholder.com/300x180?text=Task+Manager",
    skills: ["javascript", "html", "web"],
    github: "#",
    youtube: "#",
    website: "#",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    date: "2022-08-05",
    description:
      "Analytics dashboard for social media metrics with interactive charts.",
    image: "https://via.placeholder.com/300x180?text=Social+Dashboard",
    skills: ["javascript", "react", "web"],
    github: "#",
    youtube: "#",
    website: "#",
  },
  {
    id: 5,
    title: "Recipe Finder",
    date: "2021-12-15",
    description:
      "Search engine for recipes with filtering by ingredients and dietary restrictions.",
    image: "https://via.placeholder.com/300x180?text=Recipe+Finder",
    skills: ["javascript", "html", "api", "web"],
    github: "#",
    youtube: "#",
    website: "#",
  },
  {
    id: 6,
    title: "Memory Game",
    date: "2021-09-30",
    description: "Classic card matching game with timer and score tracking.",
    image: "https://via.placeholder.com/300x180?text=Memory+Game",
    skills: ["javascript", "html", "game"],
    github: "#",
    youtube: "#",
    website: "#",
  },
];

// Display Projects
const projectGrid = document.getElementById("project-grid");

function displayProjects(projectsToDisplay) {
  projectGrid.innerHTML = "";

  projectsToDisplay.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "card-project glass-panel";

    const year = project.date.split("-")[0];

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-date">${year}</p>
      <p class="project-description">${project.description}</p>
      <div class="project-skills">
        ${project.skills
          .map((skill) => `<span class="skill-tag">${skill}</span>`)
          .join("")}
      </div>
      <div class="project-buttons">
        <button class="btn git-btn" onclick="window.open('${
          project.github
        }', '_blank')">
          <i class="fab fa-github"></i> Code
        </button>
        ${
          project.youtube
            ? `<button class="btn yt-btn" onclick="window.open('${project.youtube}', '_blank')">
          <i class="fab fa-youtube"></i> Demo
        </button>`
            : ""
        }
        ${
          project.website
            ? `<button class="btn web-btn" onclick="window.open('${project.website}', '_blank')">
          <i class="fas fa-globe"></i> Live
        </button>`
            : ""
        }
      </div>
    `;

    projectGrid.appendChild(projectCard);
  });
}

// Filter Projects
const applyFiltersBtn = document.getElementById("apply-filters");
const resetFiltersBtn = document.getElementById("reset-filters");

function filterProjects() {
  // Get selected skills
  const selectedSkills = Array.from(
    document.querySelectorAll('input[name="skill"]:checked')
  ).map((el) => el.value);

  // Get selected concepts
  const selectedConcepts = Array.from(
    document.querySelectorAll('input[name="concept"]:checked')
  ).map((el) => el.value);

  // Get selected date
  const selectedDate = document.querySelector(
    'input[name="date"]:checked'
  ).value;

  // Filter projects
  let filteredProjects = projects;

  if (selectedSkills.length > 0) {
    filteredProjects = filteredProjects.filter((project) =>
      project.skills.some((skill) => selectedSkills.includes(skill))
    );
  }

  if (selectedConcepts.length > 0) {
    filteredProjects = filteredProjects.filter((project) =>
      project.skills.some((concept) => selectedConcepts.includes(concept))
    );
  }

  if (selectedDate !== "all") {
    filteredProjects = filteredProjects.filter((project) =>
      project.date.startsWith(selectedDate)
    );
  }

  displayProjects(filteredProjects);
}

function resetFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  document.querySelector('input[type="radio"][value="all"]').checked = true;

  displayProjects(projects);
}

applyFiltersBtn.addEventListener("click", filterProjects);
resetFiltersBtn.addEventListener("click", resetFilters);

// Search Functionality
const searchInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-btn");

function searchProjects() {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm.trim() === "") {
    displayProjects(projects);
    return;
  }

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.skills.some((skill) => skill.toLowerCase().includes(searchTerm))
  );

  displayProjects(filteredProjects);
}

searchBtn.addEventListener("click", searchProjects);
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchProjects();
  }
});

// Initialize with all projects
displayProjects(projects);
