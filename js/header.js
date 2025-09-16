// // header.js
// document.addEventListener("DOMContentLoaded", () => {

// fetch('header.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('header-placeholder').innerHTML = data;
//   })
//   .catch(error => console.error('Erreur chargement header:', error));
// });

// header.js
document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
      <header class="header_section" style="background-color: var(--vertFoncer);">
        <div class="container">
          <nav class="navbar navbar-expand-lg custom_nav-container">
            <a class="navbar-brand" href="index.html"><span>GCI</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span class=""></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link text-white" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="about.html">About</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    `;
  
    document.getElementById('header-placeholder').innerHTML = headerHTML;
  });
  
  