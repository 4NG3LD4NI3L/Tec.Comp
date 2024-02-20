import logo from "./logo.svg";
import "./App.css";
import CustomInput from "./CustomInput";
import button from "./button";

function App() {
  const labelStyle = {
    fontSize: '20px' // Cambiar el tamaño de la fuente a 24 píxeles
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <CustomInput label={"Nombre"} disabled={false} type="text" />
        <CustomInput label={"Correo"} disabled={false} type="text"/>
        <CustomInput label={"contraseña"} disabled={false} type="password"/>
      <div>
        <input type="checkbox" disabled={false} />
        <label style={labelStyle}>Aceptar terminos y condiciones</label>
      </div>
      <div className="contenedor">
        <button disabled={false}>cancelar</button>
        <button disabled={false}>enviar</button>
      </div>
      </header>
    </div>
  );
}

export default App;
