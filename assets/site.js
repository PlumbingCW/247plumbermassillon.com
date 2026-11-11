(function () {
  var root = document.documentElement;
  root.classList.add('js-on');
  var toggle = document.getElementById('mob-toggle');
  var drawer = document.getElementById('mob-drawer');
  var overlay = document.getElementById('mob-overlay');
  var closeBtn = document.getElementById('mob-close');
  function setOpen(open) {
    root.classList.toggle('nav-open', open);
    root.style.overflow = open ? 'hidden' : '';
    if (toggle) { toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); }
    if (drawer) { drawer.setAttribute('aria-hidden', open ? 'false' : 'true'); }
  }
  if (toggle) { toggle.addEventListener('click', function () { setOpen(!root.classList.contains('nav-open')); }); }
  if (overlay) { overlay.addEventListener('click', function () { setOpen(false); }); }
  if (closeBtn) { closeBtn.addEventListener('click', function () { setOpen(false); }); }
  if (drawer) {
    drawer.addEventListener('click', function (e) {
      if (e.target && e.target.closest && e.target.closest('a')) { setOpen(false); }
    });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); } });
  window.addEventListener('resize', function () { if (window.innerWidth > 768) { setOpen(false); } });
  var qs = document.querySelectorAll('.faq-q');
  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener('click', function () {
      var item = this.parentNode;
      var ans = item.querySelector('.faq-a');
      var open = item.classList.contains('open');
      item.classList.toggle('open', !open);
      this.setAttribute('aria-expanded', open ? 'false' : 'true');
      ans.style.maxHeight = open ? '0px' : ans.scrollHeight + 'px';
    });
  }
})();
