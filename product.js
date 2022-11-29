

let fetchdata = async () => {
    let response = await fetch(`http://localhost:3000/list`);
    let data = await response.json();
    // console.log(data);
    displaydata(data);
}
fetchdata();

let displaydata = (data) => {
    data.map((list) => {


        var divMain1 = document.createElement("div");
        divMain1.setAttribute("id", "divMain1");
        var divMain2 = document.createElement("div");
        divMain2.setAttribute("id", "divMain2");
        var divMain3 = document.createElement("div");
        divMain3.setAttribute("id", "divMain3");
        var divMain4 = document.createElement("div");
        divMain4.setAttribute("id", "divMain4");
        var divMain = document.createElement("div");
        divMain.setAttribute("id", "divMain");

        var url = document.createElement("img");
        url.src = list.url;
        url.setAttribute("id", "urlImage");
        ///////////////////////////////////////////////

        if (list.image1 != null) {
            var image1 = document.createElement("img");;
            image1.src = list.image1;
            divMain3.append(image1);
        }
        if (list.image2 != null) {
            var image2 = document.createElement("img");;
            image2.src = list.image2;
            divMain3.append(image2);
        }
        if (list.image3 != null) {
            var image3 = document.createElement("img");;
            image3.src = list.image3;
            divMain3.append(image3);
        }
        if (list.image4 != null) {
            var image4 = document.createElement("img");;
            image4.src = list.image4;
            divMain3.append(image4);
        }


        // var image1 = document.createElement("img");;
        // image1.src = list.image1;
        // var image2 = document.createElement("img");;
        // image2.src = list.image2;
        // var image3 = document.createElement("img");;
        // image3.src = list.image3;
        // var image4 = document.createElement("img");;
        // image4.src = list.image4;


        // divMain3.append(image1, image2, image3, image4);

        ///////////////////////////////////////////////
        var showfeature = document.createElement("button");


        var featureImg = document.createElement("img");
        featureImg.setAttribute("id", "featureImg");
        featureImg.src = "https://img.shop.com/Image/resources/images/badge_special.svg"

        showfeature.innerText = "Show Feature";
        showfeature.setAttribute("id", "showfeature");
        showfeature.append(featureImg);
        divMain4.append(showfeature);



        ///////////////////////////////////////////////

        var productName = document.createElement("h1");
        productName.innerText = list.name;
        productName.style.fontSize = "16px";
        productName.style.minHeight = "50px";
        // console.log(productName);
        // console.log(list.name);
        ///////////////////////////////////////////////
        var divVendor = document.createElement("div");
        divVendor.setAttribute("class", "classflexRow");
        divVendor.setAttribute("id", "divVendor");

        var vendorImge = document.createElement("img");
        vendorImge.src = "https://img.shop.com/Image/resources/images/onecart-icon.svg";
        vendorImge.setAttribute("id", "vImage");

        var vendor = document.createElement("h6");
        vendor.innerText = list.vendor;
        vendor.style.fontSize = "12px"
        // console.log(vendor);
        divVendor.append(vendorImge, vendor);
        ///////////////////////////////////////////////
        var divPrice = document.createElement("div");
        divPrice.setAttribute("class", "classflexRow");
        divPrice.setAttribute("id", "divPrice");

        var sPrice = document.createElement("h6");
        sPrice.setAttribute("id", "sPrice");
        sPrice.innerText = `$${list.slashPrice}`;

        var fPrice = document.createElement("h6");
        fPrice.setAttribute("id", "fPrice");
        fPrice.innerText = `$${list.finalPrice}`;

        divPrice.append(sPrice, fPrice);
        ///////////////////////////////////////////////
        var divCashback = document.createElement("div");
        var cImge = document.createElement("img");
        cImge.src = "https://img.shop.com/Image/resources/images/cashback-icon.svg"
        cImge.setAttribute("id", "vImage");

        var cashback = document.createElement("h4");
        cashback.innerText = `${list.cashback}`;

        divCashback.append(cashback, cImge, "Cashback");
        divCashback.setAttribute("class", "classflexRow");
        divCashback.setAttribute("id", "divCashback");
        ///////////////////////////////////////////////
        var shipping = document.createElement("p")
        shipping.innerText = `${list.shipping}`;
        shipping.setAttribute("id", "shipping");
        ///////////////////////////////////////////////
        var divbutton = document.createElement("div");
        divbutton.setAttribute("class", "classflexColumn");

        var seedetail = document.createElement("button");
        seedetail.setAttribute("id", "seedetail");
        seedetail.innerText = "See Details"

        var addtocart = document.createElement("button");
        addtocart.setAttribute("id", "addtocart");
        addtocart.innerHTML = '<i class="fa-solid fa-cart-shopping">Add to cart</i>'


        divbutton.append(seedetail, addtocart);
        divbutton.setAttribute("class", "classflexRow");
        divbutton.setAttribute("id", "divbutton");
        ///////////////////////////////////////////////
        var rating = document.createElement("p");
        rating.style.fontSize = "11px";
        rating.innerHTML = list.rating;


        divMain1.append(url);
        divMain2.append(productName, divVendor, divPrice, divCashback, shipping, rating, divbutton);
        divMain.append(divMain1, divMain3, divMain4, divMain2);
        document.getElementById("container").append(divMain);
    })
}

var flag = true;
var flag1 = false;
var flag2 = false;

document.getElementById("sort").addEventListener("click", () => {
    var icon = document.getElementById("sort");
    if (flag == true) {
        document.querySelector(".custom-list").style.display = "block";
        // document.querySelector(".custom-list").style.transitionDuration = "4s";
        flag = false;

        icon.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    } else {
        document.querySelector(".custom-list").style.display = "none";
        flag = true;
        icon.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';

    }
})

document.getElementById("filter1").addEventListener("click", () => {
    var icon1 = document.getElementById("filter1");
    if (flag1 == false) {
        document.querySelector("#productfilter").style.display = "none";
        flag1 = true;

        icon1.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    } else {
        document.querySelector("#productfilter").style.display = "block";
        flag1 = false;
        icon1.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';

    }
})
document.getElementById("filter2").addEventListener("click", () => {
    var icon2 = document.getElementById("filter2");
    if (flag2 == false) {
        document.querySelector("#productfilter2").style.display = "none";
        flag2 = true;

        icon2.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    } else {
        document.querySelector("#productfilter2").style.display = "block";
        flag2 = false;
        icon2.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';

    }
})

