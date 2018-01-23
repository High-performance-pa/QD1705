define(["jquery", "jquery-cookie"], function($){
    var main = function(){
        $(function(){
            $("#button-top-close").click(function(){
                $("#imghead").remove();
                $(this).remove();
            })
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
                url: "../data/lunbo.json",
                type: "GET",
                success: function(res){
                    var html = "";

                    for(var i = 0; i < res.length; i++){
                        html += `<a href = "${res[i].src}"><li class = "goods_item">
                                    <img src="${res[i].img}" alt="我是图片">
                               </li></a>`;
                    }
                    $("#playimg").html(html);

                }
            })
            $.ajax({
                url: "../data/xuanxiangka.json",
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var j = 0; j < 6; j++ ){
                        for(var i = 0; i < res.length; i++){
                            if(i == j + 1 ){
                            html += `
                            <li>
                            <div class = "category-info">
                        <div>
                            <a href="" target = "_blank">
                                <span>${res[i].t1}</span>
                            </a>
                        </div>
                        <a href="" target = "_blank">
                            <span>荣耀</span>
                        </a>
                        <a href="" target = "_blank">
                            <span>HUAWEI P系列</span>
                        </a>
                        <i></i>
                    </div>
                            <div class = "category-panels" >
                            <div class = "p-title">
                                <a href="" target = "_blank">
                                    <span class = "f1">${res[i].title}</span>
                                    <span class = "btn-next">></span>
                                </a>
                            </div>
                            <ul class = "subcate-list">
                                <li class = "subcate-item">
                                    <a href="" target = "_blank">
                                        <span>${res[i].s1}</span>
                                    </a>
                                </li>
                                <li class = "subcate-item">
                                    <a href="" target = "_blank">
                                        <span>${res[i].s2}</span>
                                    </a>
                                </li>
                                <li class = "subcate-item">
                                    <a href="" target = "_blank">
                                        <span>${res[i].s3}</span>
                                    </a>
                                </li>
                            </ul>
                            <div class = "p-pro">
                                <ul class = "grid-list">
                                    <li class = "grid-items">
                                        <a href="" class = "thumb">
                                            <p class = "grid-img">
                                                <img src="${res[i].img1}">
                                            </p>
                                            <div class = "grid-title">${res[i].img1p}</div>
                                            <p class = "grid-price">${res[i].dol1}</p>
                                        </a>
                                    </li>
                                    <li class = "grid-items">
                                        <a href="" class = "thumb">
                                            <p class = "grid-img">
                                                <img src="${res[i].img2}">
                                            </p>
                                            <div class = "grid-title">${res[i].img2p}</div>
                                            <p class = "grid-price">${res[i].dol2}</p>
                                        </a>
                                    </li>
                                    <li class = "grid-items">
                                        <a href="" class = "thumb">
                                            <p class = "grid-img">
                                                <img src="${res[i].img3}">
                                            </p>
                                            <div class = "grid-title">${res[i].img3p}</div>
                                            <p class = "grid-price">${res[i].dol3}</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </li>`;
                        }
                        $("#category-list").html(html);
                    }

                }

                }
            })
            $("#category-list").on("mouseover", "li", function(){
                // console.log(this);
                $(this).find("div").eq(2).css("display", "block");
            })
            $("#category-list").on("mouseout", "li", function(){
                $(this).find("div").eq(2).css("display", "none");
            })
            // $("#category-list").on("mouseout", "li", function(){
            //     $(this ".category-panels").css("display", "none");
            // })
            // $("#category-list").find("li").mouseover(function(){
            //     $(this).find("div").css("display", "block");
            // })
            // $("#category-list").find("li").mouseout(function(){
            //     $(this).find("div").css("display", "none");
            // })
            $.ajax({
                url: "../data/shanpin1.json",
                type: "GET",
                success: function(res){
                    var html = "";

                    for(var i = 0; i < res.length; i++){
                        html += `<li>
                                <a href="#" class = "item">
                                    <img src="${res[i].img}">
                                </a>
                            </li>`;
                    }
                    $(".home-channel-list111").find("ul").html(html);

                }
            })
            $.ajax({
                url: "../data/sp2.json",
                type: "GET",
                success: function(res){
                    var html = "";

                    for(var i = 0; i < res.length; i++){
                        html += `   <li class = "grid-items">
                                        <a href="#" class = "thumb">
                                            <p class = "grid-img">
                                                <img src="${res[i].img1}">
                                            </p>
                                            <div class = "grid-title">${res[i].p1}</div>
                                            <p class = "grid-desc">${res[i].p2}</p>
                                            <p class = "grid-price">${res[i].d1}</p>
                                            <p class = "grid-tips"><img src="${res[i].img2}"></p>
                                        </a>
                                    </li>
`;
                    }
                    $(".span-968").find("ul").html(html);

                }
            })
            $.ajax({
                url: "../data/sp3.json",
                type: "GET",
                success: function(res){
                    var html = "";

                    for(var i = 0; i < res.length; i++){
                        html += `    <li class = "grid-items swiper-slide swiper-slide-visible swiper-slide-active">
                                        <a href="#" class = "thumb">
                                            <p class = "grid-img">
                                                <img src="${res[i].img1}" alt="huawei">
                                            </p>
                                            <div class = "grid-title">${res[i].p1}</div>
                                            <p class = "grid-desc">${res[i].p2}</p>
                                            <p class = "grid-price">${res[i].d1}</p>
                                        </a>
                                    </li>
`;
                    }
                    $(".goods-rolling").find("ul").html(html);

                }
            })
            // var iNow = 0;
            // $("#btnleft").click(function(){
            //     iNow ++;
            //     $("#changgungun").animate({
            //         left: -100 * iNow,
            //         opacity: 1
            //     },500,function(){
            //         if(iNow >= $("#changgungun").width()){
            //             $("#changgungun").css("right", 0);
            //             iNow = 0; //重置
            //         }
            //     })
            // $("#btnright").click(function(){
            //     $("#changgungun").css("left","-160px")
            // })
        })
    }
    return {
        main:main
    }
})