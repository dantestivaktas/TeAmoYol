// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Igual y dreno todas mis bancarias", time: 21 },
  { text: "Y me quedo un par de meses sin comer", time: 26 },
  { text: "Y nos compro esa mansión en Las Canarias", time: 31 },
  { text: "Con el muro de cristal y de Monet", time: 36 },
  { text: "Igual y te regalo mi apellido", time: 42 },
  { text: "En la forma de un anillo de papel", time: 47 },
  { text: "Igual y te me mueres", time: 52.5 },
  { text: "Para los noventa y tantos", time: 54.5 },
  { text: "Y de corazón partido", time: 57.5 },
  { text: "Yo me muero dos semanas después", time: 60 },
  { text: "Después", time: 68 },
  { text: "", time: 73 },
  { text: "Después", time: 74 },
  { text: "", time: 78 },
  { text: "Después", time: 79 },
  { text: "Ya es mañana y no he marcado", time: 85 },
  { text: "Y porque yo estoy trabajando", time: 87.5 },
  { text: "Para darte todo aquello", time: 90 },
  { text: "Que mereces, todo lo bello", time: 93 },
  { text: "Ya es mañana y no he marcado", time: 95.5 },
  { text: "Y porque yo estoy trabajando", time: 98 },
  { text: "Para darte todo aquello", time: 101 },
  { text: "Que mereces, todo lo bello", time: 104 },
  { text: "Ya es mañana y no he marcado", time: 106 },
  { text: "Y porque yo estoy trabajando", time: 109 },
  { text: "Para darte todo aquello", time: 112 },
  { text: "Que mereces, todo lo bello", time: 114 },
  { text: "Ya es mañana y no he marcado", time: 117 },
  { text: "Y porque yo estoy trabajando", time: 119.5 },
  { text: "Para darte todo aquello", time: 122.5 },
  { text: "Que mereces, todo lo bello", time: 125 },
  { text: "Ya es mañana y no he marcado", time: 128 },
  { text: "Y porque yo estoy trabajando", time: 130.5 },
  { text: "Para darte todo aquello", time: 133 },
  { text: "Que mereces, todo lo bello", time: 135.5 },
  { text: "Ya es mañana y no he marcado", time: 138.5 },
  { text: "Y porque yo estoy trabajando", time: 141 },
  { text: "Para darte todo aquello", time: 144 },
  { text: "Que mereces, todo lo bello", time: 146 },
  { text: "Te amo mi amor, espero te guste este detallito algo diferente, siempre buscaré hacerte feliz y sorprenderte y que no seas espectadora en días como estos!! <3", time: 150 },
];

// Animar las letras
function updateLyrics() {
  var time = parseFloat(audio.currentTime);
  var currentLine = lyricsData.findLast((line) => time >= line.time);

  if (currentLine) {
      // Solo cambia el texto si hay una nueva línea
      if (lyrics.innerHTML !== currentLine.text) {
          lyrics.innerHTML = currentLine.text;
      }
  }
}

setInterval(updateLyrics, 100);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);