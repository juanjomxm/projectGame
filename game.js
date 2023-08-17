function aleatory(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let attackPlayer
const attackPlayerText = document.getElementById('paragraph-attack-player')

let attackPc 
const attackPcText = document.getElementById('paragraph-attack-pc')

function selectPlayer(){
    const inputAng = document.getElementById('player-one')
    const inputKatara = document.getElementById('player-two')
    const inputToph = document.getElementById('player-three')
    const inputZuko = document.getElementById('player-four')
    const pSelectPlayer = document.getElementById('paragraph-select-player')

    if(inputAng.checked){
        pSelectPlayer.innerText = 'Escogiste a AANG'
    } else if(inputKatara.checked){
        pSelectPlayer.innerText = 'Escogiste a KATARA'
    } else if(inputToph.checked){
        pSelectPlayer.innerText = 'Escogiste a TOPH'
    } else if(inputZuko.checked){
        pSelectPlayer.innerText = 'Escogiste a ZUKO'
    } else{
        pSelectPlayer.innerText = 'Debes escoger un jugador'
    }
    selectPlayerPc()
}

function selectPlayerPc(){
    const pSelectPlayerPc = document.getElementById('paragraph-select-pc')
    const selectPcPlayer = aleatory(1,3)

    if(selectPcPlayer === 1){
        pSelectPlayerPc.innerText = 'La maquina eligio a AANG'
    } else if(selectPcPlayer === 2){
        pSelectPlayerPc.innerText = 'La maquina eligio a KATARA'
    }else if(selectPcPlayer === 3){
        pSelectPlayerPc.innerText = 'La maquina eligio a TOPH'
    }
}

function attackAir(){
    attackPlayer = 'AIRE' //.innerText = 'Atacaste con Aire control'
    attackPlayerText.innerText = 'Atacaste con Aire control'
    selectAttackPc()
}
function attackFire(){
    attackPlayer = 'FUEGO' //.innerText = 'Atacaste con Fuego control'
    attackPlayerText.innerText = 'Atacaste con Fuego control'
    selectAttackPc()
}
function attackEarth(){
    attackPlayer = 'TIERRA' //.innerText = 'Atacaste con Tierra control'
    attackPlayerText.innerText = 'Atacaste con Tierra control'
    selectAttackPc()
}
function attackWater(){
    attackPlayer = 'AGUA' //.innerText = 'Atacaste con Agua control'
    attackPlayerText.innerText = 'Atacaste con Agua control'
    selectAttackPc()
}

function selectAttackPc(){
    const attackAleatory = aleatory(1,4)

    if(attackAleatory === 1){
        attackPc = 'AIRE'
        attackPcText.innerText = 'Tu oponente ataco con Aire control'
    } else if(attackAleatory === 2){
        attackPc = 'FUEGO'
        attackPcText.innerText = 'Tu oponente ataco con Fuego control'
    } else if(attackAleatory === 3){
        attackPc = 'TIERRA'
        attackPcText.innerText = 'Tu oponente ataco con Tierra control'
    } else if(attackAleatory === 4){
        attackPc = 'AGUA'
        attackPcText.innerText = 'Tu oponente ataco con Agua control'
    }
    combatFinal()
}

function combatFinal(){
    const pResultFinal = document.getElementById('messages-combat-result')

    if(attackPlayer == attackPc){
        pResultFinal.innerHTML = 'EMPATE'
    } else if(attackPlayer == 'AIRE' && attackPc == 'FUEGO' ){
        pResultFinal.innerHTML = 'GANASTE'
    } else if(attackPlayer == 'FUEGO' && attackPc == 'TIERRA'){
        pResultFinal.innerHTML = 'GANASTE'
    } else if(attackPlayer == 'TIERRA' && attackPc == 'AGUA'){
        pResultFinal.innerHTML = 'GANASTE'
    } else{
        pResultFinal.innerHTML = 'PERDISTE'
    }
}

