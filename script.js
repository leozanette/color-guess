localStorage.setItem('placar', '0');

function createCirculos(a) {
    let local = document.getElementById('circulos');
    for (i = 1; i <= a; i += 1) {
        let div = document.createElement('div');
        div.className = 'ball'
        local.appendChild(div)

    }
}
createCirculos(6);


function changeColors() {
    let paleta = document.getElementsByClassName('ball');
    for(i = 0; i <paleta.length; i+=1) {
        let cor = geraCores()
        paleta[i].style.backgroundColor = cor
    }
}
changeColors()
function geraCores() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let rgb = 'rgb('+r+','+g+','+b+')'
    return rgb;
}

function clicarCirculo() {
    let paleta = document.getElementsByClassName('ball');
    let alvo = document.getElementById('rgb-color');
    let texto = document.getElementById('answer')
    for(i =0; i<paleta.length; i+=1) {
    paleta[i].addEventListener('click', function(event) {
        if(event.target.style.backgroundColor == alvo.innerText) {
            texto.innerText = 'Acertou!'
            let placar = parseInt(localStorage.placar)
            placar += 3
            localStorage.placar = placar
            document.getElementById('score').innerText = placar
        } else {
            texto.innerText = "Errou! Tente novamente!"
        }
    })
}
}
clicarCirculo()

function getRGB() {
    let paleta = document.getElementsByClassName('ball');
    let alvo = document.getElementById('rgb-color');
    corTexto = paleta[Math.floor(Math.random()*6)].style.backgroundColor
    alvo.innerText = corTexto
}
getRGB()


function reset() {
    let reset = document.getElementById('reset-game');
    reset.addEventListener('click', function() {
        let texto = document.getElementById('answer')
        changeColors();
        getRGB()
        texto.innerText = 'Escolha uma cor'

    })
}

reset()

