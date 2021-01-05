function setColors(bg, fg) {
    //change bg color
    let divElements = document.getElementsByTagName('div');
    document.body.style.background = "#" + String(bg);
    //change fg color
    for (var i=0; i<divElements.length; i++){
        divElements[i].style.color = "#" + String(fg);
    }
}

function grabColors() {
    //declare neccacary variables
    let fgcol = document.getElementById('fgcolor').value;
    let bgcol = document.getElementById('bgcolor').value;

    //set colors with setColors function
    setColors(bgcol, fgcol);

    //save settings in cookies
    document.cookie = ("background=" + String(bgcol))
    document.cookie = ("foreground=" + String(fgcol))
    
}

/*please note that the next function was copied from the
  internet and that I don't entirly understand it yet */
/* also WARNING do not use the following function on a cookie with only one term. It may cause it to slow the web page */

function getCookies(cname) {
    if (document.cookie.match(';')){
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split('; ');
      console.log(ca);
      for(var i=0; i<ca.length; i++){
          var c = ca[i];
          while (c.charAt(0)==''){
              c=c.substring(1);
          }
          if (c.indexOf(name)==0){
              return c.substring(name.length,c.length);
          }
      }
        return "";
    }
}


function loadCookie(){
    
    var fg = getCookies("foreground");
    var bg = getCookies("background");
    if((bg || fg) != ""){
        setColors(bg,fg);
    }
    
}


