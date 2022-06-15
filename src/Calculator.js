import React, {useState} from "react";
import "./Calculator.css"
import * as math from "mathjs"


const Calculator = () => {

    const [result, setResult] = useState("")

    const keyDown = (elem) => {
        setResult(result.concat(elem.target.value))
    }

    const clear = () => {
        setResult("")
    }

    const clearOne = () => {
        setResult(result.slice(0, -1))
    }

    const calculateResult = () => {
        try {
            setResult(math.evaluate(result).toFixed(3))
        } catch (error) {
            setResult.length("Error")
        }
    }

    
    return (
    <div className="calculator">
        <div className="resultWindow">
            {result}
        </div>
        
        <div className="keyPad">
            <button onClick={clear} className="keyPadClear" >Clear</button>
            <button onClick={clearOne}>C</button> 
            <button value="/" onClick={keyDown}>&divide;</button> 
            <button value="7" onClick={keyDown}>7</button> 
            <button value="8" onClick={keyDown}>8</button> 
            <button value="9" onClick={keyDown}>9</button> 
            <button value="*" onClick={keyDown}>&times;</button> 
            <button value="4" onClick={keyDown}>4</button> 
            <button value="5" onClick={keyDown}>5</button> 
            <button value="6" onClick={keyDown}>6</button>               
            <button value="-" onClick={keyDown}>&ndash;</button> 
            <button value="1" onClick={keyDown}>1</button> 
            <button value="2" onClick={keyDown}>2</button> 
            <button value="3" onClick={keyDown}>3</button> 
            <button value="+" onClick={keyDown}>+</button> 
            <button value="0" onClick={keyDown}>0</button> 
            <button value="." onClick={keyDown}>.</button> 
            <button onClick={calculateResult} className="keyPadResult">=</button>  
        </div>
    </div>
  );
}

export default Calculator;
