define([
    "jquery"
], function ($) {
    // 面向对象编程,将轮播图设置成一个插件
    (function ($) {
        // 扩展jQuery方法轮播图carousel
        $.fn.extend({
            "carousel": function (options) {
                // 将传入的参数与默认参数合并，并替代重复
                var obj = $.extend({
                    stop: false,   /* 是否停止自动轮播 */
                    width: "",     /* 传入轮播图区域的范围 */
                    animate: false,   /* 判断是否正在运行动画 */
                    speed: 800,   /* 动画变化的快慢 */
                    time: 3000,    /* 轮播的时间间隔 */
                }, options)

                // 拿到需要轮播图效果的dom
                var $dom = $(this);
                
                /* 判断自动播放动画是否在运行 */
                var animate1 = false;

                if (!$dom.get(0)) return;

                var methods = {
                    next: function () {
                        $(".next").on("mouseover", function () {
                            obj.stop = true;
                        });
                        $(".next").on("mouseout", function () {
                            obj.stop = false;
                        });

                        $(".next").click(function () {
                            if (obj.animate || animate1) return;
                            animate1 = true;
                            $dom.animate({
                                left: "-" + obj.width,
                            }, obj.speed, function () {
                                $dom.children("li").first().appendTo($dom);
                                $dom.css("left", 0);
                                animate1 = false;
                            });
                        });
                    },

                    prev: function () {
                        $(".prev").on("mouseover", function () {
                            obj.stop = true;
                        });
                        $(".prev").on("mouseout", function () {
                            obj.stop = false;
                        });

                        $(".prev").click(function () {
                            if (obj.animate || animate1) return;
                            animate1 = true;
                            $dom.children("li").last().prependTo($dom);
                            $dom.css("left", "-" + obj.width);
                            $dom.animate({
                                left: 0,
                            }, obj.speed, function () {
                                animate1 = false;
                            });
                        });

                    },

                    handler: function () {
                        
                        $dom.parent().on("mouseover", function () {
                            obj.stop = true;
                        })
                        $dom.parent().on("mouseout", function () {
                            obj.stop = false;
                        })

                        setInterval(function () {
                            if (obj.stop) return;
                            obj.animate = true;
                            $dom.animate({
                                left: "-" + obj.width,
                            }, obj.speed, function () {
                                $dom.children("li").first().appendTo($dom);
                                $dom.css("left", 0);
                                obj.animate = false;
                            });
                        }, obj.time);

                        this.next();
                        this.prev();
                    },
                }

                methods.handler();
                return $dom;
            }
        })
    })(jQuery);


    function start() {
        $(".slide-box").carousel({
            width: "1000px",
            speed: 1000,
            time: 4000,
        })
    }

    return {
        start: start,
    }


    // 这里是面向过程编程的轮播图
    /*    function next() {
           $(".next").click(function () {
               if (!$(".slide-box").is(":animated")) {
                   $(".slide-box").animate({
                       left: "-1000px",
                   }, 1000, function () {
                       $(".slide-box > li").first().appendTo($(".slide-box"));
                       $(".slide-box").css("left", 0);
                   });
               }
           });
       }

       function prev() {
           $(".prev").click(function () {
               if (!$(".slide-box").is(":animated")) {
                   $(".slide-box > li").last().prependTo($(".slide-box"));
                   $(".slide-box").css("left", "-1000px");
                   $(".slide-box").animate({
                       left: 0,
                   }, 1000);
               }
           });
       }

       function carousel() {
           var t = setInterval(function () {
               if ($(".slide-box").is(":animated")) {
                   return
               }
               $(".slide-box").animate({
                   left: "-1000px",
               }, 1000, function () {
                   $(".slide-box > li").first().appendTo($(".slide-box"))
                   $(".slide-box").css("left", 0);
               });
           }, 4000);

           $(".focus").mouseover(function () {
               clearInterval(t);
           });

           $(".focus").mouseout(function () {
               t = setInterval(function () {
                   $(".slide-box").animate({
                       left: "-1000px",
                   }, 1000, function () {
                       $(".slide-box > li").first().appendTo($(".slide-box"));
                       $(".slide-box").css("left", 0);
                   });
               }, 4000)
           });
       }

       return {
           next: next,
           prev: prev,
           carousel: carousel,
       } */
})