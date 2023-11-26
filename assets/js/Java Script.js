const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('a').
  forEach(link => {
    if (link.href.includes('${activePage')) {
      link.classList.add('active');
    }
  })

// PASSWORD 

function togglePW() {
  document.querySelector('.eye').classList.toggle('slash');
  var password = document.querySelector('[name=password]');
  if (password.getAttribute('type') === 'password') {
    password.setAttribute('type', 'text');
  } else {
    password.setAttribute('type', 'password');
  }
}

// DISPLAY NONE 

$("#hide").click(function(){
  $(".rb-scroll").hide();
});
