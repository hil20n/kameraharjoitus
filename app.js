var alkuarvot = {video: {facingMode: "user"}, audio: false};
var track = null;

var kamerakuva = document.getElementById("kamerakuva");
var kuvasijainti = document.getElementById("kuvasijainti");
var kameracanvas = document.getElementById("kameracanvas");
var laukaisin = document.getElementById("laukaisin");

function cameraStarttaa(){
    navigator.mediaDevices.getUserMedia(alkuarvot).then(function(kuvavirta){
        kamerakuva.srcObject = kuvavirta;
    })  
    .catch(function(error){console.log("hupsista")})
}

window.addEventListener("load", cameraStarttaa);
    // hakee media laitteita joita laitteeessa on, tässä kamera ja siitä video
        //kuvavirta = stream
        //srcObject= sourceObject
        //jos onnistuu ottaa kuvavirtaa videota ja tallennetaan kameran kuva html video elelmenttiin
        // eli kamerakuva johon tulee kuvavirta jos ei onnistu tulostetaan virheilmoitus
    