
function removePreview() {

    $(this).removeClass("gray");

    $("#preview").remove();

}

function movePreview(e) {

    $("#preview")
        .css("top", (e.pageY - 10) + "px")
        .css("left", (e.pageX + 30) + "px");

}

$(function () {

    // Hiện preview khi rê chuột vào ảnh
    $('figure img').on('mouseover', function (e) {

        var alt = $(this).attr('alt');
        var src = $(this).attr('src');

        var newsrc = src.replace("small", "medium");

        var preview = $('<div id="preview"></div>');

        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');

        preview.append(image);
        preview.append(caption);

        $('body').append(preview);

        $(this).addClass("gray");

        $("#preview").fadeIn(1000);

    });

    // Xóa preview khi chuột rời khỏi ảnh
    $("figure img").on("mouseleave", removePreview);

    // Di chuyển preview theo chuột
    $("figure img").on("mousemove", movePreview);

});


