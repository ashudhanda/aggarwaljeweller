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
const menuButton = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
if (menuButton && menu) {
  // Single close path for every dismissal route below, so the class
  // removal and the aria-expanded sync can never drift apart.
  function closeMenu(refocus) {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    if (refocus) menuButton.focus();
  }
  menuButton.addEventListener('click', function(){
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  // Dismiss the menu once a destination is chosen.
  menu.addEventListener('click', function(e){
    if (e.target.closest && e.target.closest('a')) {
      closeMenu(false);
    }
  });
  // Dismiss on a tap/click outside the menu and the button, so the menu
  // never needs a second toggle tap to get out of the way. The button
  // itself is excluded: its own click handler owns the toggle, and this
  // listener runs after it in the bubble phase.
  document.addEventListener('click', function(e){
    if (menu.classList.contains('open') && !menu.contains(e.target) && !menuButton.contains(e.target)) {
      closeMenu(false);
    }
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu(true);
    }
  });
  // Close the menu when the viewport leaves the mobile breakpoint
  // (e.g. rotating a tablet or widening the window). On desktop the
  // menu is always visible as a nav row, so a lingering `.open` class
  // would leave aria-expanded stuck on "true" for a menu that is no
  // longer collapsible. The 900px value must match the breakpoint in
  // style.css.
  var mobileQuery = window.matchMedia('(max-width: 900px)');
  function onBreakpointChange(e) {
    if (!e.matches) closeMenu(false);
  }
  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener('change', onBreakpointChange);
  } else if (mobileQuery.addListener) {
    // Deprecated API, kept for older browsers without addEventListener.
    mobileQuery.addListener(onBreakpointChange);
  }
}
