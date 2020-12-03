define([
    'jquery',
], function ($) {
    function loading() {
        // 统计点击次数
        var num = 0;

        // 统计数据的一维长度
        var len;
        $(".addMore").click(function () {
            /* 如果网速过慢，样式显示正在加载中 */
            $(".load-btn").addClass("loading").html("正在加载中");

            // 加载数据并添加到ul列表中
            $.ajax({
                type: "post",
                url: "json/json.js",
                dataType: "json",
                success: function (data) {
                    // 此次点击加载的数据列表
                    var goods = data[num];
                    // 返回数据的长度,即需要点击的多少次才能加载完数据
                    len = data.length;

                    num++;

                    for (var i = 0; i < goods.length; i++) {
                        var good = goods[i];
                        $(".play").append(`<li>
                    <a href="./use/detail.html">
                        <img src="` + good["img"] + `" width="220" height="130">
    
                        <div class="info">
                            <p class="name">
                                ` + good["name"] + `
                                <span>` + good["text"] + `</span>
                            </p>
                            
                            <div class="tip">
                                <span class="price">` + good["price"] + `</span>
                                <div class="right">
                                    <span class="heart">3</span>
                                    <span class="talk">3</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>`);
                    }

                    /* 当后面还有数据可以加载时，样式回到点击加载更多 */
                    $(".addMore").removeClass("loading").html("点击加载更多");

                    /* 统计点击次数，当点击次数大于数据的二维数组长度时，显示没有更多了 */
                    if (num == len) {
                        $(".load").html("没有更多啦~")
                    }
                },
            });
        });


        $(".play-more").click(function () {
            /* 如果网速过慢，样式显示正在加载中 */
            $(".load-btn").addClass("loading").html("正在加载中");

            $.ajax({
                url: "../json/json1.js",
                dataType: "jsonp",
                type: "get", //可以省略
                jsonpCallback: "playMore", //->自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
                jsonp: "callback", //->把传递函数名的那个形参callback，可省略
                success: function (data) {
                    // 此次点击加载的数据列表
                    var goods = data[num];
                    // 返回数据的长度,即需要点击的多少次才能加载完数据
                    len = data.length;

                    num++;

                    for (var i = 0; i < goods.length; i++) {
                        var good = goods[i];
                        $(".play").append(`<li>
                <a href="../use/detail.html">
                    <img src="` + good["img"] + `" width="220" height="130">

                    <div class="info">
                        <p class="name">
                            ` + good["name"] + `
                            <span>` + good["text"] + `</span>
                        </p>
                        
                        <div class="tip">
                            <span class="price">` + good["price"] + `</span>
                            <div class="right">
                                <span class="heart">3</span>
                                <span class="talk">3</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>`);
                    }

                    /* 当后面还有数据可以加载时，样式回到点击加载更多 */
                    $(".play-more").removeClass("loading").html("点击加载更多");

                    /* 统计点击次数，当点击次数大于数据的二维数组长度时，显示没有更多了 */
                    if (num == len) {
                        $(".load").html("没有更多啦~")
                    }
                },
            });
        });

        $(".guide-more").click(function () {
            /* 如果网速过慢，样式显示正在加载中 */
            $(".load-btn").addClass("loading").html("正在加载中");

            $.ajax({
                url: "../json/json2.js",
                dataType: "jsonp",
                type: "get", //可以省略
                jsonpCallback: "guideMore", //->自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
                jsonp: "callback", //->把传递函数名的那个形参callback，可省略
                success: function (data) {
                    // 此次点击加载的数据列表
                    var goods = data[num];
                    // 返回数据的长度,即需要点击的多少次才能加载完数据
                    len = data.length;

                    num++;

                    for (var i = 0; i < goods.length; i++) {
                        var good = goods[i];
                        $(".play").append(`<li>
                            <a href="detail.html">
                                <img src="`+good["img"]+`" width="220" height="130">
    
                                <div class="info line">
                                    <p class="name">`+good["text"]+`</p>
    
                                    <div class="tip">
                                        <div class="right">
                                            <span class="heart">3</span>
                                            <span class="talk">3</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>`);
                    }

                    /* 当后面还有数据可以加载时，样式回到点击加载更多 */
                    $(".guide-more").removeClass("loading").html("点击加载更多");

                    /* 统计点击次数，当点击次数大于数据的二维数组长度时，显示没有更多了 */
                    if (num == len) {
                        $(".load").html("没有更多啦~")
                    }
                },
            });
        });

        // use页面的滚动加载
        var isload = false;
        // 表示只有在use页面才启动此滚动事件
        if($(".use-more").length) {
            $(window).scroll(function (){
                if(isload) return;
                var bh = $("body").height();
                var wh = $(this).height();
                var foot = $("footer").height();
    
                if($(this).scrollTop() > bh-wh-foot){
                    isload = true;
                    /* 如果网速过慢，样式显示正在加载中 */
                $(".load-btn").addClass("loading").html("向下拉加载更多");
    
                $.ajax({
                    url: "../json/json3.js",
                    dataType: "jsonp",
                    type: "get", //可以省略
                    jsonpCallback: "useMore", //->自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
                    jsonp: "callback", //->把传递函数名的那个形参callback，可省略
                    success: function (data) {
                        // 此次点击加载的数据列表
                        var goods = data[num];
                        // 返回数据的长度,即需要点击的多少次才能加载完数据
                        len = data.length;
    
                        num++;
    
                        for (var i = 0; i < goods.length; i++) {
                            var good = goods[i];
                            $(".use-list").append(`<li>
                            <a href="detail.html">
                                <span class="top-tip shoufa">首发</span>
                                <img src="`+good["images"]+`" width="220" height="130">
                                
                                <div class="test-con">
                                    <h2 class="name">`+good["text"]+`</h2>
                                    <p class="tabs red">
                                        <span>2032</span>
                                        <span>20台</span>
                                    </p>
                                    <p class="sq">
                                        <span>1392</span>申请
                                    </p>
                                    <p class="time red">剩余时间2天</p>
                                </div>
                            </a>
                        </li>`);
                        }
    
                        isload = false;
                        /* 当后面还有数据可以加载时，样式回到点击加载更多 */
                        $(".use-more").removeClass("loading").html("向下拉加载更多");
    
                        /* 统计点击次数，当点击次数大于数据的二维数组长度时，显示没有更多了 */
                        if (num == len) {
                            $(".load").html("没有更多啦~")
                            isload = true;
                        }
                    },
                });
                }
            });
        }
        

        // use页面的点击换版块事件
        $(".all").click(function (e){
            $(".statu .wrap a").removeClass("on");
            $(this).addClass("on");

            $(".sq-con").add(".sy-con").add(".end-con").css("display","none");
            $(".all-con").css("display","block");

            $(".all-con .exam").html(`<ul class="use-list">
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot1.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">巴慕达 The Toaster 烤面包机</h2>
                        <p class="tabs red">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time red">剩余时间2天</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot2.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">Osprey小鹰户外运动专业腰包</h2>
                        <p class="tabs green">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time green">查看试用名单</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot3.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">Liquid Image 338 运动摄像眼镜</h2>
                        <p class="tabs red">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time red">剩余时间2天</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot4.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">Liquid Image 338 运动摄像眼镜</h2>
                        <p class="tabs red">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time red">剩余时间2天</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot5.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">巴慕达 The Toaster 烤面包机</h2>
                        <p class="tabs red">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time red">剩余时间2天</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot6.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">Osprey小鹰户外运动专业腰包</h2>
                        <p class="tabs green">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time green">查看试用名单</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot7.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">Liquid Image 338 运动摄像眼镜</h2>
                        <p class="tabs red">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time red">剩余时间2天</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot8.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">Liquid Image 338 运动摄像眼镜</h2>
                        <p class="tabs red">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time red">剩余时间2天</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot9.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">巴慕达 The Toaster 烤面包机</h2>
                        <p class="tabs red">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time red">剩余时间2天</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot10.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">Osprey小鹰户外运动专业腰包</h2>
                        <p class="tabs green">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time green">查看试用名单</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot11.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">Liquid Image 338 运动摄像眼镜</h2>
                        <p class="tabs red">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time red">剩余时间2天</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="detail.html">
                    <span class="top-tip shoufa">首发</span>
                    <img src="../images/hot12.jpg" width="220" height="130">
                    
                    <div class="test-con">
                        <h2 class="name">Liquid Image 338 运动摄像眼镜</h2>
                        <p class="tabs red">
                            <span>2032</span>
                            <span>20台</span>
                        </p>
                        <p class="sq">
                            <span>1392</span>申请
                        </p>
                        <p class="time red">剩余时间2天</p>
                    </div>
                </a>
            </li>
        </ul>

        <div class="load">
            <a href="javascript:void(0)" class="load-btn use-more">向下拉加载更多</a>
        </div>`);
            num = 0;
            isload = false;
            
            e.preventDefault();
        });

        $(".sq").click(function (e){
            $(".statu .wrap a").removeClass("on");
            $(this).addClass("on");

            $(".all-con").add(".sy-con").add(".end-con").css("display","none")
            $(".sq-con").css("display","block");

            e.preventDefault();
        });

        $(".sy").click(function (e){
            $(".statu .wrap a").removeClass("on");
            $(this).addClass("on");

            $(".all-con").add(".sq-con").add(".end-con").css("display","none")
            $(".sy-con").css("display","block");

            e.preventDefault();
        });

        $(".end").click(function (e){
            $(".statu .wrap a").removeClass("on");
            $(this).addClass("on");

            $(".all-con").add(".sq-con").add(".sy-con").css("display","none")
            $(".end-con").css("display","block");

            e.preventDefault();
        });


        $(".exe-more").click(function () {
            /* 如果网速过慢，样式显示正在加载中 */
            $(".load-btn").addClass("loading").html("正在加载中");

            $.ajax({
                url: "../json/json4.js",
                dataType: "jsonp",
                type: "get", //可以省略
                jsonpCallback: "exeMore", //->自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
                jsonp: "callback", //->把传递函数名的那个形参callback，可省略
                success: function (data) {
                    // 此次点击加载的数据列表
                    var goods = data[num];
                    // 返回数据的长度,即需要点击的多少次才能加载完数据
                    len = data.length;

                    num++;

                    for (var i = 0; i < goods.length; i++) {
                        var good = goods[i];
                        $(".tybg").append(`<li>
                        <a href="../guide/detail.html">
                            <img src="`+good["img"]+`" width="700" height="412">
                            <div class="tybg-box">
                                <p>`+good["text"]+`</p>
                                <div class="tip clearfix">
                                    <div class="avatar left">
                                        &nbsp;<span class="name">`+good["uName"]+`</span>&nbsp;&nbsp;`+good["sTime"]+`
                                    </div>
                                    <div class="right">
                                        <span class="zan">3</span>
                                        <span class="talk">3</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="../guide/detail.html">
                            <div class="click-look">关于格林威特空气净化器还有 4 篇报告，点击查看</div>
                        </a>
                    </li>`);
                    }

                    /* 当后面还有数据可以加载时，样式回到点击加载更多 */
                    $(".exe-more").removeClass("loading").html("点击加载更多");

                    /* 统计点击次数，当点击次数大于数据的二维数组长度时，显示没有更多了 */
                    if (num == len) {
                        $(".load").html("没有更多啦~")
                    }
                },
            });
        });
    }

    return {
        loading: loading,
    }

});