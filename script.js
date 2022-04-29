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