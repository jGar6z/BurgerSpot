//Responsive Header
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//BestSellers Favorite
var heartFavorites = [null, null, null, null];

function favorite(index) {
    if (!heartFavorites[index - 1]) {
        heartFavorites[index - 1] = document.getElementById("heartFavorite" + index);
    }

    var currentName = heartFavorites[index - 1].getAttribute("name");
    var newName = (currentName === "heart-outline") ? "heart" : "heart-outline";
    heartFavorites[index - 1].setAttribute("name", newName);
}

//Add to Cart
var ativos = 0;

function containerBg(button) {
    var icon = button.querySelector(".icon");
    var text = button.querySelector(".text");
    
    if (icon.getAttribute("name") === "cart-outline") {
        icon.setAttribute("name", "checkmark-circle");
        text.textContent = "ADICIONADO AO CARRINHO";
        ativos++;
    } else {
        icon.setAttribute("name", "cart-outline");
        text.textContent = "ADICIONAR AO CARRINHO";
        ativos--;
    }
    
    updateVerTodosButton();
}

function updateVerTodosButton() {
    var verTodosButton = document.getElementById("verTodosButton");
    
    if (ativos > 1) {
        verTodosButton.textContent = "VER TODOS OS PRODUTOS (" + ativos + ")";
    } else if (ativos === 1) {
        verTodosButton.textContent = "VER TODOS OS PRODUTOS (1)";
    } else {
        verTodosButton.textContent = "VER TODOS OS PRODUTOS";
    }
}

function verTodosProdutos() {
    // Implemente a lógica para mostrar todos os produtos
}


//Feedback Slider
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if (count > 3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

//News Read More
function readMore1() {
    var dots1=document.getElementById("dots1");
    var more1=document.getElementById("more1");
    var readMoreBtn1=document.getElementById("readMoreBtn1");

    if (dots1.style.display == "none") {
        dots1.style.display = "inline";
        more1.style.display = "none";
        readMoreBtn1.innerHTML = "Leia Mais";
    }else {
        dots1.style.display = "none";
        more1.style.display = "inline";
        readMoreBtn1.innerHTML = "Leia Menos";
    }
}
function readMore2() {
    var dots2=document.getElementById("dots2");
    var more2=document.getElementById("more2");
    var readMoreBtn2=document.getElementById("readMoreBtn2");

    if (dots2.style.display == "none") {
        dots2.style.display = "inline";
        more2.style.display = "none";
        readMoreBtn2.innerHTML = "Leia Mais";
    }else {
        dots2.style.display = "none";
        more2.style.display = "inline";
        readMoreBtn2.innerHTML = "Leia Menos";
    }
}
function readMore3() {
    var dots3=document.getElementById("dots3");
    var more3=document.getElementById("more3");
    var readMoreBtn3=document.getElementById("readMoreBtn3");

    if (dots3.style.display == "none") {
        dots3.style.display = "inline";
        more3.style.display = "none";
        readMoreBtn3.innerHTML = "Leia Mais";
    }else {
        dots3.style.display = "none";
        more3.style.display = "inline";
        readMoreBtn3.innerHTML = "Leia Menos";
    }
}
function readMore4() {
    var dots4=document.getElementById("dots4");
    var more4=document.getElementById("more4");
    var readMoreBtn4=document.getElementById("readMoreBtn4");

    if (dots4.style.display == "none") {
        dots4.style.display = "inline";
        more4.style.display = "none";
        readMoreBtn4.innerHTML = "Leia Mais";
    }else {
        dots4.style.display = "none";
        more4.style.display = "inline";
        readMoreBtn4.innerHTML = "Leia Menos";
    }
}

