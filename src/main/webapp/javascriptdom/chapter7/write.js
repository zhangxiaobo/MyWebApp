/**
 * Created by XbZhang on 16/4/17.
 */



function insertParagraph(text) {
    var str = "<p>";
    str += text;
    str += "</p>";
    document.write(str);
}

// window.onload = function () {
//     var testdiv = document.getElementById("testdiv");
//     alert(testdiv);
//     alert(testdiv.innerHTML);
//     testdiv.innerHTML = "<p>I inserted <em>this</em> content</p>";
// }

// window.onload = function () {
//     var para = document.createElement("p");
//     var info = "nodeName:";
//     info += para.nodeName;
//     info += " nodeType:";
//     info += para.nodeType;
//     alert(info);
// }

// window.onload = function () {
//     var para = document.createElement("p");
//     var txt = document.createTextNode("Hello World");
//     para.appendChild(txt);
//     var testdiv = document.getElementById("testdiv");
//     alert();
//     testdiv.appendChild(para);
// }


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



function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined") {
        XMLHttpRequest = function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
            return false;
        }
    }
    return new XMLHttpRequest();
}

function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open("GET", "example.txt", true);//example.txt, avatar.gif 测试文件
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        }
        request.send(null);
    } else {
        alert("Sorry, your brower doesn't support XMLHTTPRequest");
    }
}

addLoadEvent(getNewContent)