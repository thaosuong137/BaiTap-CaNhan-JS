
$(function() {

    $("#consume").click(function() {

        var url =
            "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        // Tạo danh sách ul
        $("#results").html("<ul></ul>");

        // Gửi GET Request
        $.get(url, function(data, status) {

            // Duyệt từng thành phố
            $.each(data, function(index, value) {

                // Tạo phần tử li
                var li = $('<li/>').html(value.name);

                // Thêm li vào ul
                li.appendTo("div#results ul");

            });

        });

    });

});
