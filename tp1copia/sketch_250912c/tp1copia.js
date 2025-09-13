// tp1 Mara Velazco 43107910 COM 3

let img;
let cant = 10;
let tamaño;
let invertir = false;  // variables globales con let no se usa boolean 

function preload(){
  img = loadImage("imagen.jpg"); // carga de imagen antes de setup
}

function setup() {
  createCanvas(800, 400);
  img.resize(width / 2, height);  
  tamaño = width / (2 * cant);
}

function draw() {
  background(255);
  image(img, 0, 0);

  // ciclo for anidado para crear la cuadrícula
  for (let x = 0; x < cant; x++) { 
    for (let y = 0; y < cant; y++) {
      let desplazar = correrFila(y);   // corre horizontalmente cada fila
      dibujarCuadro(x, y, desplazar);  // dibja cadraro en x 
    }
  }
}

// evento teclado
function keyPressed() {  
  if (key == 'r' || key == 'R') { // reiniciar
    invertir = false;
  }
  if (key == 'i' || key == 'I') { // invertir
    if (invertir == false) {
      invertir = true;
    } else {
      invertir = false;
    }
  }
}

// efecto escalones: retorna el valor de desplazamiento horizontal media casilla  
function correrFila(fila) {
  if (fila % 2 == 0) { 
    return 0; 
  } else {
    return tamaño / 2; 
  }
}

// función para dibujar cada cuadro
function dibujarCuadro(x, y, desplazar) { 
  let posX = width / 2 + x * tamaño + desplazar; 
  let posY = y * tamaño; 

  // colores con map() según posición del mouse
  let r = map(mouseX, 0, width, 0, 255); 
  let g = map(mouseY, 0, height, 0, 255); 
  let b = map(mouseX + mouseY, 0, width + height, 0, 255); 

  // alternar color o blanco y negro según patrón
  if ((x + y) % 2 == 0) { // casilla par
    if (invertir) {
      fill(r, g, b);
    } else {
      fill(0);
    }
  } else { // casilla impar
    if (invertir) {
      fill(0);
    } else {
      fill(r, g, b);
    }
  }

  rect(posX, posY, tamaño, tamaño);
}
