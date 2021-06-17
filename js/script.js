
$("#phone1").mask("+7 (999) 999-99-99");

$(document).ready(function($) {
    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.section_button li:first').addClass('active');
    $('.section_button li').click(function(event) {
    $('.section_button li').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
    });
});
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 5,
    spaceBetween: 10,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1190: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          1150: {
            slidesPerView: 3,
            spaceBetween: 10
          },
        790: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          740: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          610: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          310: {
            slidesPerView: 1,
            spaceBetween: 10
          },
        }
  });

let reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let inp=document.querySelector('#phone1');

document.querySelector('#valid_button').onclick=function (e) {
    e.preventDefault();
    if (!validate(reg, inp.value)) {
        notValid(inp);
    } else {
        valid(inp);
    }
}

function validate(regex, inp) {
    return regex.test(inp);
}

function notValid(inp) {
    inp.classList.add('is-invalid');
}

function valid(inp) {
    inp.value="";
    inp.classList.remove('is-invalid');
}
let reg4 = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let inp4=document.querySelector('#phone4');

document.querySelector('#valid_button4').onclick=function (e) {
    e.preventDefault();
    if (!validate(reg4, inp4.value)) {
        notValid(inp4);
    } else {
        valid(inp4);
    }
}

function validate(regex4, inp4) {
    return regex4.test(inp4);
}

function notValid(inp4) {
    inp4.classList.add('is-invalid');
}

function valid(inp4) {
    inp4.value="";
    inp4.classList.remove('is-invalid');
}
let reg1 = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let inp1=document.querySelector('#phone2');
let reg2=/[A-Za-zA-Яа-яЁё]/;
let inp2=document.querySelector('#name2');

document.querySelector('#valid_button1').onclick=function (e) {
    e.preventDefault();
    if (!validate(reg1, inp1.value)) {
        notValid(inp1);
    } else {
        valid(inp1);
    }
    if (!validate(reg2, inp2.value)) {
      notValid(inp2);
    } else {
      valid(inp2);
    }
}

function validate(regex1, inp1) {
    return regex1.test(inp1);
}

function notValid(inp1) {
    inp1.classList.add('is-invalid1');
}

function valid(inp1) {
    inp1.value="";
    inp1.classList.remove('is-invalid1');
}
function validate(regex2, inp2) {
  return regex2.test(inp2);
}

function notValid(inp2) {
  inp2.classList.add('is-invalid1');
}

function valid(inp2) {
  inp2.value="";
  inp2.classList.remove('is-invalid1');
}

let reg3 = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let inp3=document.querySelector('#phone3');

document.querySelector('#valid_button2').onclick=function (e) {
    e.preventDefault();
    if (!validate(reg3, inp3.value)) {
        notValid(inp3);
    } else {
        valid(inp3);
    }
}

function validate(regex3, inp3) {
    return regex3.test(inp3);
}

function notValid(inp3) {
    inp3.classList.add('is-invalid');
}

function valid(inp3) {
    inp3.value="";
    inp3.classList.remove('is-invalid');
}