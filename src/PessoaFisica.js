import React, { Component } from 'react';
//import ExemploFormulario from './ExemploFormulario';
import PessoaFisicaForm from './PessoaFisicaForm';
import ExemploFormularioLista from './ExemploFormularioLista';

export default class PessoaFisica extends Component {
    constructor() {
        super();
        this.state = {
            cadastros: [],
            editarCadastro:null,
            editarIndex:null
        };
    }
    adicionar(cadastro) {
        this.setState((antigo)=>{
            antigo.cadastros.push(cadastro);
            return antigo;
        } );
    }

    editar(index) {
        this.setState(
            {
            editarIndex:index,
            editarCadastro:this.state.cadastros[index]
            }

        );
    }
    excluir(index) {
        this.setState(
            {
            editarIndex:index,
            editarCadastro:this.state.cadastros[index]
            }

        );
    }

    salvar(cadastro) {
        this.setState((antigo) =>{
            antigo.cadastros[antigo.editarIndex]=cadastro;
            antigo.editarIndex=null;
            antigo.editarCadastro=null;
            return antigo;
        });  
            
    }


    render() {
        return <div>
            <PessoaFisicaForm 
                cadastro={this.state.editarCadastro}
                editar={(cadastro) => this.salvar(cadastro)}
                cadastrar={(cadastro) => this.adicionar(cadastro)} />
            <br/> <br/>
            <ExemploFormularioLista 
                cadastros={this.state.cadastros}
                editar={(index)=>this.editar(index)}

             />
        </div>
    }
}