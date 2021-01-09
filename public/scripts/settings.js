function setColor(cssvar,color) {
    document.documentElement.style.setProperty(cssvar, '#' + String(color));
}

function grabColors() {
    //declare neccacary variables
    let fgcol = document.getElementById('fgcolor').value;
    let bgcol = document.getElementById('bgcolor').value;
    let secol = document.getElementById('secolor').value;
    let tertcol = document.getElementById('tertcolor').value;
    
    //save settings in localStorage and set colors
    if (String(bgcol) != ""){
        localStorage.setItem("background", String(bgcol))
        setColor('--bg-color',bgcol);
    }
    if (String(fgcol) != ""){
        localStorage.setItem("foreground", String(fgcol))
        setColor('--fg-color',fgcol);
    }
    if (String(secol) != ""){
        localStorage.setItem("secondary", String(secol))
        setColor('--secondary-fg',secol);
    }
    if (String(tertcol) != "") {
        localStorage.setItem("tertiary", String(tertcol))
        setColor('--tertiary-fg',tertcol);
    }
}

function loadColors(){
    var fg = localStorage.getItem("foreground");
    var bg = localStorage.getItem("background");
    var se = localStorage.getItem("secondary");
    var te = localStorage.getItem("tertiary");
    
    setColor('--fg-color',fg);
    setColor('--bg-color',bg);
    setColor('--secondary-fg',se);
    setColor('--tertiary-fg',te);
}


