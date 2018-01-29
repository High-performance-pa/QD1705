define(["spxq", "jquery", "jquery-cookie", "bootstrap"], function(spxq, $){
    var shop = function(){
        $(function(){
            $("#listleft-hover-last").hover(function(){
                    $("#hoverlist").css("display", "block");
                },function(){
                    $("#hoverlist").css("display", "none");
                })
            sc_msg();
            function sc_msg(){
                $.ajax({
                    url: "../data/data.json",
                    type: "get",
                    success: function(res){
                        //a:找出所有cookie数据

                        if(!$.cookie("goods")){
                            //要将购物车内的商品清空
                            $(".sc_right ul").html("");
                            return;
                        }

                        var arr = eval($.cookie("goods"));
                        var html = '';
                        for(var i = 0; i < arr.length; i++){
                            //用id当做下标取出数据
                            html += `
                            <div id = "sc-pro-area-98670947" class = "sc-pro-area ">
                                <i id  = "icon-choose-98670947" class = "icon-choose-normal icon-choose" name = "skuIds"></i>
                                <div class = "sc-pro-main clearfix">
                                    <a href="#" class = "p-img">
                                        <img src="${res[arr[i].id].img}" alt="">
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#" class = "p-name">
                                                ${res[arr[i].id].p1}
                                            </a>
                                        </li>
                                        <li>
                                            <div class = "p-price">
                                                ${res[arr[i].id].d1}
                                            </div>
                                        </li>
                                        <li>
                                            <div class ="p-stock-area">
                                                <input type="text" id = "quantity-98670947" class = "p-stock-text" value="${res[arr[i].id].num}">
                                                <p id = "p-stock-btn-area" class = "p-stock-btn">
                                                    <a style = "cursor:pointer" id ="pro-quantity-plus">+</a>
                                                    <a style = "cursor:pointer"  id = "pro-quantity-minus" class = "disable">-</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li id = "p-price-total-98670947" class = "p-price-total">${res[arr[i].id].d1}</li>
                                        <li>
                                            <a href="#" class = "p-del">删除</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>`
                        }
                        $("#order-pro-98670947").html(html);
                    }
                })
            }
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
            sc_car();
            // var num = $("#pro-quantity-plus").val();
            // function zhi(){
            //     var num = $("#pro-quantity-plus").val();
            // }
            var num = 1;
            $("body").on("click", "#pro-quantity-plus", function(){

                num++;
                $("#quantity-98670947").val(num);
                $("#p-price-total-98670947")
            })
            $("body").on("click", "#pro-quantity-minus", function(){
                num--;
                $("#quantity-98670947").val(num);
                if(num < 2){
                    num = 1;
                }
            })
            $("#sc-cartInfo-totalOriginalPrice").html($("#quantity-98670947").val());
            // function Num(){
            //     var str = $.cookie("goods");
            //         var arr = eval(str);
            //         var same = false; //代表是否有相同商品


            //         //b:遍历所有的对象，判断id是否有相同的，如果有num++
            //         for(var i in arr){
            //             if(arr[i].id == id){
            //                 arr[i].num++;

            //                 var cookieStr = JSON.stringify(arr);
            //                 $.cookie("goods", cookieStr, {
            //                     expires: 7
            //                 })
            //                 same = true;
            //                 break;
            //             }
            //         }
            //         $("#quantity-98670947").val();//有问题
            // }
            // Num();

        })
    }
    return {
        shop:shop
    }
})