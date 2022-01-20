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

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }