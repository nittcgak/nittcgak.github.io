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
