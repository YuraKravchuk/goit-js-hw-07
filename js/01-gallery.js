import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const renderList = (arr, container) => {
  const markup = arr
    .map(
      (item) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}" onclick = "return false;">
            <img
            class="gallery__image"
            src="${item.preview}" 
            data-source="${item.original}" 
            alt="${item.description}"/>
        </a>
    </li>`
    )
    .join("");
  container.insertAdjacentHTML("beforeend", markup);
};
const handListClick = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const lightBox = basicLightbox.create(
    `<div class="modal"><img src="${e.target.dataset.source}"/></div>`,
    {
      onShow: (lightBox) => {
        document.addEventListener("keydown", onEscClose);
      },
      onClose: (lightBox) => {
        document.removeEventListener("keydown", onEscClose);
      },
    }
  );
  lightBox.show();
  function onEscClose(e) {
    if (e.code === "Escape") {
      lightBox.close();
    }
  }
};

renderList(galleryItems, gallery);
gallery.addEventListener("click", handListClick);
