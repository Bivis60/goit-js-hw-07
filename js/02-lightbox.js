import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const genGalleryItem = galleryItems
  .map((item) => {
    return `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a></li>`;
  }).join("");
galleryEl.insertAdjacentHTML("beforeend", genGalleryItem);

new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData:  'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    // scrollZoom: false,
})
console.log(galleryItems);
