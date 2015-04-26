var cid = null;

$('.main').on('click', 'button', function () {
    $('.alertBg').show();
    $('.alert').show();
    $('#wocao').show();
    $('.success').hide();
    cid = $(this).data('cid');
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
            cid: cid
        };

        //console.log(data);

        $.ajax({
            type: "POST",
            url: "data.php",
            dataType: "json",
            data: JSON.stringify(data),
            success: function () {
                $('#wocao').hide();
                $('.success').show();
            },
            error: function () {
                alert("Connection error");
            }
        });
    } else {
        alert("请填写完整信息！");
    }
    return false;
});