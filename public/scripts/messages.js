function getUsername(){
    let username = document.getElementById('username').value;
    document.cookie = "username="+username;
}
