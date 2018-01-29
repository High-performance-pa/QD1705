define(["shop", "jquery", "jquery-cookie", "bootstrap"], function(shop, $){
    var spxq = function(){
        $(function(){
            $("#listleft-hover-last").hover(function(){
                $("#hoverlist").css("display", "block");
            },function(){
                $("#hoverlist").css("display", "none");
            })
            $(".listright").find("li").eq(3).hover(function(){
                $(".listright li:eq(3) div").css("display", "block");
            },function(){
                $(".listright li:eq(3) div").css("display", "none");
            })
            $.ajax({
                url: "../data/xq.json",
                type: "GET",
                success: function(res){
                    var html = "";

                    for(var i = 0; i < res.length; i++){
                        html += `
                        <div id = "naverSub00" class = "naver-sub-wrap hide" style = "display:none;">
                            <div class = "p-title clearfix">
                                <div class = "s1 f1">
                                    <a href="#" class = "">${res[i].a1}</a>
                                </div>
                                <div class = "s2 f1 clearfix">
                                    <a href="#" class = "f1">${res[i].a2}</a>
                                    <a href="#" class = "f1">${res[i].a3}</a>
                                    <a href="#" class = "f1">${res[i].a4}</a>
                                    <a href="#" class = "f1">${res[i].a5}</a>
                                    <a href="#" class = "f1"></a>
                                    <a href="#" class = "f1"></a>
                                    <a href="#" class = "f1"></a>
                                    <a href="#" class = "f1"></a>
                                    <a href="#" class = "f1"></a>

                                </div>
                            </div>
                            <ul id = "zxnav_0_prolist" class = "grid-list clearfix">
                                <li class = "grid-items">
                                    <a href="#" class = "thumb">
                                        <p class = "grid-img">
                                            <img src="${res[i].img1}" >
                                        </p>
                                        <div class = "grid-title">${res[i].p1}</div>
                                        <p class = "grid-price">${res[i].d1}</p>
                                    </a>
                                </li><li class = "grid-items">
                                    <a href="#" class = "thumb">
                                        <p class = "grid-img">
                                            <img src="${res[i].img2}" >
                                        </p>
                                        <div class = "grid-title">${res[i].p2}</div>
                                        <p class = "grid-price">${res[i].d2}</p>
                                    </a>
                                </li><li class = "grid-items">
                                    <a href="#" class = "thumb">
                                        <p class = "grid-img">
                                            <img src="${res[i].img3}" >
                                        </p>
                                        <div class = "grid-title">${res[i].p3}</div>
                                        <p class = "grid-price">${res[i].d3}</p>
                                    </a>
                                </li>
                            </ul>
                        </div>`;
                    }
                    $(".naver-sub").html(html);

                }
            })
            //这有问题，并没有实现
            var arr = $(".naver-sub").find("div");
            for(var i = 0;i < arr.length; i++){

                $(".header").find(".layout").find("left").find("ul").find("li").mouseover(function(){
                    $("#naverSub00").find("div").eq(i).css("display", "block")
                })
                $(".header").find(".layout").find("left").find("ul").find("li").mouseout(function(){
                    $("#naverSub00").find("div").eq(i).css("display", "none")
                })
            }
            $.ajax({
                url: "../data/xq.json",
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var i = 0;i < res.length;i++){
                        html　+= `<li class = "current">
                                    <a href="#">
                                        <img src="../images/xq/s1.jpg" alt="">
                                    </a>
                                  </li>`;
                    }
                }
            })
            $(".button-style-1").click(function(){
                var id = this.id;
                $("#cart-tips").css("display", "block");
                var first = $.cookie("goods") == null ? true : false;
                if(first){
                    $.cookie("goods", "[{id:" + id + ",num:1}]", {
                        expires: 7
                    });
                }else{
                    var str = $.cookie("goods");
                    var arr = eval(str);
                    var same = false; //代表是否有相同商品


                    //b:遍历所有的对象，判断id是否有相同的，如果有num++
                    for(var i in arr){
                        if(arr[i].id == id){
                            arr[i].num++;

                            var cookieStr = JSON.stringify(arr);
                            $.cookie("goods", cookieStr, {
                                expires: 7
                            })
                            same = true;
                            break;
                        }
                    }
                    if(!same){
                        var obj = {id: id, num: 1};
                        arr.push(obj);
                        var cookieStr = JSON.stringify(arr);
                        $.cookie("goods", "[{id:" + id + ",num:1}]", {
                            expires: 7
                        });
                    }
                }
                sc_car();
                //为了阻止冒泡
                return false;
            })
            function sc_car(){
                var sc_str = $.cookie("goods");
                if(sc_str){ //如果cookie存在
                    var arr = eval(sc_str);
                    var sum = 0; //用于累加的和
                    for(var i in arr){
                        sum += arr[i].num;
                    }

                    $("#sc-cartInfo-totalOriginalPrice").html(sum);
                }else{
                    $("#sc-cartInfo-totalOriginalPrice").html(0);
                }
            }
            $(".pro-popup-close").click(function(){
                $("#cart-tips").css("display", "none")
            })
            $(".button-style-2").click(function(){
                $("#cart-tips").css("display", "none")
            })
            // alert($(".button-style-1").offset().left);

            // $(".button-go-cart").click(function(){
            //     $(".button-go-cart").attr("href", "'localhost:8888/shop.html'")
            // })
        })
    }
    return {
        spxq: spxq
    }
})