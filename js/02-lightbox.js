import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const renderList = (arr, container) => {
  const markup = arr
    .map(
      (item) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}" onclick="return false;">
            <img
              class="gallery__image"
              src="${item.preview}" 
              alt="${item.description}"/>
        </a>
    </li>`
    )
    .join("");
  container.insertAdjacentHTML("beforeend", markup);
};

console.log(galleryItems);
renderList(galleryItems, gallery);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
