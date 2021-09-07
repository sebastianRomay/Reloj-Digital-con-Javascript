const mostrarReloj = () => {
  let fecha = new Date();
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());
  document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

  let meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  let dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
  document.getElementById("fecha").innerHTML = fechaTexto;

  document.getElementById('contenedor').classList.toggle('animar')
};

const formatoHora = (hora) => {
  if (hora < 10) hora = "0" + hora;
  return hora;
};

setInterval(mostrarReloj, 1000);
