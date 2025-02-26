// $(document).ready(function () {
//   $(".content a").fancybox();
//   TweenMax.staggerFrom(
//     $(".content a"), // phần tử được chọn
//     1, // thời gian chuyển động
//     { top: 100, opacity: 0 },
//     0.4 // thời gian cách nhau giữa mỗi hiệu ứng
//   );
// });

$(document).ready(function () {
  // Kích hoạt Fancybox cho tất cả ảnh trong .content
  $(".content a").fancybox();

  // Kích hoạt Fancybox riêng cho bé mèo
  $("#bemeo").fancybox({
    loop: true, // Cho phép lướt qua nhiều ảnh
    buttons: ["zoom", "close"], // Thêm nút zoom & close
  });

  // Hiệu ứng xuất hiện ảnh bằng TweenMax
  TweenMax.staggerFrom(
    $(".content a, #bemeo"), // Chọn tất cả ảnh trong content + bé mèo
    1, // Thời gian chuyển động
    { top: 100, opacity: 0 }, // Di chuyển từ trên xuống & làm mờ dần
    0.4 // Thời gian cách nhau giữa mỗi hiệu ứng
  );
});
