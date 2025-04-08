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
    title: "Prahavati-Smart India Hackathon",
    date: "2024-06-15",
    description:
      "A simulation project that optimizes traffic signal timings using reinforcement learning.",
    image: "./Images/prahavati.png", // Relative path to the image
    skills: ["python", "reinforcement learning", "game"],
    github:
      "https://github.com/AnshKumarTripathi/Smart-Traffic-Control--phase-one",
    youtube: "https://youtu.be/eP2X-dVapPs",
    // website: "#",
  },
  {
    id: 2,
    title: "Folder Backup Script",
    date: "2024-06-17",
    description:
      "This script is designed to automatically copy a folder from a source directory to a destination directory every day at a specified time.",
    image: "./Images/backup.png", // Relative path to the image
    skills: ["python", "automoation"],
    github: "https://github.com/AnshKumarTripathi/backup-documents",
    // youtube: "#",
    // website: "#",
  },
  {
    id: 3,
    title: "File Organization Script",
    date: "2024-06-17",
    description:
      "This script organizes files in a specified directory into subdirectories based on their file types. The file types are determined by their extensions, and the script moves each file into a corresponding subdirectory.",
    image: "./Images/backup.png", // Relative path to the image
    skills: ["python", "automoation"],
    github: "https://github.com/AnshKumarTripathi/file-organizer",
    // youtube: "#",
    // website: "#",
  },
  {
    id: 4,
    title: "Spam Detection Using Random Forest Classifier",
    date: "2024-06-18",
    description:
      "This project implements a spam detection system using a Random Forest Classifier. The model is trained on a dataset of emails labeled as spam or ham (not spam) and can classify new emails based on their content.",
    image: "./Images/backup.png", // Relative path to the image
    skills: [
      "Jupyter Notebook",
      "NLP",
      "Feature Engineering",
      "Data Preprocessing",
      "Machine Learning",
    ],
    github:
      "https://github.com/AnshKumarTripathi/email-spam-detection-randomForest",
    // youtube: "#",
    // website: "#",
  },
  {
    id: 5,
    title: "Pong Game in Assembly",
    date: "2024-10-09",
    description:
      "This project is a classic Pong game implemented in assembly language. The aim was to challenge ourselves by diving deep into low-level programming and understanding the intricacies of hardware interactions.",
    image: "./Images/pong.png", // Relative path to the image
    skills: ["assembly", "game"],
    github: "https://github.com/AnshKumarTripathi/PONG-Game-Assembly",
    youtube: "https://youtu.be/B1JLMqeY6RM",
    // website: "#",
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
    const month = project.date.split("-")[1];
    const day = project.date.split("-")[2];

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-date">${year + "/" + month + "/" + day}</p>
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
