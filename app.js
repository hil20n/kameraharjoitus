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
    //get UserMedia hakee media laitteita joita laitteeessa on, tässä kamera ja siitä video
        //kuvavirta = stream
        //srcObject= sourceObject
        //jos onnistuu ottaa kuvavirtaa videota ja tallennetaan kameran kuva html video elelmenttiin
        // eli kamerakuva johon tulee kuvavirta jos ei onnistu tulostetaan virheilmoitus
    
    //laukaisin.onclick = cameraStarttaa;
    laukaisin.onclick = function(){
        kameracanvas.width = kamerakuva.videoWidth; //kuvan leveys ja pituus samat kuin videolla
        kameracanvas.height = kamerakuva.videoHeight;

        kameracanvas.getContext("2d").drawImage(kamerakuva, 0,0); //painalluksen kohdalla oleva kuva kuvavirrassa piirtyy canvakselle
        kuvasijainti.src = kameracanvas.toDataURL("image/png"); //tallentaa kuvan tietokoneelle
        kuvasijainti.id = "kuvaMuutos";  //tehdään yksittäisestä kuvasta pienempi, iso canvas piilotettu, muuten tulisi kaksi kuvaa
        console.log("täällä ollaan");
        /*kuvasijainti.style.width = "100px";
        kuvasijainti.style.height = "100px"; */
    }

    /*function nappulanPainallus(){
        kameracanvas.getContext("2d").drawImage(kamerakuva, 0,0);
    }*/