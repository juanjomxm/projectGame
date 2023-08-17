function aleatory(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let attackPlayer
let attackPlayerText = document.getElementById('paragraph-attack-player')

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

const imgsAttacks = [
    {name: 'air-control', src: 'https://th.bing.com/th/id/R.cbf38fb715dcc27f760f34ed022cf041?rik=q9Ti412YPC1DyQ&pid=ImgRaw&r=0' },
    {name: 'fair', src: 'https://media.giphy.com/media/a3BSVQ00oj2kU/giphy.gif'},
    {name: 'earth', src: 'https://th.bing.com/th/id/R.ed02aff4edf4370752a35175b338d0fa?rik=9mgSR9EgZh%2bUTg&riu=http%3a%2f%2fpa1.narvii.com%2f7073%2f1c658717ff08548efb5e82f388e85b66ea1bfaacr1-320-240_00.gif&ehk=XsZZsacrDlhGnCMo9l6hNfWTh0R3NhDTZ2AKN%2b4jDRY%3d&risl=&pid=ImgRaw&r=0'},
    {name: 'water', src: 'https://pa1.narvii.com/6786/157f6ae2dff9316deedacc61ff1ef995079aa012_hq.gif'}
]


function attackAir(){
    attackPlayer = 'AIRE'
    imgsAttacks.filter(item => {
        return item.name.includes('air-control')
    })
    .map(item =>{
        return attackPlayerText.src = item.src
    })
    selectAttackPc()
}
function attackFire(){
    attackPlayer = 'FUEGO'
    imgsAttacks.filter(item => {
        return item.name.includes('fair')
    })
    .map(item =>{
        return attackPlayerText.src = item.src
    })
    selectAttackPc()
}
function attackEarth(){
    attackPlayer = 'TIERRA' 
    imgsAttacks.filter(item => {
        return item.name.includes('earth')
    })
    .map(item =>{
        return attackPlayerText.src = item.src
    })
    selectAttackPc()
}
function attackWater(){
    attackPlayer = 'AGUA'
    imgsAttacks.filter(item => {
        return item.name.includes('water')
    })
    .map(item =>{
        return attackPlayerText.src = item.src
    })
    selectAttackPc()
}

function selectAttackPc(){
    const attackAleatory = aleatory(1,4)

    if(attackAleatory === 1){
        attackPc = 'AIRE'
        imgsAttacks.filter(item => {
            return item.name.includes('air-control')
        })
        .map(item =>{
            return attackPcText.src = `${item.src}`
        })
    } else if(attackAleatory === 2){
        attackPc = 'FUEGO'
        imgsAttacks.filter(item => {
            return item.name.includes('fair')
        })
        .map(item =>{
            return attackPcText.src = item.src
        })
    } else if(attackAleatory === 3){
        attackPc = 'TIERRA'
        imgsAttacks.filter(item => {
            return item.name.includes('earth')
        })
        .map(item =>{
            return attackPcText.src = item.src
        })
    } else if(attackAleatory === 4){
        attackPc = 'AGUA'
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

    if(attackPlayer == attackPc){
        pResultFinal.innerHTML = 'EMPATE'
    } else if(attackPlayer == 'AIRE' && attackPc == 'FUEGO' ){
        pResultFinal.innerHTML = 'GANASTE'
    } else if(attackPlayer == 'FUEGO' && attackPc == 'TIERRA'){
        pResultFinal.innerHTML = 'GANASTE'
    } else if(attackPlayer == 'TIERRA' && attackPc == 'AGUA'){
        pResultFinal.innerHTML = 'GANASTE'
    } else if(attackPlayer == 'AGUA' && attackPc == 'FUEGO'){
        pResultFinal.innerHTML = 'GANASTE'
    } else{
        pResultFinal.innerHTML = 'PERDISTE'
    }
}

