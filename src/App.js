import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PessoaFisicaForm from './PessoaFisicaForm';
import PessoaJuridicaForm from './PessoaJuridicaForm';
import FormularioLista from './FormularioLista';
import NavBar from './NavBar';


export default class App extends Component {
    constructor() {
        super();
         this.state = {
            cadastros: [],
            editarCadastro:null,
            editarIndex:null,
            tipoCadastro: "",
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

    salvar(cadastro) {
        this.setState((antigo) =>{
            antigo.cadastros[antigo.editarIndex]=cadastro;
            antigo.editarIndex=null;
            antigo.editarCadastro=null;
            return antigo;
        });  
            
    }


    setCadastros(cadastro) {
        this.setState({
            cadastro: cadastro
        });
    }

    tipoCadastro(valor) {
        this.setState({
            tipoCadastro: valor
        });
    }

    render() {

        let tipoCadastro = this.state.tipoCadastro;

        return (

<div>    
<NavBar />   
<div id="tipocadastro"  className="container" >
                    <div><br/>
                        <h3>Escolha o Cadastro:</h3>&nbsp;&nbsp;
                        &nbsp;&nbsp;    <br/>
                        <input type="radio"
                         id="tipoCadastro-pessoafisica"
                         checked={this.state.tipoCadastro === 'pessoafisica'}
                         onChange={() => this.tipoCadastro("pessoafisica") } /> 
                         <label htmlFor="tipoCadastro-pessoafisica">Pessoa Física</label>&nbsp;&nbsp;
                         &nbsp;&nbsp;
                         <input type="radio"
                         id="tipoCadastro-pessoajuridica"
                         checked={this.state.tipoCadastro === 'pessoajuridica'} 
                         onChange={() => this.tipoCadastro("pessoajuridica") } /> 
                        <label htmlFor="tipoCadastro-pessoajuridica">Pessoa Jurídica</label> <hr/>
                    </div>

                {tipoCadastro ? 
                    <strong><br/>{tipoCadastro === 'pessoafisica' ?
                    <PessoaFisicaForm  cadastro={this.state.editarCadastro}
                editar={(cadastro) => this.salvar(cadastro)}
                cadastrar={(cadastro) => this.adicionar(cadastro)}/>
                    :
                    <PessoaJuridicaForm   cadastro={this.state.editarCadastro}
                editar={(cadastro) => this.salvar(cadastro)}
                cadastrar={(cadastro) => this.adicionar(cadastro)} />}
                    </strong> 
                    : 
                    "Sem Pessoas Cadastradas"
                }



    <FormularioLista cadastros={this.state.cadastros} 
                     editar={(index)=>this.editar(index)
                
                    } />






</div>
</div>

        );
    }
}
