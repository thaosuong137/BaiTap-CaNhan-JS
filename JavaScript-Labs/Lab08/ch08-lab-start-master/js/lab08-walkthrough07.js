
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");

// Thêm thứ Bảy vào cuối mảng
daysOfWeek.push("Sat");

// Thêm Chủ nhật vào đầu mảng
daysOfWeek.unshift("Sun");

// Bắt đầu tạo bảng
document.write("<table border='1'>");

// Tạo hàng tiêu đề
document.write("<tr>");

for (var i = 0; i < daysOfWeek.length; i++) {
    var day;

    if (daysOfWeek[i].length < 4) {
        day = daysOfWeek[i];
    } else {
        day = "<em>" + daysOfWeek[i] + "</em>";
    }

    document.write("<th>" + day + "</th>");
}

document.write("</tr>");

// Tạo các ô ngày từ 1 đến 30
for (var dayNumber = 1; dayNumber <= 30; dayNumber++) {

    // Tạo hàng mới vào đầu mỗi tuần
    if ((dayNumber - 1) % 7 === 0) {
        document.write("<tr>");
    }

    // Hiển thị ngày
    document.write("<td>" + dayNumber + "</td>");

    // Đóng hàng vào cuối tuần
    if (dayNumber % 7 === 0) {
        document.write("</tr>");
    }
}

// Bổ sung ô trống cho tuần cuối
var remaining = 30 % 7;

if (remaining !== 0) {
    for (var j = remaining; j < 7; j++) {
        document.write("<td></td>");
    }

    document.write("</tr>");
}

// Kết thúc bảng
document.write("</table>");


