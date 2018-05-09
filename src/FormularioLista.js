import React, { Component } from 'react';
import './App.css';


export default class FormularioLista extends Component {


    render() {

           //  this.state = { tipoCadastro: 'pessoafisica' };
            //const index = this.state.index;


        return (

<div  className="table-responsive-md">

    <form className="form-inline">  

        <table  className="table" border="2">
         <thead>
                <tr>
                <th>Tipo</th>
                <th>Nome</th> 
                <th>CPF/CNPJ</th>
                <th>Nascimento</th>
                <th>E-mail</th>
                <th>Site</th>
                <th colspan="2">Ações</th>
                </tr>
         </thead>
            <tbody>
                {this.props.cadastros.map((cadastro, index, valor) =>
                <tr key={ cadastro.id }>
                <td>{ cadastro.tipoCadastro === "pessoafisica" ? "Pessoa Fisica" : cadastro.porte }</td>
                <td>{ cadastro.nome }</td>
                <td>{ cadastro.tipo ? cadastro.cpf : cadastro.cnpj }</td>
                <td>{ cadastro.nascimento }</td>
                <td>{ cadastro.email }</td>
                <td>{ cadastro.site }</td>
                <td> <button onClick={()=>this.props.editar(index)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={()=>this.props.excluir(index)}>
                                Excluir</button></td>
                </tr>)}
            </tbody>
        </table>


    </form>      

</div>
        );
    }
}
