// Mobile menu toggle: shows/hides the nav menu and keeps the button's
// aria-expanded state in sync so assistive tech announces the menu state.
// The open state is a CSS class (`.menu.open`, defined under the 900px
// breakpoint) instead of inline styles, so resizing back to desktop can
// never leave the menu stuck as an absolute overlay.
// Guards both elements so a missing button or menu fails silently instead
// of throwing on page load.
var btn = document.querySelector('.hamburger');
var m = document.querySelector('.menu');
if (btn && m) {
  btn.addEventListener('click', function(){
    var open = m.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  // Dismiss the menu once a destination is chosen, and on Escape, so it
  // never sits open over the content after navigation.
  m.addEventListener('click', function(e){
    if (e.target.closest && e.target.closest('a')) {
      m.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && m.classList.contains('open')) {
      m.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
}
