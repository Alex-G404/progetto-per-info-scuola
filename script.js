// 1. Dissolvenza immagine Hero allo scorrimento
const heroBg = document.getElementById("heroBg");
const heroContent = document.getElementById("heroContent");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Dissolvenza progressiva con scroll
  const opacity = Math.max(0, 1 - scrollPosition / (windowHeight * 0.75));
  
  if (heroBg) {
    heroBg.style.opacity = opacity;
  }
  if (heroContent) {
    heroContent.style.opacity = opacity;
    heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  }
});

// 2. Dati dei progetti per i 5 anni di scuola superiore
const schoolProjects = {
  1: {
    yearText: "1° Anno di Superiori",
    title: "Primi Passi col Web",
    tech: "HTML5 & CSS3",
    desc: "Il primo sito web sviluppato per apprendere la formattazione, la struttura di un ipertesto e l'organizzazione dei layout.",
    link: "https://github.com/"
  },
  2: {
    yearText: "2° Anno di Superiori",
    title: "Algoritmi & Basi di Programmazione",
    tech: "C++ / Flowchart",
    desc: "Studio e implementazione dei primi costrutti logici: condizioni, cicli iterativi, array e funzioni modulari.",
    link: "https://github.com/"
  },
  3: {
    yearText: "3° Anno di Superiori",
    title: "Programmazione ad Oggetti",
    tech: "Java / OOP",
    desc: "Sviluppo di applicazioni desktop strutturate ad oggetti con interfacce grafiche ed esportazione dati su file locali.",
    link: "https://github.com/"
  },
  4: {
    yearText: "4° Anno di Superiori",
    title: "Applicazioni Web & Database",
    tech: "JavaScript, PHP & MySQL",
    desc: "Piattaforma dinamica con gestione account, interrogazione di query relazionali e manipolazione del DOM in tempo reale.",
    link: "https://github.com/"
  },
  5: {
    yearText: "5° Anno di Superiori",
    title: "Progetto di Esame di Stato",
    tech: "Full-Stack Web App & REST API",
    desc: "Applicazione web completa creata per la maturità, dotata di architettura responsive e interfacciamento con API esterne.",
    link: "https://github.com/"
  }
};

// 3. Gestione Finestra Modale (Popup Progetti)
const modal = document.getElementById("project-modal");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalTech = document.getElementById("modal-tech");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.getElementById("close-modal");
const nodeButtons = document.querySelectorAll(".node-btn");

nodeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const year = button.getAttribute("data-year");
    const data = schoolProjects[year];

    if (data) {
      modalTag.textContent = data.yearText;
      modalTitle.textContent = data.title;
      modalTech.textContent = `Tecnologie: ${data.tech}`;
      modalDesc.textContent = data.desc;
      modalLink.setAttribute("href", data.link);
      
      modal.showModal();
    }
  });
});

closeBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const clickedInside = (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
  if (!clickedInside) {
    modal.close();
  }
});

// 4. Gestione Accordion (FAQ)
const headers = document.getElementsByClassName("accordion-header");

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function () {
    const item = this.parentElement;
    const allItems = document.getElementsByClassName("accordion-item");

    for (let j = 0; j < allItems.length; j++) {
      if (allItems[j] !== item) {
        allItems[j].classList.remove("active");
        allItems[j].querySelector(".icon").textContent = "+";
      }
    }

    item.classList.toggle("active");
    const icon = this.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "-" : "+";
  });
}