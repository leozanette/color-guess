localStorage.setItem('placar', '0');

function createCirculos(a) {
  const local = document.getElementById('circulos');
  for (let i = 1; i <= a; i += 1) {
    const div = document.createElement('div');
    div.className = 'ball';
    local.appendChild(div);
  }
}
createCirculos(6);

function changeColors() {
  const paleta = document.getElementsByClassName('ball');
  for (let i = 0; i < paleta.length; i += 1) {
    const cor = geraCores();
    paleta[i].style.backgroundColor = cor;
  }
}
changeColors();
function geraCores() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function clicarCirculo() {
  const paleta = document.getElementsByClassName('ball');
  const alvo = document.getElementById('rgb-color');
  const texto = document.getElementById('answer');
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].addEventListener('click', (event) => {
      if (event.target.style.backgroundColor == alvo.innerText) {
        texto.innerText = 'Acertou!';
        let placar = parseInt(localStorage.placar);
        placar += 3;
        localStorage.placar = placar;
        document.getElementById('score').innerText = placar;
      } else {
        texto.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}
clicarCirculo();

function getRGB() {
  const paleta = document.getElementsByClassName('ball');
  const alvo = document.getElementById('rgb-color');
  corTexto = paleta[Math.floor(Math.random() * 6)].style.backgroundColor;
  alvo.innerText = corTexto;
}
getRGB();

function reset() {
  const reset = document.getElementById('reset-game');
  reset.addEventListener('click', () => {
    const texto = document.getElementById('answer');
    changeColors();
    getRGB();
    texto.innerText = 'Escolha uma cor';
  });
}

reset();
