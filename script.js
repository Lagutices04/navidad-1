function play(){
    botonPlay.classList.add("on");
  
}
function pause(){
    botonPause.classList.add("on");
    clearInterval(fechaLimite);
}




const botonPlay =  document.querySelector(".play");
const botonPause =  document.querySelector(".pause");

botonPlay.addEventListener("click",play);
botonPause.addEventListener("click",pause);



function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltante = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltante = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltante = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltante = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);
    return {
      segundosFaltante,
      minutosFaltante,
      horasFaltante,
      diasFaltante,
      tiempoFaltante,
    };
  }
  
  function cuentaRegresiva(tiempoFaltante, reloj, mensaje) {
    const e = document.getElementById(reloj);
    const tiempoActual = setInterval(() => {
      let t = obtenerTiempoFaltante(tiempoFaltante);
        e.innerHTML = `${t.diasFaltante} ${t.horasFaltante} ${t.minutosFaltante} ${t.segundosFaltante}`;
      if (t.tiempoFaltante < 0) {
        clearInterval(tiempoActual);
        e.innerHTML = mensaje;
      }
    }, 1000);
  }
  
 
    // Tu código aquí, incluyendo la función cuentaRegresiva
    cuentaRegresiva('DEC 25 2023 00:00:00 GMT-0500', 'reloj', '¡Feliz Navidad, papalindo!');
 
  


