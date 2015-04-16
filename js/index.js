$('.topNavUl li').mouseover(function () {
    $('.topNavUl img').removeClass('active');
    $(this).find('img').addClass('active');
    loadData($(this).attr("id"));
});

$('.now').removeAttr("href");

function loadData(type) {
    if (window.localStorage) {
        if (localStorage.getItem(type)) {
            var data = $.parseJSON(localStorage.getItem(type));
            appendData(data);
        } else {
            var jsonData = $.ajax({url: ("js/" + type + ".json"), async: false}).responseText;
            localStorage.setItem(type, jsonData);
            var data = $.parseJSON(jsonData);
            appendData(data);
        }
    } else {
        var jsonData = $.ajax({url: ("js/" + type + ".json"), async: false}).responseText;
        var data = $.parseJSON(jsonData);
        appendData(data);
    }
}

function appendData(data) {
    var empty = "";
    $.each(data, function (index, item) {
        empty += '<div class="class"><a class="classImg" href="' + item.href + '"><img src="' + item.src + '" alt=""/></a><a href="' + item.href + '">' + item.name + '</a><br><p>机构：' + item.dept + '</p><p>奖品：' + item.jiangpin + '</p><p>开课时间：' + item.courseTime + '</p><button>报&nbsp;名</button></div>';;
    });
    empty += '<div class="clearfloat"></div>';
    $('.main').empty().append(empty);
}