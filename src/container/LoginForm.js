import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel,input } from "react-bootstrap";
import "./Login.css";
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../container/actions/AutenticacaoActions';


class LoginForm extends Component {

  _autenticarUsuario() {
    const { email, senha } = this.props;

    this.props.autenticarUsuario({ email, senha });
}

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <input
              autoFocus
              type="email"
              value={this.props.email}
              onChange ={texto => this.props.modificaEmail(texto) } 
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <input
              value={this.props.senha}
              onChange={texto => this.props.modificaEmail(texto) } 
              type="password"
            />
          </FormGroup>
          <Button
          onClick={() => this._autenticarUsuario()}
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
        </form>
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