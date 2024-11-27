
let currentIndex = 0;
const images = document.querySelectorAll('.carrossel .imagens img');
const totalImages = images.length;

function showImage(index) {
  const offset = -index * 100;
  document.querySelector('.carrossel .imagens').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
});

// Muda automaticamente a cada 3 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}, 3000);

document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelector(".imagens");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const indicadores = document.querySelector(".indicadores");

    const totalImagens = document.querySelectorAll(".carrossel-img").length;
    let indiceAtual = 0;

    // Criar indicadores
    for (let i = 0; i < totalImagens; i++) {
        const indicador = document.createElement("div");
        if (i === 0) indicador.classList.add("active");
        indicadores.appendChild(indicador);
    }

    const atualizarIndicadores = () => {
        document.querySelectorAll(".indicadores div").forEach((indicador, index) => {
            indicador.classList.toggle("active", index === indiceAtual);
        });
    };

    const mudarImagem = (novaPosicao) => {
        if (novaPosicao < 0) {
            indiceAtual = totalImagens - 1;
        } else if (novaPosicao >= totalImagens) {
            indiceAtual = 0;
        } else {
            indiceAtual = novaPosicao;
        }
        imagens.style.transform = `translateX(-${indiceAtual * 100}%)`;
        atualizarIndicadores();
    };

    prevBtn.addEventListener("click", () => mudarImagem(indiceAtual - 1));
    nextBtn.addEventListener("click", () => mudarImagem(indiceAtual + 1));

    document.querySelectorAll(".indicadores div").forEach((indicador, index) => {
        indicador.addEventListener("click", () => mudarImagem(index));
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 100; // Altura do cabeçalho ou ajuste desejado
      const targetPosition = target.offsetTop - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
