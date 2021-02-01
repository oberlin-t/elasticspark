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
