function atualizarRelogio(){
    const agora = new Date();
let horas = agora.getHours()
let minutos = agora.getMinutes()
let segundos = agora.getSeconds()

horas = horas < 10 ? "0" + horas : horas;
minutos = minutos < 10 ? "0" + minutos : minutos;
segundos = segundos< 10 ? "0" + segundos : segundos;

document.getElementById("Relogio").textContent = 
    `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
