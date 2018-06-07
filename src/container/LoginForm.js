import React, { Component } from "react";
import "./Login.css";
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../container/actions/AutenticacaoActions';


class LoginForm extends Component {

  handleChange(e) {
    
    
  }
  _autenticarUsuario() {
    const { email, senha } = this.props;

    this.props.autenticarUsuario({ email, senha });
    console.log(this.props.email);
    console.log(this.props.senha);
    
    
}

  render() {
    return (
      <div>
                <h2>Login</h2>
                <hr />
                 
                <label>First Name: </label>
                <input type="text" type="email"
                value={this.props.email}
                onChange={(texto)=> this.props.modificaEmail(texto)} 
                />
                <br />
 
                <label>Last Name: </label>
                <input type="text"  
                value={this.props.senha}
                onChange={(texto)=> this.props.modificaEmail(texto)} 
                type="password"/>
                <br />
 
                <input type="button" value="Submit" onClick={() => this._autenticarUsuario()} />
 
                <hr />
           </div>
    );
  }
}

const mapStateToProps = state => (
  {
      email: state.AutenticacaoReducer.email,
      senha: state.AutenticacaoReducer.senha,
      erroLogin: state.AutenticacaoReducer.erroLogin,
  }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(LoginForm);