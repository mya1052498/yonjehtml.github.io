
$(function(){
    // ========================================================上方選單捲動縮小

    // $(window).scroll(function(){
    //     var windowscroll = $(window).scrollTop();
    //     if(windowscroll >130){
    //         $(".top").addClass("smallTop");
    //         $(".top").animate({top:0,opacity:1},500)
    //     }else{
    //         $(".top").removeClass("smallTop").stop(true,false).removeAttr("style");
    //     }
    //     console.log(windowscroll);
    // })

    // ========================================================上方選單捲動縮小

    // ========================================================按鈕連結跳轉
    // var el0 = $(".top-logo").offset().top;
    var el1 = $(".about").offset().top;
    var el2 = $(".contact").offset().top;

    $(".toTop").click(function(){
        $("html,body").animate({scrollTop:0},1000)
        return false;
    })

    $(".toTop2").click(function(){
        $("html,body").animate({scrollTop:0},1000)
        return false;
    })


    $(".toTopPro").click(function(){
        $("html,body").animate({scrollTop:0},1000)
        return false;
    })

    $(".btn-about").click(function(){
        $("html,body").animate({scrollTop:el1 - 40},1000)
        return false;
    })
    $(".btn-contact").click(function(){
        $("html,body").animate({scrollTop:el2 -675},1000)
        return false;
    })
    // ========================================================按鈕連結跳轉

    // ========================================================按鈕連結切換照片



    // ${".pic1"}.onclick = changPic;
    // ${".pic2"}.onclick = changPic;


})