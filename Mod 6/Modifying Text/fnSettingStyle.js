//Filename: fnSettingStyle.js
//Function to increase the size of text in the body

function enlargeText(paranum) {
    document.getElementById(paranum).style.fontSize="5em";

}

function decreaseText(paranum) {
   document.getElementById(paranum).style.fontSize="1em"; 
}

function enlargeAll() {
    document.getElementById('p1').style.fontSize="5em";
    document.getElementById('p2').style.fontSize="5em";
    document.getElementById('p3').style.fontSize="5em";
    document.getElementById('p4').style.fontSize="5em";
    document.getElementById('p5').style.fontSize="5em";
    document.getElementById('p6').style.fontSize="5em";
}

function decreaseAll() {
    document.getElementById('p1').style.fontSize="1em";
    document.getElementById('p2').style.fontSize="1em";
    document.getElementById('p3').style.fontSize="1em";
    document.getElementById('p4').style.fontSize="1em";
    document.getElementById('p5').style.fontSize="1em";
    document.getElementById('p6').style.fontSize="1em"; 
}