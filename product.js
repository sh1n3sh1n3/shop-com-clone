// https://shop-json-server.onrender.com/users

let fetchdata = async () => {
    let response = await fetch(`http://localhost:3000/users`);
    let data = await response.json();
    // console.log(data);
    arr = data
    newarr = data;
    localStorage.setItem("arrdata", JSON.stringify(arr));
    setTimeout(() => {
        displaydata(arr);
    }, 200);



}

let arr;
var newarr;
fetchdata();

let displaydata = (data) => {
    console.log(data);
    document.getElementById("container").innerText = "";

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
        productName.setAttribute("id", "productName");
        productName.innerText = list.name;
        productName.style.fontSize = "16px";
        productName.style.minHeight = "50px";
        productName.addEventListener("click", () => {
            gotosingleproduct(list);
        })
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
        seedetail.addEventListener("click", () => {
            gotosingleproduct(list);
            
        })

        var addtocart = document.createElement("button");
        addtocart.setAttribute("id", "addtocart");
        addtocart.innerHTML = '<i class="fa-solid fa-cart-shopping">Add to cart</i>'
        addtocart.addEventListener("click", () => {
            addcart(list);
        })


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

function addcart(list) {
    var idlist = JSON.parse(localStorage.getItem("idlistforcart")) || [];
    if(!idlist.includes(list.id)){
        idlist.push(list.id);
        console.log(idlist);
        alert("Product is added in the cart.");
        localStorage.setItem("idlistforcart", JSON.stringify(idlist));
    } else {
        alert("Product is already present in the cart.");
    }
    
    
}
function gotosingleproduct(list) {
    var showlist = [];
    showlist.push(list.id);
    console.log(showlist);
    localStorage.setItem("productshowlist", JSON.stringify(showlist));
    window.location.href = "singleProduct.html";
}

var flag = true;
var flag1 = false;
var flag2 = false;
var flag3 = false;
// document.getElementById("sort").addEventListener("click", () => {
//     var icon = document.getElementById("sort");
//     if (flag == true) {
//         document.querySelector(".custom-list").style.display = "block";
//         // document.querySelector(".custom-list").style.transitionDuration = "4s";
//         flag = false;

//         icon.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
//     } else {
//         document.querySelector(".custom-list").style.display = "none";
//         flag = true;
//         icon.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';

//     }
// })
document.addEventListener("click", (evt) => {
    var icon = document.getElementById("sort");
    let targetEl = evt.target; // clicked element      
    do {
        if (targetEl == icon) {
            // This is a click inside, does nothing, just return.
            icon.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
            document.querySelector(".custom-list").style.display = "block";
            document.getElementById("sort").innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
            return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside.      
    icon.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    document.querySelector(".custom-list").style.display = "none";
    
});

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
document.getElementById("filter3").addEventListener("click", () => {
    var icon3 = document.getElementById("filter3");
    if (flag3 == false) {
        document.querySelector("#productfilter3").style.display = "none";
        flag3 = true;

        icon3.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    } else {
        document.querySelector("#productfilter3").style.display = "block";
        flag3 = false;
        icon3.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';

    }
})

var newarr;
let filterhtl = () => {
    var select = document.querySelector("#htl").innerText;
    document.querySelector(".custom-trigger").innerText = "Price High to Low";
    // var newarr = JSON.parse(localStorage.getItem("arrdata"));
    console.log(arr);
    newarr.sort(function (a, b) {
        return b.finalPrice - a.finalPrice;
    })
    // console.log(newarr);
    displaydata(newarr);
}


// let filterhtl = () => {
//     var select = document.querySelector("#htl").innerText;
//     var newarr = JSON.parse(localStorage.getItem("arrdata"));
//     console.log(arr);
//     newarr.sort(function (a, b) {
//         return b.finalPrice - a.finalPrice;
//     })
//     console.log(newarr);
//     displaydata(newarr);
// }

let filterlth = () => {
    var select = document.querySelector("#lth").innerText;
    // var newarr = JSON.parse(localStorage.getItem("arrdata"));
    document.querySelector(".custom-trigger").innerText = "Price Low to high";
    console.log(select);
    newarr.sort(function (a, b) {
        return a.finalPrice - b.finalPrice;
    })
    // console.log(arr);
    displaydata(newarr);
}
let filtermc = () => {
    var select = document.querySelector("#mc").innerText;
    document.querySelector(".custom-trigger").innerText = "Most Cashback";
    // var newarr = JSON.parse(localStorage.getItem("arrdata"));
    console.log(select);
    newarr.sort(function (a, b) {
        return b.cashbackSort - a.cashbackSort;
    })
    // console.log(arr);
    displaydata(newarr);
}
let filtermatch = () => {
    document.querySelector(".custom-trigger").innerText = "Best Match";
    displaydata(arr);
    // console.log(arr);
}

let jewelry = () => {
    newarr = arr.filter(function (elem) {
        return elem.department === "jewelry"
    })
    displaydata(newarr);
}
let ring = () => {

    newarr = arr.filter(function (elem) {
        return elem.category === "rings"
    })
    // console.log(newarr);
    displaydata(newarr);
}
let earrings = () => {
    newarr = arr.filter(function (elem) {
        return elem.category === "earrings"
    })
    // console.log(newarr);
    displaydata(newarr);
}
let necklaces = () => {
    newarr = arr.filter(function (elem) {
        return elem.category === "necklaces"
    })
    // console.log(newarr);
    displaydata(newarr);
}
let health = () => {
    newarr = arr.filter(function (elem) {
        return elem.department === "health & nutrition"
    })
    // console.log(newarr);
    displaydata(newarr);
}
let vitamins = () => {
    newarr = arr.filter(function (elem) {
        return elem.category === "vitamins & supplements"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let weight = () => {
    newarr = arr.filter(function (elem) {
        return elem.category === "weight management"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let blood = () => {
    newarr = arr.filter(function (elem) {
        return elem.category === "blood sugar maintaince"
    })
    console.log(newarr);
    displaydata(newarr);
}

let beauty = () => {
    newarr = arr.filter(function (elem) {
        return elem.department === "beauty"
    })
    // console.log(newarr);
    displaydata(newarr);
}
let skin = () => {
    newarr = arr.filter(function (elem) {
        return elem.category === "skin care"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let face = () => {
    newarr = arr.filter(function (elem) {
        return elem.category === "face makeup"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let lip = () => {
    newarr = arr.filter(function (elem) {
        return elem.category === "lip products"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let layered = () => {
    newarr = arr.filter(function (elem) {
        return elem.seller === "layered"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let isotonix = () => {
    newarr = arr.filter(function (elem) {
        return elem.seller === "isotonix"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let snap = () => {
    newarr = arr.filter(function (elem) {
        return elem.seller === "snap"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let nutriclean = () => {
    newarr = arr.filter(function (elem) {
        return elem.seller === "nutriclean"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let limiere = () => {
    newarr = arr.filter(function (elem) {
        return elem.seller === "lumiere de vie"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let tls = () => {
    newarr = arr.filter(function (elem) {
        return elem.seller === "tls"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let motives = () => {
    newarr = arr.filter(function (elem) {
        return elem.seller === "motives cosmetics"
    })
    //  console.log(newarr);
    displaydata(newarr);
}
let newarr2;
let price1 = () => {
    newarr2 = newarr.filter(function (elem) {
        return elem.finalPrice <= 30;
    })
    console.log(newarr);
    displaydata(newarr2);
}
let price2 = () => {
    newarr2 = newarr.filter(function (elem) {
        return elem.finalPrice >= 30.01 && elem.finalPrice <= 40.00;
    })
    console.log(newarr);
    displaydata(newarr2);
}
let price3 = () => {
    newarr2 = newarr.filter(function (elem) {
        return elem.finalPrice >= 40.01 && elem.finalPrice <= 75.00;
    })
    console.log(newarr);
    displaydata(newarr2);
}
let price4 = () => {
    newarr2 = newarr.filter(function (elem) {
        return elem.finalPrice >= 75.01 && elem.finalPrice <= 125.00;
    })
    console.log(newarr);
    displaydata(newarr2);
}
let price5 = () => {
    newarr2 = newarr.filter(function (elem) {
        return elem.finalPrice >= 125.01;
    })
    console.log(newarr);
    displaydata(newarr2);
}

let manualprice = () => {
    let min = document.getElementById("minprice").value;
    let max = document.getElementById("maxprice").value;
    newarr2 = newarr.filter(function (elem) {
        return elem.finalPrice >= min && elem.finalPrice <= max;
    })
    console.log(newarr);
    displaydata(newarr2);
}




