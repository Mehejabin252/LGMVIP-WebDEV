var slide = document.getElementById("slider");

var btn1 = document.getElementById("btn1");

var btn2 = document.getElementById("btn2");

var btn3 = document.getElementById("btn3");

var btn4 = document.getElementById("btn4");

btn1.onclick = function(){
    slide.style.transform = "translateX(0px)";
}

btn2.onclick = function(){
    slide.style.transform = "translateX(-20%)";
}
btn3.onclick = function(){
    slide.style.transform = "translateX(-40%)";
}

btn4.onclick = function(){
    slide.style.transform = "translateX(-60%)";
}
