var swiper = new Swiper(".slide-container", {
  slidesPerView: 5,
  spaceBetween: 20,
  sliderPerGroup: 5,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

function togglebmenu() {
  document.getElementById("menu").classList.toggle("active");
  document.getElementById("mid-section").classList.toggle("brightness");
  console.log("working")
}

function togglebmenuGift() {
  document.getElementById("menu-cat-giftcenter").classList.toggle("activegift");
  console.log(" gift working")
}

function toggleAcc() {
  document.getElementById("toggle-signin").classList.toggle("activeacc");
  console.log(" gift working")
}


function inputsumbit() {
  event.preventDefault();
  var search = document.getElementById("header-input").value;
  console.log(search);
  fetch(`https://shop-json-server.onrender.com/users?q=${search}`)
    .then(function (response) {
      return response.json();

    }).then(function (data) {
      console.log(data);
      localStorage.setItem("search",JSON.stringify(data))
      window.location.href="search-result.html";
    })
    
}
// let btn=document.getElementById("header-search-button");
// btn.addEventListener("click",inputsumbit());

function myFunction() {
  
  var copyText = "file:///C:/Users/Aditya/Desktop/shop/index.html";
  navigator.clipboard.writeText(copyText);

  //console.log("working")
  alert("Link Copied")
}


