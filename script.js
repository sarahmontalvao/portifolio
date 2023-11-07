const projetos = [

    {
        titulo: 'CineSala',
        img:'img/cinema.png',
        code: 'https://github.com/sarahmontalvao/cinema/tree/main/src',
        site:'https://cinema-4gqmy1g17-sarahs-projects-4a16e032.vercel.app/',
        tecno: 'React, Typescript',
        desc: 'O CineSala é um projeto desenvolvido com React, TypeScript, HTML e CSS, oferecendo aos usuários uma experiência imersiva e fácil de usar para explorar, buscar e favoritar filmes. Sua interface é fluida e responsiva, garantindo uma navegação suave em todas as plataformas.',
    
    },
    {
    titulo: 'Jogo da Cobrinha',
    img:'img/cobrinha.png',
    code: 'https://github.com/sarahmontalvao/jogoDaCobrinha/blob/main/js/snake.js',
    site:'https://sarahmontalvao.github.io/jogoDaCobrinha',
    tecno: 'Html, Css, Javascript',
    desc: 'O Jogo da Cobrinha em JavaScript é um clássico dos videogames, onde os jogadores controlam uma cobra usando as setas do teclado para se movimentar pelo campo de jogo. A cobra é representada como um array de segmentos coloridos, que aumentam de tamanho ao comer alimentos, também representados por blocos coloridos.',
},

{
  titulo: 'Landing Page saudável',
  img:'img/dieta.png',
  site:'https://sarahmontalvao.000.pe/',
  tecno: 'Wordpress, Elementor',
  desc: ' Desenvolvi esta Landing Page cativante usando o Elementor no WordPress. Com um design intuitivo e uma chamada irresistível para ação, esta página convida os visitantes a transformar suas vidas com um guia acessível de alimentação saudável.',
},

{
    titulo: 'Lista de tarefas',
    img:'img/lista.png',
    code: 'https://github.com/sarahmontalvao/lista-de-tarefas/blob/main/js/controle.js',
    site:'https://sarahmontalvao.github.io/lista-de-tarefas/',
    tecno: 'Html, Css, Javascript',
    desc: 'A lista de tarefas em JavaScript é uma aplicação simples que permite aos usuários adicionar, marcar como concluídas ou excluir tarefas. Utilizando HTML, CSS e JavaScript, as tarefas são exibidas como itens na página. Os usuários podem adicionar novas tarefas, marcá-las como concluídas com um clique e remover tarefas indesejadas.',
},

{
    titulo: 'Mata Mosquito',
    img:'img/mosquito.png',
    code: 'https://github.com/sarahmontalvao/mata-mosquito-game/blob/main/app.js',
    site:'https://sarahmontalvao.github.io/mata-mosquito-game/',
    tecno: 'Html, Css, Javascript',
    desc: 'Neste jogo, mosquitos aparecem aleatoriamente na tela, e os jogadores têm que clicar neles para eliminá-los. Usei setInterval() para definir se o usuario ganhou ou perdeu, proporcionando uma experiência de jogo dinâmica. Além disso, implementei um sistema de seleção de níveis, permitindo aos jogadores escolherem entre diferentes graus de dificuldade para um desafio personalizado.',

},

{
    titulo: 'Relogio',
    img:'img/relogio.png',
    code: 'https://github.com/sarahmontalvao/relogio/blob/main/js/script.js',
    site:'https://sarahmontalvao.github.io/relogio/',
    tecno: 'Html, Css, Javascript',
    desc: 'Relógio digital e analógico em JavaScript. O relógio digital exibe a hora de forma clara, enquanto o relógio analógico apresenta ponteiros elegantes. Ambos atualizam em tempo real.',
},




]



const container = document.getElementById('projetos');

projetos.forEach((projeto) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const button = document.createElement('div');
    button.classList.add('buttonDiv');

    
    const site = document.createElement('a');
    site.classList.add('button');
    site.innerHTML = 'site'
    site.href = projeto.site;
    site.target = '_blank';
    
    const code = document.createElement('a');
    code.classList.add('button');
    code.innerHTML = 'codigo'
    code.href = projeto.code;
    code.target = '_blank';

    const tecno = document.createElement('p');
    tecno.innerHTML = projeto.tecno
    tecno.classList.add('tecnoProjeto')
   

    const titulo = document.createElement('p');
    titulo.innerHTML = projeto.titulo;
    titulo.classList.add('tituloProjeto')

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgProject');

    const img = document.createElement('img')
    img.src = projeto.img;

    const desc = document.createElement('div')
    desc.innerHTML = projeto.desc;
    desc.classList.add('desc');
    desc.style.display = 'none';

    imgDiv.appendChild(desc); 

       
    imgDiv.addEventListener('mouseover', () => {
      img.style.display = 'none';
      desc.style.display = 'flex';
  });

 
  imgDiv.addEventListener('mouseout', () => {
    img.style.display = 'block';
      desc.style.display = 'none';
  });

    
   
    projectDiv.appendChild(button);
    button.appendChild(titulo)
    button.appendChild(site);
      if (projeto.code) {
        button.appendChild(code);
    }
    button.appendChild(tecno);
    projectDiv.appendChild(imgDiv);
    imgDiv.appendChild(img)

    container.appendChild(projectDiv);
});


const hamburguer = document.querySelector(".hamburguer");

const nav = document.querySelector(".nav");

const links = document.querySelectorAll(".nav a");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active"); 
  });
});