/*ra=document.getElementById("razmer");

let num = Number(ra); // становится числом 123*/

function Razmermaca(event){
    var size=document.getElementById('razmer').value;
    r=size;

}
function Skorostmaca(event){
    var speed=document.getElementById("skorost").value;
    setInterval('liigu()', speed);
}
function Uskoreniemaca(event){
    var skorost=document.getElementById("uskorenie").value;
    ykiirendus=skorost;
}

var x=40, y=20, r=30;
var ysamm=-1, ykiirendus=0.6;
var x1=20, y1=20, r1=5;
var ysamm1=-1, ykiirendus1=0.6;
var x2=60, y2=20, r2=5;
var ysamm2=-1, ykiirendus2=0.6;

var t, g, u, e; //tahvel, graafiline kontekst
// liigutab palli liigu() funktsiooniga
// 100 - tähendab 10 korda sekundis

function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    u = g;
    e = g;
    setInterval('liigu()', 15);
}
// joonistab pall
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="red";
    g.fillStyle="red";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke(); // joon
    g.fill(); // taust

    u.strokeStyle = "black";
    u.fillStyle="white";
    u.beginPath();
    u.arc(x1, y1, r1,0, 2*Math.PI, true);
    u.fill();
    u.stroke();

    e.strokeStyle = "black";
    e.fillStyle="white";
    e.beginPath();
    e.arc(x2, y2, r2,0, 2*Math.PI, true);
    e.fill();
    e.stroke();
}
// kuukumine alla y
function liigu(){
    ysamm=ysamm+ykiirendus;
    y=y+ysamm;
    ysamm1=ysamm1+ykiirendus1;
    y1=y1+ysamm1;
    ysamm2=ysamm2+ykiirendus2;
    y2=y2+ysamm2;
    joonista();
}

function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    var hx1=e.clientX-tahvlikoht.left;
    var hy1=e.clientY-tahvlikoht.top;
    var hx2=e.clientX-tahvlikoht.left;
    var hy2=e.clientY-tahvlikoht.top;
    x=hx;
    y=hy;
    x11=hx1;
    x1=x11-20;
    y1=hy1;
    x22=hx2;
    x2=x22+20;
    y2=hy2;
    ysamm=0;
    ysamm1=0;
    ysamm2=0;
    if (ysamm === 0){
        r=r-1;

    }

}
