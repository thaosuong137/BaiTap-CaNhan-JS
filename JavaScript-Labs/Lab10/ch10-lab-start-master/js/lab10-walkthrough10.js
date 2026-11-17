
$(function() {

    // Ẩn biểu tượng loading khi mới mở trang
    $('.animLoading').hide();

    $("#consume").click(function() {

        // Hiển thị loading khi nhấn Consume
        $('.animLoading').show();

        var url =
            "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $.get(url)

            // Khi lấy dữ liệu thành công
            .done(function(data) {

                $.each(data, function(index, value) {

                    var li = $('<li/>').html(value.name);

                    li.appendTo("div#results ul");

                });

            })

            // Khi yêu cầu thất bại
            .fail(function(xhr, status, error) {

                alert(
                    "failed loading data - status=" +
                    status +
                    " error=" +
                    error
                );

            })

            // Luôn chạy sau khi hoàn tất
            .always(function(data) {

                $('.animLoading').fadeOut("slow");

            });

    });

});
