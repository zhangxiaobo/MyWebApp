/**
 * Created by XbZhang on 16/4/17.
 */

function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

// function countBodyChildren() {
//     var body_element = document.getElementsByTagName("p")[0];
//     alert(body_element.children.length);
//     alert(body_element.nodeType);
//     alert(body_element.childNodes[0].nodeValue);
// }
// window.onload = countBodyChildren;

// var placeholder = document.getElementById("placeholder");
// alert(placeholder.nodeName);
// alert(placeholder.nodeName == "IMG");