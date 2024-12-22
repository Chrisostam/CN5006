import './App.css';
import React from 'react';

function Calculator() {

    function calculate() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operator = document.getElementById('operator').value;
        let result = 0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid Operation';
        }
        document.getElementById('result').innerText = `Result: ${result}`;
    }
    return (    
        <div id = "outer">
            <div id = "frame" className = "app">
                <h2 class = "text">Simple Calculator</h2>
                <input class = "input" type="number"  id="num1" placeholder="First Number"/>

    
                <select id="operator" >
                    <option value="+">Add</option>
                    <option value="-">Subtract</option>
                    <option value="*">Multiply</option>
                    <option value="/">Divide</option>
                </select>

                <input class = "input" type="number" id="num2" placeholder="Second Number"/>

                <button id = "clac" onClick={calculate} >
                    Calculate
                </button>
                <p class = "text" id="result" style={{ fontWeight: 'bold', fontSize: '16px'}}>Result:</p>
        </div>

        </div>
        
    );
}

export default Calculator;