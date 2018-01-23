//AMD
define(["jquery"], function($){
	var slide = function(){
		var aBtns = $("#play").find("ol").find("li");
		var oUl = $("#play").find("ul");
		var aLi = oUl.find("li");

		aBtns.click(function(){
			aBtns.attr("class", "");
			$(this).attr("class", "active");

			//让ul去动
			oUl.animate({
				top: -150 * $(this).index()
			}, 500, function(){
				console.log("执行成功了");
			})
		})






		return "这里是循环广告窗口代码";
	}

	return {
		slide: slide
	}
})