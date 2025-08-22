const tabButtons = document.querySelectorAll(".tab-list");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Remove active classes from all buttons and hide content
    tabButtons.forEach((btn) => btn.classList.remove("active-tab"));
    tabContents.forEach((content) => content.classList.add("hidden"));

    // Add active classes to the clicked button and show its content
    button.classList.add("active-tab");
    tabContents[index].classList.remove("hidden");
  });
});

const openModal = document.querySelectorAll(".modal-open img");
const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementById("closeModal");

let currentIndex = 0;

function showImage(index) {
  modalContent.innerHTML = "";
  modalContent.querySelectorAll("img, h3").forEach((el) => el.remove());
  const clonedImage = openModal[index].cloneNode(true);
  const clonedText = openModal[index].nextElementSibling.cloneNode(true);
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(clonedText);
  modalContent.appendChild(clonedImage);
}
function toggleModal() {
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "unset" : "hidden";
}
openModal.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = index;
    showImage(currentIndex);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});
closeBtn.addEventListener("click", toggleModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) toggleModal();
});
