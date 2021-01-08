function setColor(cssvar,color) {
    document.documentElement.style.setProperty(cssvar, '#' + String(color));
}

function grabColors() {
    //declare neccacary variables
    let fgcol = document.getElementById('fgcolor').value;
    let bgcol = document.getElementById('bgcolor').value;
    let secol = document.getElementById('secolor').value;
    let tertcol = document.getElementById('tertcolor').value;
    
    //set colors
    setColor('--bg-color',bgcol);
    setColor('--fg-color',fgcol);
    setColor('--secondary-fg',secol);
    setColor('--tertiary-fg',tertcol);
    //save settings in localStorage
    if (String(bgcol) != ""){
        localStorage.setItem("background", String(bgcol))
    }
    if (String(fgcol) != ""){
        localStorage.setItem("foreground", String(fgcol))
    }
    if (String(secol) != ""){
        localStorage.setItem("secondary", String(secol))
    }
    if (String(tertcol) != "") {
        localStorage.setItem("tertiary", String(tertcol))
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


