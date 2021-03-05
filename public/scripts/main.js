function setLoggedIn(){
    if (document.cookie != ""){
        document.getElementById("login").innerHTML = localStorage.getItem("username");
    }
}
