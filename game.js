function aleatory(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let attackPlayer
let attackPlayerText = document.getElementById('paragraph-attack-player')
let lifesPlayer = 4

let attackPc 
const attackPcText = document.getElementById('paragraph-attack-pc')
let lifesPc = 4


function selectPlayer(){
    const inputAng = document.getElementById('player-one')
    const inputKatara = document.getElementById('player-two')
    const inputToph = document.getElementById('player-three')
    const inputZuko = document.getElementById('player-four')
    const pSelectPlayer = document.getElementById('paragraph-select-player')

    if(inputAng.checked){
        pSelectPlayer.innerText = 'ESCOGISTE A AANG'
    } else if(inputKatara.checked){
        pSelectPlayer.innerText = 'ESCOGISTE A KATARA'
    } else if(inputToph.checked){
        pSelectPlayer.innerText = 'ESCOGISTE A TOPH'
    } else if(inputZuko.checked){
        pSelectPlayer.innerText = 'ESCOGISTE A ZUKO'
    } else{
        pSelectPlayer.innerText = 'DEBES ESCOGER UN JUGADOR'
    }
    selectPlayerPc()
}

function selectPlayerPc(){
    const pSelectPlayerPc = document.getElementById('paragraph-select-pc')
    const selectPcPlayer = aleatory(1,3)

    if(selectPcPlayer === 1){
        pSelectPlayerPc.innerText = 'LA MAQUINA ESCOGIO A AANG'
    } else if(selectPcPlayer === 2){
        pSelectPlayerPc.innerText = 'LA MAQUINA ESCOGIO A KATARA'
    }else if(selectPcPlayer === 3){
        pSelectPlayerPc.innerText = 'LA MAQUINA ESCOGIO A TOPH'
    }
}

const imgsAttacks = [
    {name: 'air-control', src: 'https://th.bing.com/th/id/R.cbf38fb715dcc27f760f34ed022cf041?rik=q9Ti412YPC1DyQ&pid=ImgRaw&r=0', src2: 'https://media0.giphy.com/media/GSa3okd5ltyLe/giphy.gif?cid=ecf05e47ifc05hfcyanojgw9ycq9mhkjerl89bffhliurn1a&ep=v1_gifs_search&rid=giphy.gif&ct=g', src3:'https://media0.giphy.com/media/Kct9Or59JmTr1AhCVR/giphy.gif?cid=ecf05e47hvb81pv0kwzefyqmg7cc1tzubir79oskksy58i2q&ep=v1_gifs_search&rid=giphy.gif&ct=g' },

    {name: 'fair', src: 'https://media.giphy.com/media/a3BSVQ00oj2kU/giphy.gif'},
    {name: 'earth', src: 'https://th.bing.com/th/id/R.ed02aff4edf4370752a35175b338d0fa?rik=9mgSR9EgZh%2bUTg&riu=http%3a%2f%2fpa1.narvii.com%2f7073%2f1c658717ff08548efb5e82f388e85b66ea1bfaacr1-320-240_00.gif&ehk=XsZZsacrDlhGnCMo9l6hNfWTh0R3NhDTZ2AKN%2b4jDRY%3d&risl=&pid=ImgRaw&r=0'},
    {name: 'water', src: 'https://pa1.narvii.com/6786/157f6ae2dff9316deedacc61ff1ef995079aa012_hq.gif'}
] // Crear diferentes ataques de los personajes al oprimir diferentes botones

let textVs = document.getElementById('versus')

function attackAir(){
    attackPlayer = 'AIRE'
    attackPlayerText.width = 600
    attackPlayerText.height = 400
    imgsAttacks.filter(item => {
        return item.name.includes('air-control')
    })
    .map(item =>{
        return attackPlayerText.src = item.src
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}
function attackAir2(){
    attackPlayer = 'AIRE'
    attackPlayerText.width = 600
    attackPlayerText.height = 400
    imgsAttacks.filter(item => {
        return item.name.includes('air-control')
    })
    .map(item =>{
        return attackPlayerText.src = item.src2
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}
function attackAir3(){
    attackPlayer = 'AIRE'
    attackPlayerText.width = 600
    attackPlayerText.height = 400
    imgsAttacks.filter(item => {
        return item.name.includes('air-control')
    })
    .map(item =>{
        return attackPlayerText.src = item.src3
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}

function attackFire(){
    attackPlayer = 'FUEGO'
    attackPlayerText.width = 600
    attackPlayerText.height = 400
    imgsAttacks.filter(item => {
        return item.name.includes('fair')
    })
    .map(item =>{
        return attackPlayerText.src = item.src
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}
function attackEarth(){
    attackPlayer = 'TIERRA'
    attackPlayerText.width = 600
    attackPlayerText.height = 400 
    imgsAttacks.filter(item => {
        return item.name.includes('earth')
    })
    .map(item =>{
        return attackPlayerText.src = item.src
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}
function attackWater(){
    attackPlayer = 'AGUA'
    attackPlayerText.width = 600
    attackPlayerText.height = 400
    imgsAttacks.filter(item => {
        return item.name.includes('water')
    })
    .map(item =>{
        return attackPlayerText.src = item.src
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}

function selectAttackPc(){
    const attackAleatory = aleatory(1,4)

        if(attackAleatory === 1){
            attackPc = 'AIRE'
            attackPcText.width = 600
            attackPcText.height = 400
            imgsAttacks.filter(item => {
                return item.name.includes('air-control')
            })
            .map(item =>{
                return attackPcText.src = `${item.src}`
            })
        } else if(attackAleatory === 2){
            attackPc = 'FUEGO'
            attackPcText.width = 600
            attackPcText.height = 400
            imgsAttacks.filter(item => {
                return item.name.includes('fair')
            })
            .map(item =>{
                return attackPcText.src = item.src
            })
        } else if(attackAleatory === 3){
            attackPc = 'TIERRA'
            attackPcText.width = 600
            attackPcText.height = 400
            imgsAttacks.filter(item => {
                return item.name.includes('earth')
            })
            .map(item =>{
                return attackPcText.src = item.src
            })
        } else if(attackAleatory === 4){
            attackPc = 'AGUA'
            attackPcText.width = 600
            attackPcText.height = 400
            imgsAttacks.filter(item => {
                return item.name.includes('water')
            })
            .map(item =>{
                return attackPcText.src = item.src
            })
        }
    combatFinal()
}

function combatFinal(){
    const pResultFinal = document.getElementById('messages-combat-result')
    const lifesPlayerText = document.getElementById('lifes-player')
    const lifesPcText = document.getElementById('lifes-pc')

    if(attackPlayer == attackPc){
        pResultFinal.innerHTML = 'EMPATE'
    } else if(attackPlayer == 'AGUA' && attackPc == 'FUEGO' ){
        pResultFinal.innerHTML = 'GANASTE'
        lifesPc--
        lifesPcText.innerText = `TU OPONENTE TIENE ${lifesPc} VIDAS`
    } else if(attackPlayer == 'FUEGO' && attackPc == 'TIERRA'){
        pResultFinal.innerHTML = 'GANASTE'
        lifesPc--
        lifesPcText.innerText = `TU OPONENTE TIENE ${lifesPc} VIDAS`
    } else if(attackPlayer == 'TIERRA' && attackPc == 'AIRE'){
        pResultFinal.innerHTML = 'GANASTE'
        lifesPc--
        lifesPcText.innerText = `TU OPONENTE TIENE ${lifesPc} VIDAS`
    } else if(attackPlayer == 'AIRE' && attackPc == 'FUEGO'){
        pResultFinal.innerHTML = 'GANASTE'
        lifesPc--
        lifesPcText.innerText = `TU OPONENTE TIENE ${lifesPc} VIDAS`
    } else{
        pResultFinal.innerHTML = 'PERDISTE'
        lifesPlayer--
        lifesPlayerText.innerText = `TE QUEDAN ${lifesPlayer} VIDAS`
    }
    countLifes()
}

function countLifes(){
    const messageResultFinal = document.getElementById('message-result-final')

    if(lifesPlayer == 0){
        messageResultFinal.innerText = 'DEBERIA DARTE VEGUENZA'
    } else if(lifesPc == 0){
        messageResultFinal.innerText = 'GANASTE, CELEBRALO'
    }else{
        messageResultFinal.innerText = 'SIGUE EL COMBATE'
    }
}

