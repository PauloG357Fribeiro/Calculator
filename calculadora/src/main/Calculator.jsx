import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const inicialState = {
    displayValue: '0', //Display começa com zero.
    clearDisplay: false, //Cria uma função que zera
    operation: null, //Armazena as operações +-/.
    value: [0, 0], //Dois valores, ex; 80 e o 20
    current: 0 //Qual está manipulando o 1° ou 2° valor
}

export default class Calculator extends Component{

    state = { ...inicialState }
    //Criamos o clone para dentro do objeto

    //Limpar operação (AC)
    clearMemory(){
        console.log('Limpar')
    }
    //Setar se o usuário colocou /+-*
    setOperation(operation){
        console.log(operation)
    }
    //Adicionar Digito
    addDigito(n){
        console.log(n)
    }

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigito = this.addDigito.bind(this)
    }
    render(){
        return(
            <div className="Calculator">
                <Display value={100}/>
                <Button label = "AC" click={this.clearMemory} triple/>
                <Button label = "/" click={this.setOperation} operation/>
                <Button label = "7" click={this.addDigito}/>
                <Button label = "8" click={this.addDigito}/>
                <Button label = "9" click={this.addDigito}/>
                <Button label = "*" click={this.setOperation} operation/>
                <Button label = "4" click={this.addDigito}/>
                <Button label = "5" click={this.addDigito}/>
                <Button label = "6" click={this.addDigito}/>
                <Button label = "-" click={this.setOperation} operation/>
                <Button label = "1" click={this.addDigito}/>
                <Button label = "2" click={this.addDigito}/>
                <Button label = "3" click={this.addDigito}/>
                <Button label = "+" click={this.setOperation} operation/>
                <Button label = "0" click={this.addDigito} double/>
                <Button label = "." click={this.addDigito}/>
                <Button label = "=" click={this.setOperation} operation/>
            </div>
        )
    }
}