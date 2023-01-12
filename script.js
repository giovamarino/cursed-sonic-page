function repeatAlert() {
  setInterval(() => {
    alert("Welcome!!!");
  }, 3000);
}

let modalBackground = document.getElementById("modalBackground");

function vBucks() {
  setInterval(() => {
    modalBackground.style.display = "block";
    clickOffModal();
  }, 45000);
}

let clickOffModal = () => {
  if (modalBackground.style.display === "block") {
    modalBackground.addEventListener("click", () => {
      modalBackground.style.display = "none";
    });
  }
};

repeatAlert();
vBucks();
