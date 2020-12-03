define([
    "jquery"
], function($) {
    (function ($){
        $.fn.extend({"backBtn":function (options){
            // 建立一个对象存储back组件的相关数据,
            var backObj = $.extend({
                location: 0,   /* 返回位置的定位 */
                right: "",     /* 固定定位的右边距 */
                bottom: "",     /* 固定定位的下边距 */
                height: 0,      /* 滚动条到达多少高度时显示dom */
                speed: 200,     /* 返回的速度 */
                ifshow:false,   /* 是否一开始显示dom */
            },options)

            var $dom = $(this);
            if(!$dom.get(0)) return;
            var methods = {
                // 定位dom
                gps : function (){
                    $dom.css({
                        right : backObj.right,
                        bottom : backObj.bottom,
                    })
                },
                // 显示或隐藏dom
                ifShow : function (){
                    if($(window).scrollTop() > backObj.height){
                        // $(".back").removeClass("none");
                        $dom.show();
                    }else{
                        // $(".back").addClass("none");
                        $dom.hide();
                    }
                },
                // dom的处理方法
                handler : function (){
                    this.gps();

                    if(!backObj.ifshow){
                        this.ifShow();
                    }

                    $(window).scroll(function (){
                        methods.ifShow();
                    });

                
                    $dom.click(function (){
                        $("html,body").animate({
                            scrollTop: backObj.location,
                        },backObj.speed)
                    });
                }
            }
            methods.handler();
            return $dom;  /* 方便链式调用 */
        }
    })
    })(jQuery);

    function start(){
        $(".back").backBtn({
            right : "8%",
            bottom : "50px",
        })
    }


    return {
        start :start,
    }


    /* function backScroll(){
        $(window).scroll(function (){
            if($(window).scrollTop() > 0){
                // $(".back").removeClass("none");
                $(".back").show();
            }else{
                // $(".back").addClass("none");
                $(".back").hide();
            }
        })
    }

    function backTop(){
        $(".back").click(function (){
            $("html,body").animate({
                scrollTop:0,
            },200)
        })
    }

    return {
        backScroll :backScroll,
        backTop :backTop,
    } */
});