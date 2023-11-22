export default function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');
  div.className = 'back-wrapper';
  const anchor = document.createElement('a');
  anchor.className = 'back-link';
  anchor.href = '/';
  anchor.textContent = 'Discovery';
  div.appendChild(anchor);

  block.textContent = '';
  block.append(div);
}
