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
    date: "2024-09-15",
    description:
      "A simulation project that optimizes traffic signal timings using reinforcement learning.",
    image: "./Images/prahavati.png",
    skills: ["python", "reinforcement learning", "game"],
    github:
      "https://github.com/AnshKumarTripathi/Smart-Traffic-Control--phase-one",
    youtube: "https://youtu.be/eP2X-dVapPs",
    // website:"#",
  },
  {
    id: 2,
    title: "Folder Backup Script",
    date: "2024-09-17",
    description:
      "This script is designed to automatically copy a folder from a source directory to a destination directory every day at a specified time.",
    image: "./Images/backup.png",
    skills: ["python", "automoation"],
    github: "https://github.com/AnshKumarTripathi/backup-documents",
    // website:"#",
  },
  {
    id: 3,
    title: "File Organization Script",
    date: "2024-09-17",
    description:
      "This script organizes files in a specified directory into subdirectories based on their file types. The file types are determined by their extensions, and the script moves each file into a corresponding subdirectory.",
    image: "./Images/backup.png",
    skills: ["python", "automoation"],
    github: "https://github.com/AnshKumarTripathi/file-organizer",
    // website:"#",
  },
  {
    id: 4,
    title: "Spam Detection Using Random Forest Classifier",
    date: "2024-09-18",
    description:
      "This project implements a spam detection system using a Random Forest Classifier. The model is trained on a dataset of emails labeled as spam or ham (not spam) and can classify new emails based on their content.",
    image: "./Images/random.png",
    skills: [
      "Jupyter Notebook",
      "NLP",
      "Feature Engineering",
      "Data Preprocessing",
      "Machine Learning",
    ],
    github:
      "https://github.com/AnshKumarTripathi/email-spam-detection-randomForest",
    // website:"#",
  },
  {
    id: 5,
    title: "Pong Game in Assembly",
    date: "2024-11-09",
    description:
      "This project is a classic Pong game implemented in assembly language. The aim was to challenge ourselves by diving deep into low-level programming and understanding the intricacies of hardware interactions.",
    image: "./Images/pong.png",
    skills: ["assembly", "game"],
    github: "https://github.com/AnshKumarTripathi/PONG-Game-Assembly",
    youtube: "https://youtu.be/B1JLMqeY6RM",
    // website:"#",
  },
  {
    id: 6,
    title: "Handwritten Digit Recognition",
    date: "2024-11-07",
    description:
      "This project involves recognizing handwritten digits using a neural network trained on the MNIST dataset. The MNIST dataset contains 70,000 images of handwritten digits, each labeled with the corresponding digit.",
    image: "./Images/handwritten.png",
    skills: [
      "Jupyter Notebook",
      "NLP",
      "Feature Engineering",
      "Data Preprocessing",
      "Machine Learning",
    ],
    github:
      "https://github.com/AnshKumarTripathi/Handwritten-Digit-Recognition-mnist",
    // youtube: "#",
    // website:"#",
  },
  {
    id: 7,
    title: "Satkarma LEO Club Booklet",
    date: "2024-11-23",
    description:
      "Me with my team builkt the club booklet showcasing the club activites we did, and hosted that booklet on github pages so everyone can access.",
    image: "./Images/leo-booklet.png",
    skills: ["html", "css", "javascript", "content writing", "magzine design"],
    github: "https://github.com/AnshKumarTripathi/satkarma-leo-booklet",
    // youtube: "#",
    website: "https://anshkumartripathi.github.io/satkarma-leo-booklet/#home",
  },
  {
    id: 8,
    title: "Design Engineering Project (Budget Tracker)",
    date: "2025-01-10",
    description:
      "This project was developed as part of the Design Engineering Project for Semester 5.",
    image: "./Images/de.png",
    skills: ["html", "css", "javascript", "web"],
    github: "https://github.com/AnshKumarTripathi/satkarma-leo-booklet",
    // youtube: "#",
    website: "https://anshkumartripathi.github.io/satkarma-leo-booklet/#home",
  },
  {
    id: 9,
    title: "Human Pose Estimation Web App (AICTE-Internship)",
    date: "2025-01-12",
    description:
      "A web-based application that performs human pose estimation on uploaded images using machine learning techniques, specifically leveraging the OpenPose model with OpenCV in a Streamlit environment.",
    image: "./Images/human-pose.png",
    skills: ["python", "openCV", "streamlit", "web"],
    github:
      "https://github.com/AnshKumarTripathi/AICTE-Internship-Dec-Jan-Techsaksham",
    // youtube: "#",
    // website: "",
  },
  {
    id: 10,
    title: "Sentiment Analysis Platform",
    date: "2025-01-15",
    description:
      "This is a Flask-based web application that performs real-time sentiment analysis on tweets, text, and web content. The application leverages the `transformers` library for sentiment analysis and uses `Selenium` for web scraping.",
    image: "https://picsum.photos/200/300/?blur",
    skills: ["python", "flask", "NLP", "web scrapping", "web"],
    github: "https://github.com/AnshKumarTripathi/sentiment_analysis_platform",
    // youtube: "#",
    // website: "",
  },
  {
    id: 11,
    title: "Linkdln Sentiment Analysis Platform",
    date: "2025-01-19",
    description:
      "This is a Flask-based web application that performs real-time sentiment analysis on tweets, text, and web content. The application leverages the `transformers` library for sentiment analysis and uses `Selenium` for web scraping.",
    image: "./Images/linkdln.png",
    skills: ["python", "flask", "NLP", "web scrapping", "web"],
    github: "https://github.com/AnshKumarTripathi/sentiment_analysis_platform",
    youtube: "https://youtu.be/MRhXm7maprA",
    // website: "",
  },
];

// Display Projects
const projectGrid = document.getElementById("project-grid");

function displayProjects(projectsToDisplay) {
  // Sort projects by date (newest first)
  const sortedProjects = [...projectsToDisplay].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  projectGrid.innerHTML = "";

  sortedProjects.forEach((project) => {
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

// Initialize with all projects (sorted by date)
displayProjects(projects);
