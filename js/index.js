$('.topNavUl li').mouseover(function () {
    $('.topNavUl img').removeClass('active');
    $(this).find('img').addClass('active');
    loadData($(this).attr("id"));
});

$('.now').removeAttr("href");

function loadData(type) {
    if (window.localStorage) {
        if (localStorage.getItem(type)) {
            var data = JSON.parse(localStorage.getItem(type));
            appendData(data);
        } else {
            var jsonData = $.ajax({url: ("js/" + type + ".json"), async: false}).responseText;
            localStorage.setItem(type, jsonData);
            var data = JSON.parse(jsonData);
            appendData(data);
        }
    } else {
        var jsonData = $.ajax({url: ("js/" + type + ".json"), async: false}).responseText;
        var data = JSON.parse(jsonData);
        appendData(data);
    }
}

function appendData(data) {
    var empty = "";
    $.each(data, function (index, item) {
        empty += '<div class="class"><a class="classImg" href="' + item.href + '"><img src="' + item.src + '" alt=""/></a><a href="' + item.href + '">' + item.name + '</a><br><span>' + item.dept + '</span>&nbsp;<span>' + item.courseNum + '节课</span>&nbsp;<span>' + item.courseTime + '开课</span>';
        if (item.free) {
            empty += '&nbsp;<span class="free">免费</span></div>';
        } else {
            empty += '</div>';
        }
    });
    $('.mainContent').empty().append(empty);
}