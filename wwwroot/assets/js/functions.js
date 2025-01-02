document.addEventListener("DOMContentLoaded", _ => {
   const topNav = document.getElementsByName("topNav")[0];
   if (topNav) {
       window.onscroll = () => {
           if (window.scrollY > 50) {
               topNav.classList.add('scrolledNav', 'py-0')
           }
           else {
               topNav.classList.remove('scrolledNav', 'py-0')
           }
       }
   }
});

function toggleMenu(e) {
    e.target.classList.toggle('collapsed');
    document.getElementById('top-navbar-menu-wrapper').classList.toggle('show');
}
