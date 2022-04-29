function createCirculos(a) {
    let local = document.getElementById('circulos');
    for (i = 1; i <= a; i += 1) {
        let div = document.createElement('div');
        div.className = 'ball'
        local.appendChild(div)

    }
}
createCirculos(6);