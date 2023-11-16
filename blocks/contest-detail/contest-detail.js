import { createOptimizedPicture } from '../../scripts/aem.js';

// media query match that indicates mobile/tablet width
// const isDesktop = window.matchMedia('(min-width: 900px)');

export default function decorate(block) {
  const div = document.createElement('div');

  const image = block.querySelectorAll('picture');

  // console.log(image);
  const divImg = document.createElement('div');
  divImg.className = 'contest-details-image';
  divImg.append(image[0]);
  div.append(divImg);
  div.className = 'contest-details-wrapper';
  block.children[1].children[1].className = 'contest-details-body';

  div.append(block.children[1].children[1]);

//   [...block.children].forEach((row) => {
//     const li = document.createElement('li');
//     while (row.firstElementChild) li.append(row.firstElementChild);
//     [...li.children].forEach((div) => {
//       if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
//       else div.className = 'cards-card-body';
//     });
//     ul.append(li);
//   });
  div.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(div);
}
