let larguraCanvas = 600;
let alturaCanvas = 400;

function setup() {
  createCanvas(larguraCanvas, alturaCanvas);
  // Inicializações (carregar imagens, sons, definir cores, etc.)
}

function draw() {
  background(255, 240, 200); // Cor de fundo alegre (amarelo claro)

  // Chamada das funções para desenhar cada cena/elemento
  desenharEntrada();
  // desenharBarraquinhas();
  // desenharDanca();
  // desenharFogueira();

  // Adicionar título e mensagens gerais
  fill(139, 69, 19); // Marrom
  textSize(24);
  textAlign(CENTER);
  text("Arraiá da União!", larguraCanvas / 2, 30);
}

// Função para a primeira cena: A Chegada na Festa
function desenharEntrada() {
  // Desenhar o fundo com céu azul e grama verde
  background(135, 206, 235); // Azul claro
  fill(34, 139, 34); // Verde escuro
  rect(0, alturaCanvas - 100, larguraCanvas, 100);

  // Desenhar bandeirinhas
  for (let i = 20; i < larguraCanvas; i += 40) {
    fill(random(255), random(255), random(255));
    triangle(i, 60, i + 15, 40, i + 30, 60);
  }

  // Desenhar portal do campo (exemplo simples)
  fill(139, 69, 19);
  rect(50, alturaCanvas - 150, 30, 50);
  fill(100, 200, 100);
  ellipse(65, alturaCanvas - 160, 40, 20); // Flores

  // Desenhar portal da cidade (exemplo simples)
  fill(105, 105, 105);
  rect(larguraCanvas - 80, alturaCanvas - 180, 30, 80);
  fill(255, 255, 0);
  ellipse(larguraCanvas - 65, alturaCanvas - 190, 15, 15); // Luz

  // Desenhar pessoas chegando (círculos coloridos)
  fill(255, 0, 0);
  ellipse(150, alturaCanvas - 50, 20, 20);
  fill(0, 0, 255);
  ellipse(larguraCanvas - 150, alturaCanvas - 60, 25, 25);
}

// Outras funções para desenhar as demais cenas (desenharBarraquinhas, desenharDanca, desenharFogueira)

function mouseClicked() {
  // Lógica para interação com o mouse (se houver)
  // Por exemplo, ao clicar em uma pessoa, mostrar uma fala.
}