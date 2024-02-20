function button(texto, desactivado) {
    var boton = document.createElement('button');
    boton.textContent = texto;
    boton.disabled = desactivado;
    return boton;
  }

  export default button;