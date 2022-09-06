const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

function relogio(){
    var data = new Date();
    console.log(Date())

    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();
    console.log('hora' + hr + 'minuto' + min + 'segundo' + seg);

    let posicaoHR = (hr*360/12) + ((min*360/60)/12);
    let posicaoMIN = (min*360/60) + ((seg*360/60)/60);
    let posicaoSEG = seg*360/60;

    PONTEIROHORA.style.transform = "rotate(" + posicaoHR + "deg)";
    PONTEIROMINUTO.style.transform = "rotate(" + posicaoMIN +"deg)";
    PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSEG + "deg)";
}

var intervalo = setInterval(relogio, 1000);