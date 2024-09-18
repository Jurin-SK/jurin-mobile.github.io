const gene = document.getElementById('gener');
const bas = document.getElementById("base");
const displa = document.getElementById("display");
const homebutton = document.getElementById("hom");
const camer = document.getElementById("camera");
const sidevolume = document.getElementById("side-vol");
const upoff = document.getElementById("top-of");
const sideoff = document.getElementById("side-of");
const roundtbase = document.getElementById("rovba");
const colorbase = document.getElementById("colba");
const rounddisplay = document.getElementById("roudis");
const heightdisplay = document.getElementById("heigdis");
const positiondisplay = document.getElementById("posdis");
const roundhome = document.getElementById("rouhb");
const colorhome = document.getElementById("colhb");
const colordhome = document.getElementById("col2hb");
const positionhome = document.getElementById("poshb");
const checkhome = document.getElementById("chckhb");
const positioncamera = document.getElementById("poscam");
const positiondcamera = document.getElementById("poscam2");
const buttonsposvol = document.getElementById("posvol");
const buttonsposofup = document.getElementById("posofup");
const buttonsposofsid = document.getElementById("posofsid");
const lorvol = document.getElementById("side");
const topr = document.getElementById("tp");
const leftr = document.getElementById("lf");
const rightr = document.getElementById("rg");
const ipod = document.getElementById("ipdwhl");
const keypad = document.getElementById("bttnk");
const nothing = document.getElementById("nothb");
const ipodd = document.getElementById("ipod-whel");
const keypadd = document.getElementById("keypad");
gene.addEventListener('click', generate);
function generate() {
    bas.style.borderRadius = roundtbase.value + "px";
    bas.style.backgroundColor = colorbase.value;
    displa.style.borderRadius = rounddisplay.value + "px";
    displa.style.height = heightdisplay.value + "px";
    displa.style.top = positiondisplay.value + "px";
    homebutton.style.borderRadius = roundhome.value + "px";
    homebutton.style.backgroundColor = colorhome.value;
    homebutton.style.borderColor = colordhome.value;
    homebutton.style.top = positionhome.value + "px";
    if (checkhome.checked == true) {homebutton.style.visibility = "hidden";}
    else {homebutton.style.visibility = "visible";}
    camer.style.top = positioncamera.value + "px";
    camer.style.left = positiondcamera.value + "px";
    sidevolume.style.top = buttonsposvol.value + "px";
    upoff.style.left = buttonsposofup.value + "px";
    sideoff.style.top = buttonsposofsid.value + "px";
    if (lorvol.checked == true) {sidevolume.style.left = "13px"}
    else {sidevolume.style.left = "298px"}
    if (topr.checked == true) {
        sideoff.style.visibility = "hidden";
        upoff.style.visibility = "visible";
    }
    else if (leftr.checked == true) {
        sideoff.style.visibility = "visible";
        upoff.style.visibility = "hidden";
        sideoff.style.left = "13px"
    }
    else {
        sideoff.style.visibility = "visible";
        upoff.style.visibility = "hidden";
        sideoff.style.left = "298px";
    }
    radios();
    function radios() 
    {

        if (ipod.checked == true) {
            ipodd.style.visibility = "visible";
            keypadd.style.visibility = "hidden";
        }
        else if (keypad.checked = true) {
            ipodd.style.visibility = "hidden";
            keypadd.style.visibility = "visible";
        }
    }
    if (nothing.checked) {
        ipodd.style.visibility = "hidden";
        keypadd.style.visibility = "hidden";
    }
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.accentColor = colorbase.value;

    }
    var inputss = document.getElementsByTagName('input[type="radio"]');

    for (var i = 0; i < inputss.length; i++) {
        inputss[i].style.backgroundColor = colorbase.value;
        inputss[i].style.borderColor = colorbase.value;

    }
}


