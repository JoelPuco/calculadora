
import "./App.css";
import { Button } from "./components/Button";
import React, { useState } from "react";

function App() {
  
  const [total, setTotal] = useState(0);
  const [operationDo, setOperationDo] = useState("");
  const [valor, setValor] = useState(null);



  return (
    <div className="App">
            <h3>Calculadora By Joel Puco</h3>
      <div className="calculator">
        <div className="screen">
          <div className="screen_total">
            <h4>Total: {total}</h4>
            <h3>
              {operationDo} {valor}
            </h3>
          </div>
        </div>
        <div className="buttons">
          <Button
            operation="Sumar"
            total={total}
            setTotal={setTotal}
            setOperationDo={setOperationDo}
            setValor={setValor}
            valor={valor}
          />
          <Button
            operation="Restar"
            total={total}
            setTotal={setTotal}
            setOperationDo={setOperationDo}
            setValor={setValor}
            valor={valor}
          />
          <Button
            operation="Multiplicar"
            total={total}
            setTotal={setTotal}
            setOperationDo={setOperationDo}
            setValor={setValor}
            valor={valor}
          />
          <Button
            operation="Dividir"
            total={total}
            setTotal={setTotal}
            setOperationDo={setOperationDo}
            setValor={setValor}
            valor={valor}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
