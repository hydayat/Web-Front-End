function shift(){
    document.getElementById('login').classList.add('shiftleft');
    document.getElementById('signup').classList.remove('shiftright');
}
function back(){
    document.getElementById('login').classList.remove('shiftleft');
    document.getElementById('signup').classList.add('shiftright');
}
function login() {
    //创建核心对象
    xmlhttp = null;
    if (window.XMLHttpRequest) { // code for Firefox, Opera, IE7, etc.
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //编写回调函数
    xmlhttp.onreadystatechange = function() {
        //if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        if (xmlhttp.readyState == 4) {
            document.location.href="store.html"
        }
    }
    //open设置请求方式和请求路径
    xmlhttp.open("post", "/signup", true); //一个servlet，后面还可以写是否同步
    //设置发送数据为表单
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //send 发送
    var username = document.getElementById("usernameLog").value;
    var password = document.getElementById("passwordLog").value;
    xmlhttp.send(`username=${username}&password=${password}`);
}
function signup() {
    //检查密码是否一致
    var password1 = document.getElementById("passwordSign").value;
    var password2 = document.getElementById("passwordRe").value;
    if(password1 != password2){
        alert("两次输入的密码不一致");
        return;
    }
    //创建核心对象
    xmlhttp = null;
    if (window.XMLHttpRequest) { // code for Firefox, Opera, IE7, etc.
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //编写回调函数
    xmlhttp.onreadystatechange = function() {
        //if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        if (xmlhttp.readyState == 4) {
            document.location.href="signin.html";
        }
    }
    //open设置请求方式和请求路径
    xmlhttp.open("post", "/signup", true); //一个servlet，后面还可以写是否同步
    //设置发送数据为表单
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //send 发送
    var username = document.getElementById("usernameSign").value;
    xmlhttp.send(`username=${username}&password=${password1}`);
}

window.onload=function(){
    document.querySelector('#login > form > button:nth-child(3)').addEventListener('click', login);
    document.querySelector('#login > form > button:last-child').addEventListener('click', shift);
    document.querySelector('#signup > form > button:nth-child(4)').addEventListener('click', signup);
    document.querySelector('#signup > form > button:last-child').addEventListener('click', back);
}