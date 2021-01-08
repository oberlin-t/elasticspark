function fgColor(fg) {
    
    let divElements = document.getElementsByTagName('div');
    let navElements = document.getElementsByTagName('a'); //this might hit some other hyperlinks again with styling though its not clear if that matters?
   
    for (var i=0; i<divElements.length; i++){
        divElements[i].style.color = "#" + String(fg);
    }
    
    for (var j=0; j<navElements.length; j++){
        navElements[j].style.color = "#" + String(fg);
    }
}

function bgColor(bg){
    document.body.style.background = "#" + String(bg);
}

function grabColors() {
    //declare neccacary variables
    let fgcol = document.getElementById('fgcolor').value;
    let bgcol = document.getElementById('bgcolor').value;

    //set colors
    fgColor(fgcol);
    bgColor(bgcol);
    //save settings in localStorage
    localStorage.setItem("background", String(bgcol))
    localStorage.setItem("foreground", String(fgcol))
}

function loadCookie(){
    
    var fg = localStorage.getItem("foreground");
    var bg = localStorage.getItem("background");

    if (localStorage.getItem("foreground") != ""){
        fgColor(fg);
    }
    if (localStorage.getItem("background") != ""){
        bgColor(bg);
    }
}


