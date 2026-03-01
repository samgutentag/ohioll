(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var dropdown = document.querySelector('.has-dropdown');
  var dropdownLink = dropdown ? dropdown.querySelector(':scope > a') : null;

  if (toggle && nav) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('open');
      if (dropdown) dropdown.classList.remove('open');
    });
  }

  if (dropdownLink) {
    dropdownLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('open');
      }
    });
  }

  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      if (dropdown) dropdown.classList.remove('open');
    }
  });
})();
