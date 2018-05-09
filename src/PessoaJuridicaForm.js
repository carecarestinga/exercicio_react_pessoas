import React, { Component } from 'react';

export default class ExemploFormulario extends Component {
    constructor() {
        super();
        // inicializa os campos
        this.state = {
            nome: "",
            cnpj: "",
            porte: "",
            site: "",
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
                cnpj: nextProps.cadastro.cnpj,
                porte: nextProps.cadastro.porte,
                site: nextProps.cadastro.site,
            }
        }
        return null;
    }

    // função que notifica o componente pai
    // através da callback cadastrar
    enviar() {
        let item = {
            nome: this.state.nome,
            cnpj: this.state.cnpj,
            porte: this.state.porte,
            site: this.state.site,
        };

        if (this.props.cadastro) {
            this.props.editar(item);

        } else {
            this.props.cadastrar(item);
        }
    this.setState({
        nome: "",
        cnpj: "",
        porte: "",
        site: "",
    });
    }

    render() {
        return(      
   <div className="form-group">

        <div><h3>PESSOA JURIDICA</h3></div>

        <form className="form-inline" onSubmit={(evento) => { 
            evento.preventDefault(); this.enviar() }}
            style={{border: "1px solid black", padding: "10px" }}>  

            <label>Nome:</label>&nbsp;&nbsp;
            <input type="text" value={this.state.nome} required
                 onChange={(evento) => this.setValor("nome", evento.target.value)} />
                 &nbsp;&nbsp;
            <label>CNPJ:</label>&nbsp;&nbsp;
            <input type="text" value={this.state.cnpj} required
                 onChange={(evento) => this.setValor("cnpj", evento.target.value)} />
                 &nbsp;&nbsp;
            <label>Porte:</label>&nbsp;&nbsp;
            <select value={this.state.porte} required
                 onChange={(evento) => this.setValor("porte", evento.target.value)}>
                 <option value="Selecione Um Porte"></option>
                 <option value="Micro Empresa">Micro Empresa</option>
                 <option value="Emp Pequeno Porte">Emp Pequeno Porte</option>
                 <option value="Emp Médio Porte">Emp Médio Porte</option>
                 <option value="Emp Grande Porte">Emp Grande Porte</option>
            </select>&nbsp;&nbsp;
            <label>Site:</label>&nbsp;&nbsp;
            <input type="site" value={this.state.site} required
                onChange={(evento) => this.setValor("site", evento.target.value)} />
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
                <button type="submit">{this.props.cadastros?"Salvar":"Cadastar"}</button>
            </div>

        </form>



</div>        
        );
    }
}
