function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')  

// pegar a tag img
const img=document.querySelector('#profile img')
// substituir a imagem
    if(html.classList.contains('light')) {
//substituir a imagem quando estiver light
img.setAttribute('src', './assets/avatar-light.png')
    } else {
//manter a imagem quando não estiver light
img.setAttribute('src', './assets/avatar.png')
    }
}