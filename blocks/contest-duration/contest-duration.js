export default function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');
  div.className = 'contest-duration-items';

  [...block.querySelectorAll('li')].forEach((row) => {
    const lidiv = document.createElement('div');
    lidiv.className = 'contest-duration-item';
    lidiv.append(row.firstElementChild);
    div.append(lidiv);
  });

  block.append(div);
  block.querySelectorAll('ul').remove();
}
