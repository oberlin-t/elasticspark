function setColor(cssvar,color) {
    document.documentElement.style.setProperty(cssvar, color);
}

//I hate this function. It is far to much work for what it does.
function setColorChooser(id){
    if (localStorage.getItem("foreground") && localStorage.getItem("background") != null){
        if(id == "fgcolor"){
            document.getElementById(id).value = localStorage.getItem("foreground");
        }
        if(id == "bgcolor"){
            document.getElementById(id).value = localStorage.getItem("background");
        }
    }
}


function grabColors() {
    //declare neccacary variables
    let fgcol = document.getElementById('fgcolor').value;
    let bgcol = document.getElementById('bgcolor').value;
    
    //save settings in localStorage and set colors
    if (String(bgcol) != ""){
        localStorage.setItem("background", bgcol)
        setColor('--bg-color',bgcol);
    }
    if (String(fgcol) != ""){
        localStorage.setItem("foreground", fgcol)
        setColor('--fg-color',fgcol);
    }
}

function loadColors(){
    var fg = localStorage.getItem("foreground");
    var bg = localStorage.getItem("background");
    
    setColor('--fg-color',fg);
    setColor('--bg-color',bg);
 }


