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
              alt="${item.description}"/>
        </a>
    </li>`
    )
    .join("");
  container.insertAdjacentHTML("beforeend", markup);
};

console.log(galleryItems);
renderList(galleryItems, gallery);
gallery.addEventListener("click", () => {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
});
