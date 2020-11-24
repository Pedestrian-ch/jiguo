define([
    'jquery',
], function ($) {
    function loading() {
        // 统计点击次数
        var num = 0;

        // 统计数据的一维长度
        var len;

        $(".load-btn").click(function () {
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

                    for (var i = 0; i < goods.length; i++){
                        var good = goods[i];
                        $(".play").append(`<li>
                    <a href="">
                        <img src="`+good["img"]+`" width="220" height="130">
    
                        <div class="info">
                            <p class="name">
                                `+good["name"] +`
                                <span>`+good["text"]+`</span>
                            </p>
                            
                            <div class="tip">
                                <span class="price">`+good["price"]+`</span>
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
                    $(".load-btn").removeClass("loading").html("点击加载更多");

                    /* 统计点击次数，当点击次数大于数据的二维数组长度时，显示没有更多了 */
                    if(num == len){
                        $(".load").html("没有更多啦~")
                    }
                }
            });
        })
    }

    return {
        loading: loading,
    }
});