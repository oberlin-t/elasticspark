function setLoggedIn(){
    if (localStorage.getItem("username") != null){
        document.getElementById("login").innerHTML = localStorage.getItem("username");
    }
}
