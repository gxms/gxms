$('.main').on('click', 'button', function () {
    $('.alertBg').show();
    $('.alert').show();
    $('#wocao').show();
    $('.success').hide();
    $('#cid').val($(this).data('cid'));
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
        var data = {
            name: $('input[name="name"]').val(),
            school: $('input[name="school"]').val(),
            subject: $('input[name="subject"]').val(),
            phone: $('input[name="phone"]').val(),
            sex: $('input:radio[name="sex"]:checked').val(),
            cid: $('#cid').val()
        };

        //console.log(data);

        $.ajax({
            type: "POST",
            url: "wocao",
            data: JSON.stringify(data),
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