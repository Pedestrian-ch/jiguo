define([
    "jquery"
], function ($) {
    function next() {
        $(".next").click(function () {
            if (!$(".hot-slide .slide-box").is(":animated")) {
                $(".hot-slide .slide-box").animate({
                    left: "-1000px",
                }, 1000, function () {
                    $(".slide-box > li").first().appendTo($(".slide-box"));
                    $(".hot-slide .slide-box").css("left", 0);
                });
            }
        });
    }

    function prev() {
        $(".prev").click(function () {
            if (!$(".hot-slide .slide-box").is(":animated")) {
                $(".slide-box > li").last().prependTo($(".slide-box"));
                $(".hot-slide .slide-box").css("left", "-1000px");
                $(".hot-slide .slide-box").animate({
                    left: 0,
                }, 1000);
            }
        });
    }

    function carousel() {
        var t = setInterval(function () {
            if ($(".hot-slide .slide-box").is(":animated")) {
                return
            }
            $(".hot-slide .slide-box").animate({
                left: "-1000px",
            }, 1000, function () {
                $(".slide-box > li").first().appendTo($(".slide-box"))
                $(".hot-slide .slide-box").css("left", 0);
            });
        }, 5000);

        $(".focus").mouseover(function () {
            clearInterval(t);
        });

        $(".focus").mouseleave(function () {
            t = setInterval(function () {
                $(".hot-slide .slide-box").animate({
                    left: "-1000px",
                }, 1000, function () {
                    $(".slide-box > li").first().appendTo($(".slide-box"));
                    $(".hot-slide .slide-box").css("left", 0);
                });
            }, 5000)
        });
    }

    return {
        next: next,
        prev: prev,
        carousel: carousel,
    }
})