const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menuItems = document.querySelectorAll(".menu");
  menuItems.forEach(menu => menu.classList.toggle("hide"));
  console.log('hidden')
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);

  function viewerTemplate(image, path) {
    return `<div class="modal">
    <button class="close-modal">X</button>
    <img src="${image}" alt="${path}">
    </div>`;
  }

  function viewHandler(event) {
    const clicked = event.target;

    const srcAttr = clicked.src.split("-");

    const newImageSrc = `${srcAttr[0]}-full.jpeg`;
    
    const modal = viewerTemplate(newImageSrc, clicked.alt);

    document.body.insertAdjacentHTML("afterbegin",modal);

    document.querySelector(".close-modal").addEventListener("click", closeViewer)
  }
  function closeViewer() {
    // Remove the modal from the document
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
    }
}
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);