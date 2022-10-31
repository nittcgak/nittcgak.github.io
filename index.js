const modal = document.querySelector(".modal");
window.addEventListener("DOMContentLoaded", () => {
  modal.showModal();
});

modal.addEventListener(
  "click",
  (event) => {
    if (event.target === modal) modal.close();
  },
  false
);

const content = document.querySelector(".modal_content");
content.addEventListener(
  "click",
  (event) => {
    event.stopPropagation();
  },
  false
);

let dialog;
const imgs = document.querySelectorAll(".card_button");
imgs.forEach((img) => {
  img.addEventListener("click", (event) => {
    const button = document.getElementById(event.target.id);
    dialog = button.nextElementSibling;
    dialog.showModal();
  });
});

const cardModals = document.querySelectorAll(".card_modal");

cardModals.forEach((card) => {
  card.addEventListener(
    "click",
    (event) => {
      if (event.target === dialog) dialog.close();
    },
    false
  );
});

const cards = document.querySelectorAll(".card_button");
const options = {
  root: null,
  rootMargin: "-30% 0px",
  threshold: 0,
};

const whenIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activate(entry);
    }
  });
};

const activate = (entry) => {
  const el = document.querySelector(`#${entry.target.id}`);
  el.classList.add("active");
};

const observer = new IntersectionObserver(whenIntersect, options);

cards.forEach((card) => {
  observer.observe(card);
});

const pagination = document.querySelectorAll(".content");
const activatePagination = (element) => {
  const currentIndex = document.querySelector("#pagination .active");
  if (currentIndex !== null) {
    currentIndex.classList.remove("active");
  }
  if (element.id !== "top") {
    const newIndex = document.querySelector(`a[href='#${element.id}']`);
    newIndex.classList.add("active");
  }
};
const targets = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      activatePagination(entry.target);
    }
  });
};
const paginationObserver = new IntersectionObserver(targets, options);
pagination.forEach((el) => {
  paginationObserver.observe(el);
});
