
function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveElement("message", 125, 25, 10);
    if (!document.getElementById("message2")) return false;
    var elem = document.getElementById("message2");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveElement("message2", 125, 25, 10);
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

// addLoadEvent(positionMessage);

function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);

    //元素自定义属性
    if (elem.movement) {
        clearTimeout(elem.movement);
    }

    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }

    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos)/10);
        xpos += dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x)/10);
        xpos -= dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_x - ypos)/10);
        ypos += dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_x)/10);
        ypos -= dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "',"+ final_x + "," + final_y + "," + interval + ")";

    //保存到元素的自定义属性中,本质上可以认为是创建了三个变量用了保存setTimeout返回值,以前只有一个返回值
    elem.movement = setTimeout(repeat, interval);
}


function prepareSlideshow() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;

    console.log("----->000");

    if (!document.getElementById("linklist")) return false;
    // if (!document.getElementById("preview")) return false;

    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src", "images/placeholder.gif");
    preview.setAttribute("alt", "building blocks of web design");
    preview.setAttribute("id", "preview");
    slideshow.appendChild(preview);

    console.log("----->111");

    // var preview = document.getElementById("preview");
    // preview.style.position = "absolute";

    console.log("----->222");

    var list = document.getElementById("linklist");
    insertAfter(slideshow, list);


    var links = list.getElementsByTagName("a");

    console.log("----->333");

    links[0].onmouseover = function () {
        console.log("----->444");
        moveElement("preview", -10, 0, 10);
    }
    links[1].onmouseover = function () {
        console.log("----->555");
        moveElement("preview", -20, 0, 10);
    }
    links[2].onmouseover = function () {
        console.log("----->666");
        moveElement("preview", -30, 0, 10);
    }
}

addLoadEvent(prepareSlideshow);