function hideCats(){
    var theCats = document.getElementsByClassName("theCats");
    for (var j = 0; j < theCats.length; ++j){
        theCats[j].style.display = "none";
    }
    var profiles = document.getElementsByClassName("profile");
    for (var i = 0; i < profiles.length; ++i){
        profiles[i].style.display = "block";
    }
    document.getElementsByTagName("h1")[0].innerHTML = "Cats!";
}

function initialHideCats(){
    var theCats = document.getElementsByClassName("theCats");
    for (var j = 0; j < theCats.length; ++j){
        theCats[j].style.display = "none";
    }
}

function revealMore(cat){
    document.getElementsByTagName("h1")[0].innerHTML = "<span onclick='hideCats();'>&#10229</span>";
    
    var profiles = document.getElementsByClassName("profile");
    for (var i = 0; i < profiles.length; ++i){
        profiles[i].style.display = "none";
    }
    
    if(cat == 'trip'){
        document.getElementById("tripImages").style.display = "block";
    }
    if(cat == 'chad'){
        document.getElementById("chadImages").style.display = "block";
    }
    if(cat == 'denali'){
        document.getElementById("denaliImages").style.display = "block";
    }
    if(cat == 'hopper'){
        document.getElementById("hopperImages").style.display = "block";
    }
}

