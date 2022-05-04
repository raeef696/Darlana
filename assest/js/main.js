


$(document).ready(function () {







          /* page Featured Product */
          $('.search-icon').on('click' ,function (){
            $('.opne-mobil-search').toggle().addClass('opne-mobil-search1');
          });

        /* page Featured Product */
        $('.active-account').on('click' ,function (){
          $('.mobil-none').toggle().addClass('aside-accounr-mobil');
        });
        $('.colors-prodect li').on('click', function () {
          $(this).addClass('active-color-cart').siblings().removeClass('active-color-cart');
        });
        $('.thumbnis-img img').on('click', function () {
        $(this).addClass('active-thumbnis').siblings().removeClass('active-thumbnis');
        $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(300);
        });
        $('.size-product-1 div').on('click', function () {
            $(this).addClass('active-size').siblings().removeClass('active-size');
        });
        $('.list-aside-accunt li').on('click', function () {
          $(this).addClass('active-color-account').siblings().removeClass('active-color-account');
      });


        /* End page Featured Product */


        $('.size div').on('click', function () {
          $(this).addClass('activ-size').siblings().removeClass('activ-size');
      });
      $('.colors-list li').on('click', function () {
        $(this).addClass('active-color').siblings().removeClass('active-color');
    });
  // Requires jQuery










  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".open-side-menu").on("click", function (e) {
    e.preventDefault();
    $(".side-menu").addClass("active");
    $(".overlay-menu").fadeIn();
    $(".close-menu, .overlay-menu").on("click", function () {
    $(".side-menu").removeClass("active");
    $(".overlay-menu").fadeOut();
    });
});

  // start card -
  changeImg =function () {
    $(this).addClass("active-img").siblings().removeClass("active-img");
    var slider =this.parentElement;
    slider.parentElement.firstElementChild.firstElementChild.lastElementChild.src=this.src;
  }
  $("#menu img").on("click",changeImg);

          // Toggle icon 
        document.querySelector(".navbreadcrumb i").onclick = function () {
          // this.classList.toggle("open");
          document.querySelector(".sidbar").classList.toggle('open');
        }
});

const liList = document.querySelectorAll(".ulElementClas li");
liList.forEach(li=> li.style.backgroundColor = li.textContent );
liList.forEach(li=> li.style.color = li.textContent );





