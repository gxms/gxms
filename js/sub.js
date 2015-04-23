$('.main').on('click', 'button', function () {
    $('.alertBg').show();
    $('.alert').show();
    $('#wocao').show();
    $('.success').hide();
    console.log($(this));
});

$('.success>button').click(function () {
    $('.alertBg').hide();
    $('.alert').hide();
    $('.success').hide();
});

$('.close').click(function () {
        $('.alertBg').hide();
        $('.alert').hide();
        $('.success').hide();
    }
);

$('#sub').click(function () {
    var name = $('#name').val();
    var school = $('#school').val();
    var subject = $('#subject').val();
    var phone = $('#phone').val();
    if (name && school && subject && phone) {
        $.ajax({
            type: "POST",
            url: "wocao",
            data: $('#wocao').serialize(),
            async: false,
            error: function () {
                alert("Connection error");
            },
            success: function () {
                $('#wocao').hide();
                $('.success').show();
            }
        });
    } else {
        alert("请填写完整信息！");
    }
    return false;
});