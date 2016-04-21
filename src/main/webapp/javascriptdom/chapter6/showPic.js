/**
 * Created by XbZhang on 16/4/17.
 */

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    if (whichpic.getAttribute("title")) {
        var test = 100;
        var text = whichpic.getAttribute("title");
    } else {
        var test = 200;
        var text = "";
    }
    // var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;//在java中是不能访问到的
    }

    return true;

}


function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            // alert(this);
            // alert(typeof this);
            // alert(this.innerHTML);
            return showPic(this) ? false : true;//此处的this指的是哪个对象, this只有在运行时候知道是哪个对象(或者说是哪个标签)
        }
        links[i].onkeypress = links[i].onclick;
    }
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


function insertAfter(newElement, targeElement) {
    var parent = targeElement.parentNode;
    if (parent.lastChild == targeElement) {//如果目标元素是其父元素最后一个标签
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targeElement.nextSibling);
    }
}


function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose my image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}


addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
