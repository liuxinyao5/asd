$(function(){
    // 底部广告关闭事件
    // console.log($('.ad i'));
    $('.ad i').click(function(){
        $('.ad').addClass("hide");
    });

    // 轮播图区域左侧导航鼠标移入移出事件
    // console.log($('.item'));
    // console.log($('.banner-hidden')[0].style);
    for (let i=0; i<7 ; i++) {
        $('.item')[i].onmouseover = function(){
            $('.banner-hidden')[i].style.display = 'block';
        };
        $('.item')[i].onmouseout = function(){
            $('.banner-hidden')[i].style.display = 'none';
        }
    }

    $('.banner-hidden').mouseover(function(){
        $(this).show();
    });
    $('.banner-hidden').mouseout(function(){
        $(this).hide();
    });

    // 轮播图小圆点点击事件

    // console.log($('.dots span')[0]);
    // for (let i=0; i<6; i++) {
    //     $('.dots span')[i].onclick = function(){
    //         // console.log($('.dots span')[i]);
    //         $('.dot1').width(8);
    //         $('.dots span')[i].style.width = '20px';
    //         $('.banner-ad1').attr('style','display:none');
    //         $($('.banner-ad1')[i]).fadeIn(300);
    //     }
    // }

    $('.dot1').click(function(){
        var index = $(this).index();
        $('.dot1').width(8);
        $(this).width(20);
        $('.banner-ad1').hide();
        // 此处上下两种方法效果相同
        // $('.banner-ad1').attr('style','display:none');
        // console.log($('.banner-ad1:eq("index")'));
        $('.banner-ad1:eq(' + index + ')').show(300);
    });


    // 轮播图左箭头点击事件
    $('.ad-left').click(function(){
        var index = $(".banner-ad1").index($(".banner-ad1:visible"));
        // console.log(index);
        if (index == 0) {
            $('.banner-ad1').hide();
            $('.banner-ad1:eq(5)').fadeIn(300);
            $('.dot1').width(8);
            $('.dot1:eq(5)').width(20);
        } else {
            $('.banner-ad1').hide();
            $('.banner-ad1:eq(' + (index-1) + ')').fadeIn(300);
            $('.dot1').width(8);
            $('.dot1:eq(' + (index-1) + ')').width(20);
        }
    });

    // 轮播图右箭头点击事件
    $('.ad-right').click(function(){
        var index = $(".banner-ad1").index($(".banner-ad1:visible"));
        if (index == 5) {
            $('.banner-ad1').hide();
            $('.banner-ad1:eq(0)').fadeIn(300);
            $('.dot1').width(8);
            $('.dot1:eq(0)').width(20);
        } else {
            $('.banner-ad1').hide();
            $('.banner-ad1:eq(' + (index+1) + ')').fadeIn(300);
            $('.dot1').width(8);
            $('.dot1:eq(' + (index+1) + ')').width(20);
        }
    });

    // 轮播图自动切换动画
    var tID = '';
    function ad(){
        tID = setInterval(function(){
            var index = $(".banner-ad1").index($(".banner-ad1:visible"));
            if (index == 5) {
                $('.banner-ad1').hide();
                $('.banner-ad1:eq(0)').fadeIn(300);
                $('.dot1').width(8);
                $('.dot1:eq(0)').width(20);
            } else {
                $('.banner-ad1').hide();
                $('.banner-ad1:eq(' + (index+1) + ')').fadeIn(300);
                $('.dot1').width(8);
                $('.dot1:eq(' + (index+1) + ')').width(20);
            }
        }, 3000);
    };

    ad();
    
    $('.banner-content').mouseover(function(){
        clearInterval(tID);
    });

    $('.banner-content').mouseout(function(){
        ad();
    });

    // 搜索栏获取焦点事件
    $('.search11-1').focusin(function(){
        $(this).css('outline', 'none');
        $('.hottags').hide();
    });

    // 搜索栏失去焦点事件
    $('.search11-1').focusout(function(){
        $('.hottags').show();
    });

    // 底部微信图标鼠标移入移出事件
    $('.f-r-i1').mouseover(function(){
        $('.f-r-i11').show();
    });

    $('.f-r-i1').mouseout(function(){
        $('.f-r-i11').hide();
    });

    // 学习路线顶部按键点击事件
    $('.c3-nav li').click(function(){
        $('.c3-nav li').removeClass('sel');
        $(this).addClass('sel');
        var index = $(this).index();
        // console.log(index);
        $('.c3-list1').hide();
        $('.c3-list1:eq('+ index +')').show();
    });

    // 学习路线区域list鼠标移入移出事件
    $('.c3-list1-1').mouseover(function(){
        // console.log($(this).children().children('.c3-l1-img'));
        $(this).children().children('.c3-l1-img').css('top', '-5px');
        $(this).children().children('h4').css('color', 'red');
    });

    $('.c3-list1-1').mouseout(function(){
        $(this).children().children('.c3-l1-img').css('top', '0px');
        $(this).children().children('h4').css('color', '#1C1F21');
    });
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    // 新上好课鼠标移入移出事件
    $('.c2-l-1').mouseover(function(){
        // console.log($(this).children().children('.c2-img'));
        $(this).children().children('.c2-img').css('box-shadow', '0 0 8px 0 rgba(0, 0, 0, 0.3)');
        $(this).children().children('.c2-content').children('h3').css('color', 'red');
    });

    $('.c2-l-1').mouseout(function(){
        $(this).children().children('.c2-img').css('box-shadow', 'none');
        $(this).children().children('.c2-content').children('h3').css('color', '#1C1F21');
    });

    // 热门课程顶部导航点击事件
    $('.c4-nav li').click(function(){
        $('.c4-nav li').removeClass('sel');
        $(this).addClass('sel')
        var index = $(this).index();
        $('.c4-list').hide();
        $('.c4-list:eq('+ index +')').show();
    });

    // 热门课程顶部问号鼠标移入移出事件
    $('#c4-i1').mouseover(function(){
        $('.c4-info').show();
    });

    $('#c4-i1').mouseout(function(){
        $('.c4-info').hide();
    });

    $('.c4-info').mouseover(function(){
        $(this).show();
    });
    $('.c4-info').mouseout(function(){
        $(this).hide();
    });

    // 页面右方固定导航鼠标移入移出事件
    $('#nav-right').children().mouseover(function(){
        // console.log($(this));
        $(this).children('i').hide();
        $(this).children('span').css('display', 'inline-block');
    });

    $('#nav-right').children().mouseout(function(){
        // console.log($(this));
        $(this).children('span').hide();
        $(this).children('i').show();
    });

    // 右侧返回顶部效果
    $(window).on('scroll', function(){
        // console.log($(this));
        if ($(this).scrollTop() > $(this).height()) {
            $('#to-top').show();
        } else {
            $('#to-top').hide();
        }
    });

    // 返回顶部点击事件
    $('#to-top').click(function(){
        $('html').animate({ scrollTop: 0 }, 500);
    });

    // 购物车鼠标移入移出事件
    $('.shopping .sss').mouseover(function(){
        $('#shop').show();
    });
    $('.shopping .sss').mouseout(function(){
        $('#shop').hide();
    });

    $('#shop').mouseover(function(){
        $(this).show();
    });
    $('#shop').mouseout(function(){
        $(this).hide();
    });














});