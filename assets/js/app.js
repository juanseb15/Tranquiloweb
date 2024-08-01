const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav");
const navLink = document.querySelectorAll("#nav-link");

hamburger.addEventListener("click", openMenu);

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

window.addEventListener("scroll", () => {
  if (navMenu.classList.contains("active")) {
    closeMenu();
  }
});





if (jQuery(".toggle .toggle-title").hasClass('active')) {
    jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
}
jQuery(".toggle .toggle-title").click(function() {
    if (jQuery(this).hasClass('active')) {
        jQuery(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
    } else {
        jQuery(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
    }
});





let slideIndex = 1;
showSlides(slideIndex);function plusSlide(n) {
  showSlides(slideIndex += n);
}function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}function prevSlide() {
  plusSlide(-1);
}function nextSlide() {
  plusSlide(1);
}

/* popup button code */

document.addEventListener('DOMContentLoaded', function() {
  const popupOverlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');
  const bookNowButton = document.getElementById('bookNowButton');

  function openPopup() {
    popupOverlay.style.display = 'block';
  }

  function closePopupFunc() {
    popupOverlay.style.display = 'none';
  }

  bookNowButton.addEventListener('click', function(event) {
    event.preventDefault();
    openPopup();
  });


  closePopup.addEventListener('click', closePopupFunc);

  popupOverlay.addEventListener('click',function(event) {
    if (event.target === popupOverlay) {
      closePopupFunc();
    }
  });
});

