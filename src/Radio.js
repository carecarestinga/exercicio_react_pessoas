import React, { Component } from 'react';

export default class ExemploRadio extends Component {
    constructor(props) {
        super(props);
        this.state = { tipo:"" };
    }
    setarTipo(valor) {
        this.setState({
            tipo:valor
        });
    }
    render() {
        return <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>Escolha:</label>
        <input type="radio" 
                id="tipo-pessoaFisica"
                checked={this.state.tipo == 'pessoaFisica'} 
                onChange={()=>this.setarTipo("pessoaFisica") } /> 
                <label htmlFor="tipo-pessoaFisica">Pessoa Fisica</label> 
        <input type="radio" 
                id="tipo-pessoaJuridica"
                checked={this.state.tipo == 'pessoaJuridica'} 
                onChange={()=>this.setarTipo("pessoaJuridica") } />
                <label htmlFor="tipo-pessoaJuridica">Pessoa Juridica</label> <br/>
        </div>
    }
}