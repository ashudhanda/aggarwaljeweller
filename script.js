// Mobile menu toggle: shows/hides the nav menu and keeps the button's
// aria-expanded state in sync so assistive tech announces the menu state.
// Guards both elements so a missing button or menu fails silently instead
// of throwing on page load.
var btn = document.querySelector('.hamburger');
var m = document.querySelector('.menu');
if (btn && m) {
  btn.addEventListener('click', function(){
    var open = m.style.display === 'flex';
    m.style.display = open ? 'none' : 'flex';
    btn.setAttribute('aria-expanded', String(!open));
    m.style.position = 'absolute'; m.style.top = '76px'; m.style.left = '0'; m.style.right = '0';
    m.style.flexDirection = 'column'; m.style.background = '#fff'; m.style.padding = '18px 24px';
    m.style.borderBottom = '1px solid var(--border)'; m.style.gap = '16px';
  });
}
