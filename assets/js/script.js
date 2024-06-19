// variáveis
let menu = false; // false = hidden, true = visibility
let modo_cl_es = false; // false = modo escuro, true = modo claro
let menu_at = false; // false = fechado, true = aberto

// função para abrir o menu
function menu_button(){
    menu = !menu;
    var menu_botao = document.getElementById("menu");
    const img_menu = document.getElementById("img_menu");
    if(menu === true){
        menu_botao.classList.remove("menu_es");
        menu_botao.classList.add("menu_ap");
        img_menu.src = 'assets/images/menu2-es.png';
    }else{
        menu_botao.classList.remove("menu_ap");
        menu_botao.classList.add("menu_es");
        img_menu.src = 'assets/images/menu-es.png'
    }
}

// trocar cores/imagens do site
function modos(){
    modo_cl_es = !modo_cl_es;
    const logo = document.getElementById("img_logo");
    const menu = document.getElementById("img_menu");
    const modo = document.getElementById("img_modo");
    const h3 = document.getElementById("h3_txt");
    if(modo_cl_es === true){ // Modo Claro
        document.documentElement.style.setProperty('--cor40-es', '#0094eb');
        document.documentElement.style.setProperty('--cor_padrao_es', '#0080cb');
        document.documentElement.style.setProperty('--cor60-es', '#006aa8');
        document.documentElement.style.setProperty('--black','#ffffff');
        document.documentElement.style.setProperty('--gris90','#f6f8f8');
        document.documentElement.style.setProperty('--gris70','#ebebeb');
        document.documentElement.style.setProperty('--gris60','#e8e8e8');
        document.documentElement.style.setProperty('--gris65','#e0e0e0');
        document.documentElement.style.setProperty('--gris50','#c7c7c7');
        document.documentElement.style.setProperty('--gris-txt','#0f0f0f');
        document.documentElement.style.setProperty('--rgba-color','rgba(255, 255, 255, 50%)');
        logo.src = 'assets/images/wave-sound-cl.png';
        menu.src = 'assets/images/menu-cl.png'; //menu, mudar símbolo
        modo.src = 'assets/images/moon.png';
        h3.textContent = 'Modo Escuro';
        document.documentElement.style.setProperty('--url-img', 'url(../images/wall-cl.png)');
    }else{ // Modo Escuro
        document.documentElement.style.setProperty('--cor40-es','#7fe774');
        document.documentElement.style.setProperty('--cor_padrao_es','#2dc500');
        document.documentElement.style.setProperty('--cor60-es','#26931a');
        document.documentElement.style.setProperty('--black','#000000');
        document.documentElement.style.setProperty('--gris90','#010101');
        document.documentElement.style.setProperty('--gris70','#0d0d0d');
        document.documentElement.style.setProperty('--gris60','#161616');
        document.documentElement.style.setProperty('--gris65','#333333');
        document.documentElement.style.setProperty('--gris50','#555555');
        document.documentElement.style.setProperty('--gris-txt','#e6e6e6');
        document.documentElement.style.setProperty('--rgba-color','rgba(0, 0, 0, 50%)');
        logo.src = 'assets/images/wave-sound-es.png';
        menu.src = 'assets/images/menu-es.png'; //menu, mudar símbolo
        modo.src = 'assets/images/sun.png';
        h3.textContent = 'Modo Claro';
        document.documentElement.style.setProperty('--url-img', 'url(../images/wall-es.png)');
    }
}