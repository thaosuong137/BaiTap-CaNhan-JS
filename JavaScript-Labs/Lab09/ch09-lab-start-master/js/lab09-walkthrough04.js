
function simpleHandler(event) {

    var content = document.getElementById("content");

    if (btn.innerHTML == "Hide") {

        btn.innerHTML = "Show";

        content.className = "makeItDisappear";

        setTimeout(function() {
            content.style.display = "none";
        }, 1000);

    } else {

        btn.innerHTML = "Hide";

        content.style.display = "block";

        setTimeout(function() {
            content.className = "makeItNormal";
        }, 500);
    }
}

// Xử lý nút Hide / Show
var btn = document.getElementById("testButton");

btn.addEventListener("click", simpleHandler);

// Xử lý hình ảnh
var img = document.getElementById("mainImage");

// Khi chuột di chuyển lên hình
img.addEventListener("mouseover", function(event) {
    img.className = "makeItGray";
});

// Khi chuột rời khỏi hình
img.addEventListener("mouseout", function(event) {
    img.className = "makeItNormal";
});
