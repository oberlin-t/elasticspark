function setColor(cssvar,color) {
    document.documentElement.style.setProperty(cssvar, String(color));
}

function grabColors() {
    //declare neccacary variables
    let fgcol = document.getElementById('fgcolor').value;
    let bgcol = document.getElementById('bgcolor').value;
    
    //save settings in localStorage and set colors
    if (String(bgcol) != ""){
        localStorage.setItem("background", String(bgcol))
        setColor('--bg-color',bgcol);
    }
    if (String(fgcol) != ""){
        localStorage.setItem("foreground", String(fgcol))
        setColor('--fg-color',fgcol);
    }
}

function loadColors(){
    var fg = localStorage.getItem("foreground");
    var bg = localStorage.getItem("background");
    var se = localStorage.getItem("secondary");
    var te = localStorage.getItem("tertiary");
    
    setColor('--fg-color',fg);
    setColor('--bg-color',bg);
 }


