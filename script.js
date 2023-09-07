function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


const target = document.querySelectorAll('[data-anime]');

const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', function (){
        animeScroll();
    })
}

//projetos

const projetos = [
    {
    titulo: 'Jogo da Cobrinha',
    img:'/img/cobrinha.png',
    code: 'https://github.com/sarahmontalvao/jogoDaCobrinha/blob/main/js/snake.js',
    site:'https://sarahmontalvao.github.io/jogoDaCobrinha',

},

{
    titulo: 'Lista de tarefas',
    img:'/img/lista.png',
    code: 'https://github.com/sarahmontalvao/lista-de-tarefas/blob/main/js/controle.js',
    site:'https://sarahmontalvao.github.io/lista-de-tarefas/',

},

{
    titulo: 'Mata Mosquito',
    img:'/img/mosquito.png',
    code: 'https://github.com/sarahmontalvao/mata-mosquito-game/blob/main/app.js',
    site:'https://sarahmontalvao.github.io/mata-mosquito-game/',

},

{
    titulo: 'Relogio',
    img:'/img/relogio.png',
    code: 'https://github.com/sarahmontalvao/relogio/blob/main/js/script.js',
    site:'https://sarahmontalvao.github.io/relogio/',

},




]



const container = document.getElementById('projetos');

projetos.forEach((projeto) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    
    const site = document.createElement('a');
    site.classList.add('button');
    site.innerHTML = 'site'
    site.href = projeto.site;
    
    const code = document.createElement('a');
    code.classList.add('button');
    code.innerHTML = 'codigo'
    code.href = projeto.code;
   

    const titulo = document.createElement('p');
    titulo.innerHTML = projeto.titulo;

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgProject');

    const img = document.createElement('img')
    img.src = projeto.img;
    
    projectDiv.appendChild(site);
    projectDiv.appendChild(code);
    projectDiv.appendChild(imgDiv);
    
    imgDiv.appendChild(img)

    container.appendChild(projectDiv);
});