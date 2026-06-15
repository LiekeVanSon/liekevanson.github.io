(function () {
  function init() {
    document.querySelectorAll('#nav .has-dropdown').forEach(function (li) {
      var menu = li.querySelector('.dropdown-menu');
      if (!menu) return;

      // Move the menu to <body> so it is never clipped by overflow:hidden ancestors.
      document.body.appendChild(menu);
      menu.style.position = 'fixed';
      menu.style.zIndex   = '99999';
      menu.style.display  = 'none';

      function show() {
        var r = li.getBoundingClientRect();
        menu.style.top  = r.bottom + 'px';
        menu.style.left = r.left + 'px';
        menu.style.display = 'block';
      }
      function hide(e) {
        // Stay open while the pointer moves into the menu itself.
        if (e && menu.contains(e.relatedTarget)) return;
        menu.style.display = 'none';
      }

      li.addEventListener('mouseenter', show);
      li.addEventListener('mouseleave', hide);
      menu.addEventListener('mouseenter', show);
      menu.addEventListener('mouseleave', hide);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
