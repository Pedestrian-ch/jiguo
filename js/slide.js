define(["jquery"],function ($){
    function carousel(){
        $(".next").click(function (){
            if(!$(".hot-slide .slide-box").is(":animated")){
                $(".hot-slide .slide-box").animate({
                    left: "-1000px",
                },1000,function (){
                    $(".slide-box > li").first().appendTo($(".slide-box"))
                    $(".hot-slide .slide-box").css("left",0);
                })
            }
        })

        $(".prev").click(function (){
            if(!$(".hot-slide .slide-box").is(":animated")){
                $(".slide-box > li").last().prependTo($(".slide-box"))
                $(".hot-slide .slide-box").css("left","-1000px");
                $(".hot-slide .slide-box").animate({
                left: 0,
                },1000)
            }
        })

        var t = setInterval(function (){
            $(".hot-slide .slide-box").animate({
                left: "-1000px",
            },1000,function (){
                $(".slide-box > li").first().appendTo($(".slide-box"))
                $(".hot-slide .slide-box").css("left",0);
            })
        },3000)

        $(".focus").mouseover(function (){
            clearInterval(t);
        })

        $(".focus").mouseleave(function () { 
            t = setInterval(function (){
                $(".hot-slide .slide-box").animate({
                    left: "-1000px",
                },1000,function (){
                    $(".slide-box > li").first().appendTo($(".slide-box"))
                    $(".hot-slide .slide-box").css("left",0);
                })
            },3000)
        });
    }

    return {
        carousel:carousel,
    }
})