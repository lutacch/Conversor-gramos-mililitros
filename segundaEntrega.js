let nombreIngresado = "";
let inputNombre = document.getElementById("nombre");

inputNombre.addEventListener("nombre", () => {
  nombreIngresado = inputNombre.value;
});

let botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener("click", () => {
  let nombreIngresado = document.getElementById("nombre").value;
  let conTacc = document.getElementById("conTacc").value;
  let sinTacc = document.getElementById("sinTacc").value;
  localStorage.setItem("nombre", nombreIngresado);
  localStorage.setItem("conTacc", conTacc);
  localStorage.setItem("sinTacc", sinTacc);

  function webPopUp() {
    conTacc === "on"
      ? (location.href = "#glutenFree")
      : (location.href = "#gluten");
  }
  webPopUp();
});

let trigoIngresado = "";
let inputTrigo = document.getElementById("input-trigo");

let centenoIngresado = "";
let inputCenteno = document.getElementById("input-centeno");

let avenaIngresado = "";
let inputAvena = document.getElementById("input-avena");

let botonTrigo = document.getElementById("btnA");
let botonCenteno = document.getElementById("btnB");
let botonAvena = document.getElementById("btnC");

inputTrigo.addEventListener("input", () => {
  trigoIngresado = inputTrigo.value;
});

inputCenteno.addEventListener("input", () => {
  centenoIngresado = inputCenteno.value;
});

inputAvena.addEventListener("input", () => {
  avenaIngresado = inputAvena.value;
});

let cupTrigo = 140;
let cupCenteno = 104;
let cupAvena = 90;

botonTrigo.addEventListener("click", () => {
  function dividirTrigo() {
    resultadoTrigo = Number(trigoIngresado) / cupTrigo;
  }
  dividirTrigo();
  let placaResultadoTrigo = document.getElementById("resultadoTrigo");
  placaResultadoTrigo.innerHTML =
    "Tu conversion de gramos de Trigo a Tazas es igual a: " +
    resultadoTrigo.toFixed(1);
});

botonCenteno.addEventListener("click", () => {
  function dividirCenteno() {
    resultadoCenteno = Number(centenoIngresado) / cupCenteno;
  }
  dividirCenteno();
  let tazasCenteno = resultadoCenteno.toFixed(1);
  let placaResultadoCenteno = document.getElementById("resultadoCenteno");
  placaResultadoCenteno.innerHTML =
    "Tu conversion de gramos de Centeno a Tazas es igual a: " + tazasCenteno;

  let recetaSugerida = document.getElementById("recetaCenteno");

  function recetasCenteno(tazasCenteno) {
    if (tazasCenteno <= 0) {
      recetaSugerida.innerHTML = `Con ${tazasCenteno} tazas de harina de centeno podes realizar esta Torta de Banana.`;
    } else if (tazasCenteno <= 1) {
      recetaSugerida.innerHTML = `Con ${tazasCenteno} tazas de harina de centeno podes realizar esta Torta de Manzana`;
    } else if (tazasCenteno <= 2) {
      recetaSugerida.innerHTML = `Con ${tazasCenteno} tazas de harina de centeno podes realizar esta Torta de Nuez`;
    } else {
      `Lo siento! no hemos encontrado ninguna receta para esta cantidad de tazas.`;
    }
  }
  recetasCenteno(tazasCenteno);
});

botonAvena.addEventListener("click", () => {
  function dividirAvena() {
    resultadoAvena = Number(avenaIngresado) / cupAvena;
  }
  dividirAvena();
  let placaResultadoAvena = document.getElementById("resultadoAvena");
  placaResultadoAvena.innerHTML =
    "Tu conversion de gramos de Avena a Tazas es igual a: " +
    resultadoAvena.toFixed(1);
});

let mililitrosIngresados = "";
let inputMililitros = document.getElementById("input-mililitros");
inputMililitros.addEventListener("input", () => {
  mililitrosIngresados = inputMililitros.value;
});

let boton2 = document.getElementById("btnSecundario");
let cup2 = 250;
boton2.addEventListener("click", () => {
  function dividirMililitros() {
    resultadoMililitros = Number(mililitrosIngresados) / cup2;
  }
  dividirMililitros();
  let placaResultadoMililitros = document.getElementById("resultadoMililitros");
  placaResultadoMililitros.innerHTML =
    "Tu conversion mililitros a Tazas es igual a: " +
    resultadoMililitros.toFixed(1);
});
