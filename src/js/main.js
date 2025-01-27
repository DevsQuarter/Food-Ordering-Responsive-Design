$(document).ready(() => {
  // Header
  $('#page-header').load('src/partials/header.html');
  // Hero
  $('#hero').load('src/partials/hero.html');
  // Specials
  $('#special').load('src/partials/special.html');
  // Service
  $('#service').load('src/partials/service.html');
  // Menu
  $('#menu').load('src/partials/menu.html');
  // Advertisement
  $('#advertisement').load('src/partials/advertisement.html');
  // Footer
  $('#page-footer').load('src/partials/footer.html');
});


const showMenu = {
  showMenu1() {
    $('.menu-panel').css('display', 'none');
    $('.menu-panel').eq(0).css('display', 'flex');
  },
  showMenu2() {
    $('.menu-panel').css('display', 'none');
    $('.menu-panel').eq(1).css('display', 'flex');

    // var btn2 = document.getElementById('menu-nav-btn2');
    // btn2.style.backgroundColor = "rgba(245, 71, 72, 1)";
    // btn2.style.border = "2px solid rgba(245, 71, 72, 1)";
    // btn2.style.color = "rgba(255, 255, 255, 1)";
    // btn2.style.opacity = "100%";
  },
  showMenu3() {
    $('.menu-panel').css('display', 'none');
    $('.menu-panel').eq(2).css('display', 'flex');
  },
  showMenu4() {
    $('.menu-panel').css('display', 'none');
    $('.menu-panel').eq(3).css('display', 'flex');
  },
  showMenu5() {
    $('.menu-panel').css('display', 'none');
    $('.menu-panel').eq(4).css('display', 'flex');
  },
  showMenu6() {
    $('.menu-panel').css('display', 'none');
    $('.menu-panel').eq(5).css('display', 'flex');
  },
  showMenu7() {
    $('.menu-panel').css('display', 'none');
    $('.menu-panel').eq(6).css('display', 'flex');
  },
  showMenu8() {
    $('.menu-panel').css('display', 'none');
    $('.menu-panel').eq(7).css('display', 'flex');
  },
};

// var defaultBtnStyle = getComputedStyle(document.getElementsByClassName(".menu-nav-btn"));
// var selectedBtnStyle = getComputedStyle(document.getElementsByClassName(".menu-nav-btn:active"));

// document.getElementById("menu-nav-btn1").onclick = showMenu.showMenu1();
// document.getElementById("menu-nav-btn2").onclick = showMenu.showMenu2();
// document.getElementById("menu-nav-btn3").onclick = showMenu.showMenu3();
// document.getElementById("menu-nav-btn4").onclick = showMenu.showMenu4();
// document.getElementById("menu-nav-btn5").onclick = showMenu.showMenu5();
// document.getElementById("menu-nav-btn6").onclick = showMenu.showMenu6();
// document.getElementById("menu-nav-btn7").onclick = showMenu.showMenu7();
// document.getElementById("menu-nav-btn8").onclick = showMenu.showMenu8();

