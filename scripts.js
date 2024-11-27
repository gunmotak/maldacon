document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelector(".carrossel .imagens");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const indicadores = document.querySelector(".indicadores");
  const totalImagens = document.querySelectorAll(".carrossel .imagens img").length;
  let indiceAtual = 0;

  // Função para mostrar a imagem baseada no índice
  const mostrarImagem = (indice) => {
      const offset = -indice * 100;
      imagens.style.transform = `translateX(${offset}%)`;
      atualizarIndicadores();
  };

  // Função para atualizar os indicadores
  const atualizarIndicadores = () => {
      document.querySelectorAll(".indicadores div").forEach((indicador, index) => {
          indicador.classList.toggle("active", index === indiceAtual);
      });
  };

  // Criar os indicadores
  for (let i = 0; i < totalImagens; i++) {
      const indicador = document.createElement("div");
      if (i === 0) indicador.classList.add("active");
      indicadores.appendChild(indicador);
  }

  // Navegar para a imagem anterior
  const mudarImagem = (novaPosicao) => {
      indiceAtual = (novaPosicao + totalImagens) % totalImagens;
      mostrarImagem(indiceAtual);
  };

  prevBtn.addEventListener("click", () => mudarImagem(indiceAtual - 1));
  nextBtn.addEventListener("click", () => mudarImagem(indiceAtual + 1));

  document.querySelectorAll(".indicadores div").forEach((indicador, index) => {
      indicador.addEventListener("click", () => {
          indiceAtual = index;
          mostrarImagem(indiceAtual);
      });
  });

  // Navegação automática a cada 3 segundos
  setInterval(() => {
      mudarImagem(indiceAtual + 1);
  }, 3000);

  // Menu de navegação
  document.querySelector('.menu-toggle').addEventListener('click', function () {
      document.querySelector('nav').classList.toggle('active');
  });

  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          const offset = 100; // Ajuste de altura
          const targetPosition = target.offsetTop - offset;

          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      });
  });
});
