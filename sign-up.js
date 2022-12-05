function capt(){
    var alpha=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
               'J', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
               'i', 'j', '@', '#', '$', '&', '1', '2', '3', 
               '4', '5', '6', '7', '8', '9', '0'];

    var a= alpha[Math.floor(Math.random()*34)];
    var b= alpha[Math.floor(Math.random()*34)];
    var c= alpha[Math.floor(Math.random()*34)];
    var d= alpha[Math.floor(Math.random()*34)];
    var e= alpha[Math.floor(Math.random()*34)];

    var final=a+b+c+d+e;
    document.getElementById("captcha-give").value=final;
}
capt()
function validcapt(){
    var str1=document.getElementById("captcha-give").value;
    var str2=document.getElementById("captcha-receive").value;
    if(str1==str2){
        alert("Account Created Successfully");
        window.location.href="signIn.html"
    }else{
        alert("Invalid Captcha");
    }
}