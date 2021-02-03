function getUsername(){
    let username = document.getElementById('username').value;
    let reciever = document.getElementById('reciever').value;
    document.cookie = "username="+username;
    localStorage.setItem("username", username);
    localStorage.setItem("reciever", reciever);
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
