function capt() {
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', '@', '#', '$', '&', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', '0'];

    var a = alpha[Math.floor(Math.random() * 34)];
    var b = alpha[Math.floor(Math.random() * 34)];
    var c = alpha[Math.floor(Math.random() * 34)];
    var d = alpha[Math.floor(Math.random() * 34)];
    var e = alpha[Math.floor(Math.random() * 34)];

    var final = a + b + c + d + e;
    document.getElementById("captcha-give").value = final;
}
capt()
function validcapt() {
    var str1 = document.getElementById("captcha-give").value;
    var str2 = document.getElementById("captcha-receive").value;
    if (str1 == str2) {
        alert("Account Created Successfully");
        window.location.href = "signIn.html"
    } else {
        alert("Invalid Captcha");
    }
}

function objproto(name, lastname, email, password, mobile) {
    this.name = name,
        this.lastname = lastname,
        this.email = email,
        this.password = password,
        this.mobile = mobile
}
var arr = JSON.parse(localStorage.getItem("signupdata")) || [];

function validcapt() {
    var name = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("cpassword").value;
    var mobile = document.getElementById("mobile").value;
    var captcha = document.getElementById("captcha-give").value;
    var receivedcapatcha = document.getElementById("captcha-receive").value;
    if (password === confirmpassword) {
        if (captcha == receivedcapatcha) {
            var obj = new objproto(name, lastname, email, password, mobile);
            arr.push(obj);
            console.log(arr);
            localStorage.setItem("signupdata", JSON.stringify(arr));
            window.location.href = "signIn.html";
        } else {
            alert("Please enter a valid captcha");
        }
    } else {
        alert("Please enter a valid password");
    }


}