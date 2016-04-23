/**
 * Created by XbZhang on 16/4/22.
 */

function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

function styleHeaderSiblings(tag, theclass) {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName(tag);
    var elem;
    for (var i = 0; i < headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);

        // elem.style.fontWeight = "bold";
        // elem.style.fontSize = "1.2em";

        // elem.className = "intro";

        addClass(elem, theclass);
    }
}

// addLoadEvent(function () {
//     styleHeaderSiblings("h1", "intro");
// })

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

// addLoadEvent(styleHeaderSiblings);

function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for (var i = 0; i < tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                // rows[j].style.backgroundColor = "#ffc";
                addClass(rows[j], "odd");
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

addLoadEvent(stripeTables);

function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function () {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
    }
}

addLoadEvent(highlightRows);

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}
