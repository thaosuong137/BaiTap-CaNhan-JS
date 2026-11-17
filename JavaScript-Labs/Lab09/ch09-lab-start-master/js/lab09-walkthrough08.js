
function init() {

    document.getElementById("sampleForm")
        .addEventListener("submit", checkForEmptyFields);

}

window.addEventListener("load", init);

function checkForEmptyFields(e) {

    // Ẩn khu vực lỗi ban đầu
    var errorArea = document.getElementById("errors");

    errorArea.className = "hidden";

    // Chọn các ô cần kiểm tra
    var cssSelector = "input[type=text],input[type=password]";

    var fields = document.querySelectorAll(cssSelector);

    // Danh sách các ô bị bỏ trống
    var fieldList = [];

    for (var i = 0; i < fields.length; i++) {

        if (fields[i].value == null || fields[i].value == "") {

            e.preventDefault();

            fieldList.push(fields[i]);

        }

    }

    // Tạo nội dung thông báo
    var msg = "The following fields can't be empty: ";

    if (fieldList.length > 0) {

        for (var i = 0; i < fieldList.length; i++) {

            msg += fieldList[i].id + ",";

        }

        // Hiển thị lỗi trong trang HTML
        errorArea.innerHTML = "<p>" + msg + "</p>";

        errorArea.className = "visible";

    }

}
