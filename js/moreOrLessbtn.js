document.querySelectorAll('.toggle-text').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const p = this.previousElementSibling;
      if(p.style['-webkit-line-clamp'] === 'unset') {
        p.style['-webkit-line-clamp'] = '2';
        this.textContent = 'Show more';
      } else {
        p.style['-webkit-line-clamp'] = 'unset';
        this.textContent = 'Show less';
      }
    });
  });
  