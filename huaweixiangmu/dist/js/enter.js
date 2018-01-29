//编写登录窗口的代码
define(["register", "jquery", "jquery-cookie"], function(register,$){
    var main= function(){
        $(function(){
            var Email = $.cookie("email");
            var password = $.cookie("password");
            $("#button-login").click(function(){

                if($("#vamcc").val() == Email && $("#vamc").val() == password){
                    alert("登录成功");
                }else{
                    alert("登录失败");
                }
                $.cookie("vamcc", $("#vamcc").val(), {
                    expires: 7
                })
                $.cookie("vamc", $("#vamc").val(), {
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