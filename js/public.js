$(window).ready(function () {
    var screenWidth = $(window).width();
    $('#slide ul').css('width', screenWidth * 5 + 'px');
    $('#slide ul li').css('width', screenWidth + 'px');


    var count = 0;//图片轮播计数
    var photoCount = $('#slide ul li').length;

    $('#next').click(function () {
        count = count++ >= photoCount - 1 ? 0 : count++;
        $('#slide ul').animate({"left": count * (-screenWidth) + "px"}, 600);
    });

    $('#prev').click(function () {
        count = count-- <= 0 ? photoCount - 1 : count--;
        $('#slide ul').animate({"left": count * (-screenWidth) + "px"}, 600);
    });

    function next() {
        $('#next').click();
    }

    var timer1 = setInterval(next, 4000);

    $('#slide').mouseover(function () {
        clearInterval(timer1);
    });
    $('#slide').mouseout(function () {
        timer1 = setInterval(next, 4000);
    });

    //$(window).resize(function () {
    //    location.reload();
    //});

    $('.nav>ul>li').each(function (i) {
        $(this).hover(
            function () {
                $(this).css("background-color", "#f9a41d");
                $(this).find('ul').css("display", "block");
            },
            function () {
                $(this).css("background-color", "");
                $(this).find('ul').css("display", "none");
            }
        );
    });
});