import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const genGalleryItem = galleryItems.map((item) => {
  return (
`<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`)
}).join('')
gallery.insertAdjacentHTML('beforeend', genGalleryItem);



gallery.addEventListener('click', onOpenModal);

function onOpenModal (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
    `)
    instance.show();
    window.addEventListener('keydown', onCloseModal);
    function onCloseModal (event) {
      if (event.code !== 'Escape') return;
      instance.close()
      window.removeEventListener('keydown', onCloseModal);
    }
    
}
console.log(galleryItems);