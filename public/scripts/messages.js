function getData(){
    let reciever = document.getElementById('reciever').value;
    localStorage.setItem("reciever", reciever);
    return;
}

function getUsername(){
    let username = document.getElementById('username').value;
    var today = new Date();
    var expire = new Date();
    expire.setTime(today.getTime() + 3600000*24*14);
    document.cookie = "username="+username + ";expires="+expire.toGMTString();
    localStorage.setItem("username", username);
    return;
}

function loadLast(id){
   if (localStorage.getItem(id) != ""){
        document.getElementById(id).value = localStorage.getItem(id);
   }
    return;
}

function saveMessage(message){
    if (localStorage.getItem("message") == null && message != ""){
        localStorage.setItem("message", message);
    } else if (message != ""){
        localStorage.setItem("message", localStorage.getItem("message") + " || " + message);
    }
    
    document.getElementById("output").innerHTML = localStorage.getItem("message");    
}

function redirect(){
    window.location.href="messages";
}

function isLoggedIn(){
    if (document.cookie == ""){
        window.location.href="login";
    } 
}
