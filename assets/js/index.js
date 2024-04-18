/* ------- CONFIGURANDO ABERTURA E FECHAMENTO DO MENU HAMBURGUER (MOBILE) */
/* ------- ABERTURA */
document.querySelector('.menu-hamburguer-btn').addEventListener('click', function() {
    var menuHamburguer = document.querySelector('.menu-hamburguer');
    document.querySelector('.menu-hamburguer').classList.toggle('open');
    menuHamburguer.style.display = 'flex';

    document.querySelector('.overlay').classList.toggle('active');
});
/* ------- FECHAMENTO */
document.querySelector('.close-menu-hamburguer-btn').addEventListener('click', function() {
    var menuHamburguer = document.querySelector('.menu-hamburguer');
    document.querySelector('.menu-hamburguer').classList.toggle('close');
    menuHamburguer.style.display = 'none';

    document.querySelector('.overlay').classList.toggle('active');
});

/* ------- CONFIGURANDO GALERIA */
var setas = document.querySelectorAll('.control');
var currentImagem = 0;
var imagens = document.querySelectorAll('.imagem');
var maxImagens = imagens.length;

setas.forEach(control => {
    control.addEventListener('click', () => {
        var isPrev = control.classList.contains('seta-prev');

        if (isPrev) {
            currentImagem -= 1;
        } else {
            currentImagem += 1;
        }

        if (currentImagem >= maxImagens) {
            currentImagem = 0;
        }

        if (currentImagem < 0) {
            currentImagem = maxImagens - 1
        }

        imagens[currentImagem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
    })
});