$(document).ready(function() {
    $("#submit").click(function() {
        let username = $("#username").val();
        let password = $("#password").val();
        if(username == null || username == ""){ alert("username") }
        else if(password == null || password == ""){ alert("password") }
        if(username != "" && password != ""){ $("#btnSave").click() }
    });
});