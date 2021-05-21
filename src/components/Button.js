import React, {useState} from 'react'
import "../App.css";

export const Button = ({operation, total, setTotal, setOperationDo, setValor, valor}) => {

    const onChange = (event) => {
        setValor(event.target.value);
        setOperationDo('');
    }
    var o = 0
    if(operation === 'Sumar'){
        o = total + Number(valor);
    }else if(operation === 'Restar'){
        o = total - valor;
    }else if(operation === 'Multiplicar'){
        o = total * valor;
    }else{
        o = total / valor;
    }
    
    function btn(){
        setTotal(o)|| setOperationDo(operation) || setValor(valor); 
        document.getElementById('input'+operation).value=null;
    }

    return (
        <div className="btn" >
            <p onClick={() => btn()}>{operation}</p>
            <input type="number" placeholder="Valor" onChange={onChange} id={'input'+operation}></input>
        </div>
    )
}
