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

// https://shop-json-server.onrender.com/users?q=${search}
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
    // http://localhost:3000/users?q=lip
  }
// let btn=document.getElementById("header-search-button");
// btn.addEventListener("click",inputsumbit());

function myFunction() {
  
  var copyText = "https://shop-clone-com.netlify.app/";
  navigator.clipboard.writeText(copyText);

  //console.log("working")
  alert("Link Copied")
}

var result = JSON.parse(localStorage.getItem("logindata"));
console.log(result);
result.map(function(elem){
  document.getElementById("userName").innerHTML= elem.name;
  document.getElementById("signout").innerHTML="Sign Out"
})




// {
//   "name": "Denish",
//   "lastname": "Fuletra",
//   "email": "fuletradenish@gmail.com",
//   "password": "1234",
//   "mobile": ""
// }