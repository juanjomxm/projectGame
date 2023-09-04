function aleatory(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let attackPlayer
let attackPlayerText = document.getElementById('img-attack-player')
let lifesPlayer = 4

let attackPc 
const attackPcText = document.getElementById('img-attack-pc')
let lifesPc = 4

const pResultFinal = document.getElementById('messages-combat-result')
//let sectionSelectAtack = document.getElementById('combat')

function initGame(){
    let sectionSelectAtack = document.querySelector('#combat')
    sectionSelectAtack.style.display = 'none'

    let sectionReloaded = document.getElementById('button-reloaded')
    sectionReloaded.style.display = 'none'

    let sectionImages = document.getElementById('images')
    sectionImages.style.display = 'none'

}

const imgSelectPlayer = [
    {name: 'AANG', src: 'https://th.bing.com/th/id/R.27f08d59924bf6c3ea96b4588f88b501?rik=xGqSki4BXxDEUA&riu=http%3a%2f%2fwww.absoluteanime.com%2favatar_the_last_airbender%2faang%5b2%5d.jpg&ehk=wxPH2H8TgNuwzWsYOVAHxgnuNzPVtWni4lWKMCxkYHk%3d&risl=&pid=ImgRaw&r=0'},
    {name: 'KATARA', src: 'https://th.bing.com/th/id/OIP.kicYAu2gbuXN7R6HkS1yHAHaGq?pid=ImgDet&rs=1'},
    {name: 'TOPH', src: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/01/Toph-Avatar-Featured.jpg'},
    {name: 'ZUKO', src: 'https://i.pinimg.com/736x/ab/45/53/ab4553ea89f942cd93d402212d6502da--zuko-avatar.jpg'}
]


function selectPlayer(){
    const sectionSelectPlayer = document.getElementById('select-player-and-pc')
    sectionSelectPlayer.style.display = 'none'

    let sectionSelectAtack = document.querySelector('#combat')
    sectionSelectAtack.style.display = 'block'

    const inputAng = document.getElementById('player-one')
    const inputKatara = document.getElementById('player-two')
    const inputToph = document.getElementById('player-three')
    const inputZuko = document.getElementById('player-four')
    const pSelectPlayer = document.getElementById('img-select-player')
    const paragraphSelectPlayer = document.getElementById('paragraph-select-player')

    if(inputAng.checked){
        imgSelectPlayer.filter(item =>{
            return item.name.includes('AANG')
        })
        .map(item=>{
            paragraphSelectPlayer.innerText = 'JUGADOR'
            pSelectPlayer.src = item.src
        })
    } else if(inputKatara.checked){
        imgSelectPlayer.filter(item =>{
            return item.name.includes('KATARA')
        })
        .map(item=>{
            paragraphSelectPlayer.innerText = 'JUGADOR'
            pSelectPlayer.src = item.src
        })   
    } else if(inputToph.checked){
        imgSelectPlayer.filter(item =>{
            return item.name.includes('TOPH')
        })
        .map(item=>{
            paragraphSelectPlayer.innerText = 'JUGADOR'
            pSelectPlayer.src = item.src
        })
    } else if(inputZuko.checked){
        imgSelectPlayer.filter(item =>{
            return item.name.includes('ZUKO')
        })
        .map(item=>{
            paragraphSelectPlayer.innerText = 'JUGADOR'
            pSelectPlayer.src = item.src
        })
    } else{
        paragraphSelectPlayer.innerText = 'JUGADOR'
        const sectionSelectPlayer = document.getElementById('select-player-and-pc')
        sectionSelectPlayer.style.display = 'block'
        let sectionSelectAtack = document.querySelector('#combat')
        sectionSelectAtack.style.display = 'none'
    }
    selectPlayerPc()
}

function selectPlayerPc(){
    const pSelectPlayerPc = document.getElementById('img-select-pc')
    const paragraphSelectPc = document.getElementById('paragraph-select-pc')
    const selectPcPlayer = aleatory(1,4)

    if(selectPcPlayer === 1){
        imgSelectPlayer.filter(item =>{
            return item.name.includes('AANG')
        })
        .map(item=>{
            paragraphSelectPc.innerText = 'OPONENTE'
            pSelectPlayerPc.src = item.src
        })
    } else if(selectPcPlayer === 2){
        imgSelectPlayer.filter(item =>{
            return item.name.includes('KATARA')
        })
        .map(item=>{
            paragraphSelectPc.innerText = 'OPONENTE'
            pSelectPlayerPc.src = item.src
        })
    }else if(selectPcPlayer === 3){
        imgSelectPlayer.filter(item =>{
            return item.name.includes('TOPH')
        })
        .map(item=>{
            paragraphSelectPc.innerText = 'OPONENTE'
            pSelectPlayerPc.src = item.src
        })
    } else if(selectPcPlayer === 4){
        imgSelectPlayer.filter(item =>{
            return item.name.includes('ZUKO')
        })
        .map(item=>{
            paragraphSelectPc.innerText = 'OPONENTE'
            pSelectPlayerPc.src = item.src
        })
    }
}

const imgsAttacks = [
    {name: 'air', src: 'https://th.bing.com/th/id/R.cbf38fb715dcc27f760f34ed022cf041?rik=q9Ti412YPC1DyQ&pid=ImgRaw&r=0', src2: 'https://78.media.tumblr.com/tumblr_m8z4fpDTFS1rnryvao1_500.gif', src3:'https://media0.giphy.com/media/Kct9Or59JmTr1AhCVR/giphy.gif?cid=ecf05e47hvb81pv0kwzefyqmg7cc1tzubir79oskksy58i2q&ep=v1_gifs_search&rid=giphy.gif&ct=g' },

    {name: 'fire', src: 'https://media.giphy.com/media/a3BSVQ00oj2kU/giphy.gif', srcfire2: 'https://pa1.narvii.com/6958/bae37aaff7c56f557c68022516722229c7b17338r1-370-188_hq.gif', srcfire3: 'https://th.bing.com/th/id/R.9cf038f4a77c1cfbde5950d45cf3f229?rik=Y%2buTFDz4uw00AA&riu=http%3a%2f%2fpa1.narvii.com%2f7071%2f7bd6edae020f987090e717f727210701d791a20ar1-245-245_00.gif&ehk=ZUx8oFq9a%2bxwKhb%2fYnjuaW8dLLcwHPPa17rnH4ulkcI%3d&risl=&pid=ImgRaw&r=0'},

    {name: 'earth', src: 'https://th.bing.com/th/id/R.ed02aff4edf4370752a35175b338d0fa?rik=9mgSR9EgZh%2bUTg&riu=http%3a%2f%2fpa1.narvii.com%2f7073%2f1c658717ff08548efb5e82f388e85b66ea1bfaacr1-320-240_00.gif&ehk=XsZZsacrDlhGnCMo9l6hNfWTh0R3NhDTZ2AKN%2b4jDRY%3d&risl=&pid=ImgRaw&r=0', srceaarth2: 'https://66.media.tumblr.com/255cd2d2b78b962b7cc344b2c6271338/tumblr_mxvmybAfqM1s3fjw4o1_400.gifv', srceaarth3: 'https://pa1.narvii.com/6599/acddcde0f8cb1d7c28e3789be46cff8fbe0bee43_hq.gif'},
    
    {name: 'water', src: 'https://pa1.narvii.com/6786/157f6ae2dff9316deedacc61ff1ef995079aa012_hq.gif', srcwater2: 'https://th.bing.com/th/id/R.39b86e8b4aced0696ba0db9969591dc5?rik=vowebyTiVgMqeA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f28100000%2fkatara-avatar-the-last-airbender-28171339-500-236.gif&ehk=X1x%2fEvgYL77GbXUoO3dKcWkR%2f8Kj0eVUgIGpYdm0IvE%3d&risl=&pid=ImgRaw&r=0', srcwater3: 'https://media.giphy.com/media/hIWJ5h3IOmGty/giphy.gif'}
] 

// ATACKS OF PLAYER

let textVs = document.getElementById('versus')

function attackAir(){
    attackPlayer = 'AIRE'
    attackPlayerText.width = 600
    attackPlayerText.height = 400
    imgsAttacks.filter(item => {
        return item.name.includes('air')
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
        return item.name.includes('air')
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
        return item.name.includes('air')
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
        return item.name.includes('fire')
    })
    .map(item =>{
        return attackPlayerText.src = item.src
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}
function attackFire2(){
    attackPlayer = 'FUEGO'
    attackPlayerText.width = 600
    attackPlayerText.height = 400
    imgsAttacks.filter(item => {
        return item.name.includes('fire')
    })
    .map(item =>{
        return attackPlayerText.src = item.srcfire2
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}
function attackFire3(){
    attackPlayer = 'FUEGO'
    attackPlayerText.width = 600
    attackPlayerText.height = 400
    imgsAttacks.filter(item => {
        return item.name.includes('fire')
    })
    .map(item =>{
        return attackPlayerText.src = item.srcfire3
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
function attackEarth2(){
    attackPlayer = 'TIERRA'
    attackPlayerText.width = 600
    attackPlayerText.height = 400 
    imgsAttacks.filter(item => {
        return item.name.includes('earth')
    })
    .map(item =>{
        return attackPlayerText.src = item.srceaarth2
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}
function attackEarth3(){
    attackPlayer = 'TIERRA'
    attackPlayerText.width = 600
    attackPlayerText.height = 400 
    imgsAttacks.filter(item => {
        return item.name.includes('earth')
    })
    .map(item =>{
        return attackPlayerText.src = item.srceaarth3
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
function attackWater2(){
    attackPlayer = 'AGUA'
    attackPlayerText.width = 600
    attackPlayerText.height = 400
    imgsAttacks.filter(item => {
        return item.name.includes('water')
    })
    .map(item =>{
        return attackPlayerText.src = item.srcwater2
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}
function attackWater3(){
    attackPlayer = 'AGUA'
    attackPlayerText.width = 600
    attackPlayerText.height = 400
    imgsAttacks.filter(item => {
        return item.name.includes('water')
    })
    .map(item =>{
        return attackPlayerText.src = item.srcwater3
    })
    textVs.innerText = 'VS'
    selectAttackPc()
}

// ATACKS OF PC

function selectAttackPc(){
    const attackAleatory = aleatory(1,4)
    const imgAleatory = aleatory(1,3)
    let sectionImages = document.getElementById('images')
    sectionImages.style.display = 'block'

        if(attackAleatory === 1){
            attackPc = 'AIRE'
            attackPcText.width = 600
            attackPcText.height = 400
            imgsAttacks.filter(item => {
                return item.name.includes('air')
            })
            .map(item =>{
                switch(imgAleatory){
                    case 1:
                        attackPcText.src = item.src
                        break
                    case 2:
                        attackPcText.src = item.src2
                        break
                    case 3:
                        attackPcText.src = item.src3
                        break
                }
            })

        } else if(attackAleatory === 2){
            attackPc = 'FUEGO'
            attackPcText.width = 600
            attackPcText.height = 400
            imgsAttacks.filter(item => {
                return item.name.includes('fire')
            })
            .map(item =>{
                switch(imgAleatory){
                    case 1:
                        attackPcText.src = item.src
                        break
                    case 2:
                        attackPcText.src = item.srcfire2
                        break
                    case 3:
                        attackPcText.src = item.srcfire3
                        break
                }
            })
        } else if(attackAleatory === 3){
            attackPc = 'TIERRA'
            attackPcText.width = 600
            attackPcText.height = 400
            imgsAttacks.filter(item => {
                return item.name.includes('earth')
            })
            .map(item =>{
                switch(imgAleatory){
                    case 1:
                        attackPcText.src = item.src
                        break
                    case 2:
                        attackPcText.src = item.srceaarth2
                        break
                    case 3:
                        attackPcText.src = item.srceaarth3
                        break
                }
            })
        } else if(attackAleatory === 4){
            attackPc = 'AGUA'
            attackPcText.width = 600
            attackPcText.height = 400
            imgsAttacks.filter(item => {
                return item.name.includes('water')
            })
            .map(item =>{
                switch(imgAleatory){
                    case 1:
                        attackPcText.src = item.src
                        break
                    case 2:
                        attackPcText.src = item.srcwater2
                        break
                    case 3:
                        attackPcText.src = item.srcwater3
                        break
                }
            })
        }
    combatFinal()
}

function combatFinal(){
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
        lifesPlayerText.innerText = `TIENES ${lifesPlayer} VIDAS`
    }
    countLifes()
}

function countLifes(){
    const messageResultFinal = document.getElementById('message-result-final')
    let buttonsAtack = document.getElementById('combat')

    if(lifesPlayer == 0){
        pResultFinal.innerHTML = 'GAME OVER'
        messageResultFinal.innerText = 'DEBERIA DARTE VEGUENZA'
        buttonsAtack.style.display = 'none'
        let sectionReloaded = document.getElementById('button-reloaded')
        sectionReloaded.style.display = 'block'

    } else if(lifesPc == 0){
        messageResultFinal.innerText = 'GANASTE, CELEBRALO'
        buttonsAtack.style.display = 'none'
        let sectionReloaded = document.getElementById('button-reloaded')
        sectionReloaded.style.display = 'block'
    }else{
        messageResultFinal.innerText = 'SIGUE EL COMBATE'
    }
}


function reloaded(){
    setTimeout(()=>{
        location.reload()
    }, 2000)
}

window.addEventListener("load", initGame)

