/*
 *  Script com a lógica do cronometro.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um cronômetro de duas formas.
 *  1. Armazenar os milisegundos, segundos, minutos e horas e incrementar
 *     cada uma destas unidades quando necessário. Lembre-se que se milisegundos
 *     exceder 999 você deve incrementar uma unidade em segundos e assim continua.
 *  2. Você pode armazenar somente os milisegundos e incrementá-lo quando necessário.
 *     Após isso, você consegue obter horas minutos e segundos usando simples fórmulas
 *     matemáticas.
 *
 *  Depois de computar os valores de milisegundos, segundos, minutos e horas,
 *  atualize o HTML chamando o método updateVisualization(). Para isso,
 *  finalize a implementação simplesmente colocando os valores dentro dos elementos
 *  usando do atributo innerHTML dos elementos retornados.
 *
 *  Essa atualização deve ser feita usando o método 'setInterval' a pelo menos 10ms.
 *  Esse método retorna uma referência tal que pode ser usada por 'clearInterval'
 *  para interromper a execução a qualquer momento.
 */

var hh = 0;
var mm = 0;
var ss = 0;
var mili = 0;

var cronometro;

function updateVisualization() {
  if (mili < 99) {
    mili++;
    if (mili < 10) { mili = "0" + mili }
    document.getElementById("milissegundo").innerHTML = mili;
  }
  if (mili == 99) {
    mili = -1;
  }
  if (mili == 0) {
    ss++;
    if (ss < 10) { ss = "0" + ss }
    document.getElementById("segundo").innerHTML = ss;
  }
  if (ss == 59) {
    ss = -1;
  }
  if ((mili == 0) && (ss == 0)) {
    mm++;
    if (mm < 10) { mm = "0" + mm }
    document.getElementById("minuto").innerHTML = mm;
  }
  if (mm == 59) {
    mm = -1;
  }
  if ((mili == 0) && (ss == 0) && (mm == 0)) {
    hh++;
    if (hh < 10) { hh = "0" + hh }
    document.getElementById("hora").innerHTML = hh;
  }
}

// Funcao executada quando o botão 'Inicar' é clicado
// - se o cronometro estiver parado, iniciar contagem.
// - se estiver ativo, reiniciar a contagem
function start() {
  cronometro = setInterval(updateVisualization, 10);
  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("restart").disabled = false;
}

// Funcao executada quando o botão 'Parar' é clicado
// - se o cronometro estiver ativo, parar na contagem atual
function stop() {
  clearInterval(cronometro);
  document.getElementById("pause").disabled = true;
  document.getElementById("start").disabled = false;
}

// Funcao executada quando o botão 'Reiniciar' é clicado
// - se o cronometro estiver ativo, reiniciar contagem
// - se estiver parado, zerar e permanecer zerado
function reiniciar() {
  clearInterval(cronometro);
  hh = 0;
  mm = 0;
  ss = 0;
  mili = 0;

  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;

  document.getElementById("hora").innerHTML = '00';
  document.getElementById("minuto").innerHTML = '00';
  document.getElementById("segundo").innerHTML = '00';
  document.getElementById("milissegundo").innerHTML = '000';
}

