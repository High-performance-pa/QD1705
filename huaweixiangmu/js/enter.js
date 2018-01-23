//编写登录窗口的代码
define(["jquery", "jquery-cookie"], function($){
    var main= function(){
        $(function(){
            if($.cookie("vamcc")){
                alert("自动登录成功");
            }
            $("#button-login").click(function(){
                $.cookie("vamcc", $("#vamcc").value, {
                    expires: 7
                })
                $.cookie("vamc", $("#vamc").value, {
                    expires: 7
                })
            })
        })
        return "这是登录";
    }
    return {
        main:main
    }
})