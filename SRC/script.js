// LOADER FUNCTION
window.addEventListener("load", () => {
    document.querySelector(".loaderContainer").classList.add("hide");
});

// HOME IMGS FUNCTION
var object1 = $('#img2');
var object2 = $('#img4');

var layer = $('#home');

layer.mousemove(function(e) {
    var valueX = (e.pageX * -1 / 20);
    var valueY = (e.pageY * -1 / 20);

    object1.css({
        'transform':'translate(-50%, -50%) translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});

layer.mousemove(function(e) {
    var valueX = (e.pageX * -1 / 50);
    var valueY = (e.pageY * -1 / 50);

    object2.css({
        'transform':'translate(-50%, -50%) translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});

// CURSOR FUNCTIONALITY
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll(".link"));

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});