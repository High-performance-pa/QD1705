define(["jquery", "jquery-cookie", "bootstrap"], function($){
    var register = function(){
        $(function(){
            $("#xuan1").click(function(){
                $("#class1").css("display", "block")
                $("#class2").css("display", "none")
                $("#xuan1").css("background","#B40707")
                $("#xuan2").css("background","")
            })
            $("#xuan2").click(function(){
                $("#class2").css("display", "block")
                $("#class1").css("display", "none")
                $("#xuan2").css("background","#B40707")
                $("#xuan1").css("background","")
            })
            $("#exampleInputId").blur(function(){
                var oValue = $("#exampleInputId").val();
                $("#exampleInputId").val(oValue);
                if(oValue.length > 18 || oValue.length < 6){
                    $("#error-tips-EMUI5").html("用户名长度应为6-18");
                    $("#error-tips-EMUI5").attr("class", "error-tips");
                }else if(/\d/.test(oValue[0])){
                    $("#error-tips-EMUI5").html("用户名必须以英文字母开头");
                    $("#error-tips-EMUI5").attr("class", "error-tips");
                }else{
                    $("#error-tips-EMUI5").html("用户名输入正确");
                    $("#error-tips-EMUI5").attr("class", "yes-tips");
                }
            })
            $("#exampleInputEmail").blur(function(){
                var oValue = $("#exampleInputEmail").val();
                $("#exampleInputEmail").val(oValue);
                if(oValue.length > 18 || oValue.length < 6){
                    $("#error-tips-EMUI4").html("用户名长度应为6-18");
                    $("#error-tips-EMUI4").attr("class", "error-tips");
                }else if(/\d/.test(oValue[0])){
                    $("#error-tips-EMUI4").html("邮件地址必需以英文字母开头");
                    $("#error-tips-EMUI4").attr("class", "error-tips");
                }else if(/_/.test(oValue[oValue.length - 1])){
                    $("#error-tips-EMUI4").html("请以英文字母或数字结尾");
                    $("#error-tips-EMUI4").attr("class", "error-tips");
                }else if(/\W/.test(oValue)){
                    $("#error-tips-EMUI4").html("邮件地址需由字母，数字或下划线组成");
                    $("#error-tips-EMUI4").attr("class", "error-tips");
                }else{
                    $("#error-tips-EMUI4").html("恭喜，该邮件地址可注册");
                    $("#error-tips-EMUI4").attr("class", "yes-tips");
                }
            })
            $("#exampleInputPassword").blur(function(){
                var oValue = $("#exampleInputPassword").val();
                $("#exampleInputPassword").val(oValue);
                if(oValue.length > 18 || oValue.length < 6){
                    $("#error-tips-EMUI3").html("密码长度应为6-18");
                    $("#error-tips-EMUI3").attr("class", "error-tips");
                }else if(/_/.test(oValue)){
                    $("#error-tips-EMUI3").html("密码里不能包含下划线");
                    $("#error-tips-EMUI3").attr("class", "error-tips");
                }else{
                    $("#error-tips-EMUI3").html("恭喜，该密码可用");
                    $("#error-tips-EMUI3").attr("class", "yes-tips");
                }
            })
            $("#exampleInputPassword1").blur(function(){
                var oValue = $("#exampleInputPassword1").val();
                var oValue1 = $("#exampleInputPassword").val();
                if(oValue == oValue1){
                    $("#error-tips-EMUI2").html("恭喜，该密码可用");
                    $("#error-tips-EMUI2").attr("class", "yes-tips");
                }else{
                    $("#error-tips-EMUI2").html("密码不一致");
                    $("#error-tips-EMUI2").attr("class", "error-tips");
                }
            })
            $("#subm").click(function(){
                alert(1);
                $.cookie("id", $("#exampleInputId").val(), {
                    expires: 7
                })
                $.cookie("email", $("#exampleInputEmail").val(), {
                    expires: 7
                })
                $.cookie("password", $("#exampleInputPassword").val(), {
                    expires: 7
                })
                $.cookie("password1", $("#exampleInputPassword1").val(), {
                    expires: 7
                })
                alert($.cookie("id"));
            })

        })
    return "这是注册";
    }
    return {
            register:register
        }
})