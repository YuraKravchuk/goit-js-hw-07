import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const renderList = (arr, container) => {
  const markup = arr
    .map(
      (item) =>
        `<li class="gallery_item">
        <a class="gallery_link" href="${item.original}" onclick="return false;">
            <img
            class="gallery_image"
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
  const modal = basicLightbox.create(
    `<div class="modal"><img src="${e.target.dataset.source}"/></div>`
  );
  modal.show();
  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      modal.close();
    }
  });
};
renderList(galleryItems, gallery);
gallery.addEventListener("click", handListClick);

// console.log(galleryItems);
