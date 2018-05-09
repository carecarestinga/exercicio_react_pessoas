import React, { Component } from 'react';

export default class ExemploFormulario extends Component {
    constructor() {
        super();
        // inicializa os campos
        this.state = {
            nome: "",
            cpf: "",
            nascimento: "",
            email: "",
        };
    }
    // função genérica para atribuir valores do estado
    setValor(campo, valor) {
        this.setState(
            (estadoAntigo) => {
                estadoAntigo[campo] = valor;
                return estadoAntigo;

            });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.cadastro) {
            return {
                nome: nextProps.cadastro.nome,
                cpf: nextProps.cadastro.cpf,
                nascimento: nextProps.cadastro.nascimento,
                email: nextProps.cadastro.email,
            }
        }
        return null;
    }

    // função que notifica o componente pai
    // através da callback cadastrar
    enviar() {
        let item = {
            nome: this.state.nome,
            cpf: this.state.cpf,
            nascimento: this.state.nascimento,
            email: this.state.email,
        };

        if (this.props.cadastro) {
            this.props.editar(item);

        } else {
            this.props.cadastrar(item);
        }
    this.setState({
        nome: "",
        cpf: "",
        nascimento: "",
        email: "",
    });
    }

    render() {
        return (  
<div className="form-group ">

          <div><h3>PESSOA FISICA</h3></div>

          <form className="form-inline col-lg-12" onSubmit={(evento) => {
          evento.preventDefault(); this.enviar() }}
            style={{
                border: "1px solid black",
                padding: "10px"
            }}
        >   
            <label>Nome:</label>&nbsp;&nbsp;
            <input type="text" value={this.state.nome} required
                onChange={(evento) => this.setValor("nome", evento.target.value)} />
                &nbsp;&nbsp;
            <label>CPF :</label>&nbsp;&nbsp;
            <input type="text" value={this.state.cpf} required
                onChange={(evento) => this.setValor("cpf", evento.target.value)} />
                &nbsp;&nbsp;
            <label>Nascimento:</label>&nbsp;&nbsp;
            <input type="date" value={this.state.nascimento}
                onChange={(evento) => this.setValor("nascimento", evento.target.value)} />
                &nbsp;&nbsp;
            <label>E-mail:</label>&nbsp;&nbsp;
            <input type="email" value={this.state.email} required
                onChange={(evento) => this.setValor("email", evento.target.value)} />
                &nbsp;&nbsp;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
            <button type="submit">{this.props.cadastros?"Salvar":"Cadastar"}</button>
            </div>
        </form>

</div>
        );
    }
}
