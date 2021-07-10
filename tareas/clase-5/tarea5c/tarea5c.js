const $calcularTiempoVideos = document.querySelector('#boton-calcular-total');

$calcularTiempoVideos.onclick = function(){
    const $horasDeVideo = document.querySelectorAll('.horas-de-clase')
    const $minutosDeVideo = document.querySelectorAll('.minutos-de-clase')
    const $segundosDeVideo = document.querySelectorAll('.segundos-de-clase')
    const $mostrarTiempoTotal = document.querySelector('#tiempo-total')
    let horasTotal = 0
    let minutosTotal = 0
    let segundosTotal = 0
    
    for(let i = 0; i < $horasDeVideo.length; i++){
        horasTotal += Number($horasDeVideo[i].value)
        minutosTotal += Number($minutosDeVideo[i].value)
        segundosTotal += Number($segundosDeVideo[i].value)
    }
    while(segundosTotal > 60){
        segundosTotal -= 60
        minutosTotal++
    }
    while(minutosTotal > 60){
        minutosTotal -= 60
        horasTotal++
    }

    $mostrarTiempoTotal.innerText = `${horasTotal} Horas, ${minutosTotal} Minutos, ${segundosTotal} Segundos`
}
