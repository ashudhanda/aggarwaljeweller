// Mobile menu toggle: shows/hides the nav menu and keeps the button's
// aria-expanded state in sync so assistive tech announces the menu state.
// The open state is a CSS class (`.menu.open`, defined under the 900px
// breakpoint) instead of inline styles, so resizing back to desktop can
// never leave the menu stuck as an absolute overlay.
// The menu closes on a nav-link click, on a tap/click anywhere outside
// the menu and button, and on Escape (which returns focus to the button),
// so it never sits open over the content after navigation.
// Guards both elements so a missing button or menu fails silently instead
// of throwing on page load.
var btn = document.querySelector('.hamburger');
var m = document.querySelector('.menu');
if (btn && m) {
  // Single close path for every dismissal route below, so the class
  // removal and the aria-expanded sync can never drift apart.
  function closeMenu(refocus) {
    m.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    if (refocus) btn.focus();
  }
  btn.addEventListener('click', function(){
    var open = m.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  // Dismiss the menu once a destination is chosen.
  m.addEventListener('click', function(e){
    if (e.target.closest && e.target.closest('a')) {
      closeMenu(false);
    }
  });
  // Dismiss on a tap/click outside the menu and the button, so the menu
  // never needs a second toggle tap to get out of the way. The button
  // itself is excluded: its own click handler owns the toggle, and this
  // listener runs after it in the bubble phase.
  document.addEventListener('click', function(e){
    if (m.classList.contains('open') && !m.contains(e.target) && !btn.contains(e.target)) {
      closeMenu(false);
    }
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && m.classList.contains('open')) {
      closeMenu(true);
    }
  });
}
