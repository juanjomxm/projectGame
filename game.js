function aleatory(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectPlayer(){
    const inputAng = document.getElementById('player-one')
    const inputKatara = document.getElementById('player-two')
    const inputToph = document.getElementById('player-three')
    const pSelectPlayer = document.getElementById('paragraph-select-player')
    const pSelectPlayerPc = document.getElementById('paragraph-select-player-pc')

    if(inputAng.checked){
        pSelectPlayer.innerText = 'Escogiste a AANG'
    } else if(inputKatara.checked){
        pSelectPlayer.innerText = 'Escogiste a KATARA'
    } else if(inputToph.checked){
        pSelectPlayer.innerText = 'Escogiste a TOPH'
    } else{
        pSelectPlayer.innerText = 'Debes escoger un jugador'
    }
    selectPlayerPc()
}

function selectPlayerPc(){
    const pSelectPlayerPc = document.getElementById('paragraph-select-player-pc')
    const selectPcPlayer = aleatory(1,3)

    if(selectPcPlayer === 1){
        pSelectPlayerPc.innerText = 'La maquina eligio a AANG'
    } else if(selectPcPlayer === 2){
        pSelectPlayerPc.innerText = 'La maquina eligio a KATARA'
    }else if(selectPcPlayer === 3){
        pSelectPlayerPc.innerText = 'La maquina eligio a TOPH'
    }

}