//AMD
/*
	循环广告窗口实现方法：

	1、将第一张图片添加在最后一张图片的后面

*/



define(["jquery"], function($){
	var slide = function(){
		var aBtns = $("#play").find("ol").find("li");
		var oUl = $("#playimg");
		var aLi = oUl.find("li");

		//a:设置iNow，代表当前显示的图片的下标
		var iNow = 0;
		var timer = null;

		aBtns.click(function(){
			//b:点击按钮，将当前的iNow改成当前按钮的下标
			iNow = $(this).index();
			tab();


		})


		function tab(){
			aBtns.attr("class", "");
			aBtns.eq(iNow).attr("class", "active");

			//让ul去动
			oUl.css({
				top: -500 * iNow,
				opacity: 0.5
			}).animate({
				opacity: 1
			},500,function(){
				if(iNow == aBtns.size()){
					oUl.css("top", 0);
					iNow = 0; //重置
				}
			})
		}

		//c:我们需要启动定时器，设置让循环广告窗口自己滚动
		function timerInner(){
			iNow++;
			document.title = iNow;
			tab();
			//处理第六张图片 是第一张图片 显示下标为0的按钮选中
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "active");
			}

		}

		//d: 启动定时器
		timer = setInterval(timerInner, 3000);

		//e:添加移入移出事件
		oUl.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 3000);
		})


		return "这里是循环广告窗口代码";
	}

	return {
		slide: slide
	}
})












