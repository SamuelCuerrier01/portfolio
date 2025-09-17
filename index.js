console.log('Happy developing ✨')

let body = document.getElementsByTagName('body');

body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
})

body.addEventListener('dblclick', (e) => {
    e.preventDefault()
})

//les deux tests ne mache pas
