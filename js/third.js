//表格信息处理部分
$('.up').click(function () {
    var input = $(this).parent().find('.val');
    input.val(parseInt(input.val()) + 1);
    change();
});

$('.down').click(function () {
    var input = $(this).parent().find('.val');
    if (parseInt(input.val()) > 1) {
        input.val(parseInt(input.val()) - 1);
    } else {
        input.val(0);
    }
    change();
});

//计算折扣并更新数据
function change() {
    var val = $('.val');
    var count = 0, discount = 0, over = 0;
    for (var i = 0; i < 4; i++) {
        count += parseInt(val.eq(i).val());
    }

    //计算折扣
    if (count > 3) {
        discount = 0.04;
    } else {
        switch (count) {
            case 0:
                discount = 0.00;
                break;
            case 1:
                discount = 0.01;
                break;
            case 2:
                discount = 0.02;
                break;
            case 3:
                discount = 0.03;
                break;
            default:
                console.log('Error!');
        }
    }

    //计算单价和优惠
    for (var i = 0; i < 4; i++) {
        var price = parseInt($('.price').eq(i).html());
        $('.discount').eq(i).html(val.eq(i).val() + '*' + price * (1 - discount));
        $('.discountFree').eq(i).html('优惠：' + val.eq(i).val() + '*' + price * discount);
    }

    //计算总价
    for (var i = 0; i < 4; i++) {
        over += parseInt($('.price').eq(i).html()) * parseInt(val.eq(i).val());
    }

    $('.disOver').html('套餐总价：' + over * (1 - discount));
    $('.allOver').html('原价：' + over);
}


$('.btn').click(function () {
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


//图片轮播部分
//设置图片轮播宽度
var uls = $('.ul ul');
for (var i = 0; i < 2; i++) {
    uls.eq(i).css("width", uls.eq(i).children().length * 130 + "px");
}

var liu = [0, 0];

//左右点击
$('.prevImg').click(function () {
    var index = $('.prevImg').index($(this));
    var obj = uls.eq(index);
    var len = obj.children().length;
    liu[index]--;
    liu[index] = liu[index] < 0 ? (len - 7) : liu[index];
    obj.animate({"left": -130 * liu[index] + "px"}, 400);
});

$('.nextImg').click(function () {
    var index = $('.nextImg').index($(this));
    var obj = uls.eq(index);
    var len = obj.children().length;
    liu[index]++;
    liu[index] = liu[index] > (len - 7) ? 0 : liu[index];
    obj.animate({"left": -130 * liu[index] + "px"}, 400);
});