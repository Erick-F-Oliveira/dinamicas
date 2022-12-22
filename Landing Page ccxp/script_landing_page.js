const dia = document.getElementById('dia');

const hora = document.getElementById('hora');

const minuto = document.getElementById('minuto');

const segundo = document.getElementById('segundo');

const lancamento = "01 dec 2023"

function contador() {
  const datalanc = new Date(lancamento)
  const hoje = new Date()

  const segundosTotais = (datalanc - hoje) / 1000;
  const diasFinais = Math.floor(segundosTotais / 60 / 60 / 24);
  const horasFinais = Math.floor(segundosTotais / 60 / 60) % 24;
  const minutosFinais = Math.floor(segundosTotais / 60) % 60;
  const segundosFinais = Math.floor(segundosTotais) % 60;

  dia.innerHTML = diasFinais
  hora.innerHTML = formaTempo (horasFinais)
  minuto.innerHTML = formaTempo (minutosFinais)
  segundo.innerHTML = formaTempo (segundosFinais)

}

function formaTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}
contador();
setInterval(contador, 1000);

