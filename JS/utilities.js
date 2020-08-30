function getdocument(id, diretrizesif, diretrizesoutputif, diretrizesoutputelse) {
  if (diretrizesif) {
    document.getElementById(id).innerText = diretrizesoutputif;
  }
  else {
      diretrizesoutputelse;
  }
}


