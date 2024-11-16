function color(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByClassName("caja")[0].style.backgroundColor = b;
}

