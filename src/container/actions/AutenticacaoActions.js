import firebase from 'firebase';
import {hashHistory} from 'react-router';


import b64 from 'base-64';
import { 
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
} from './types';

export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

export const autenticarUsuario = ({ email, senha }) => {
console.log(email);
console.log(senha);
    return dispatch => {

        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(erro => loginUsuarioErro(erro, dispatch));
            console.log(dispatch);
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch (
        {
            type: LOGIN_USUARIO_SUCESSO    
        }
        
    );
            hashHistory.push('/home');
}

const loginUsuarioErro = (erro, dispatch) => {
    dispatch (
        {
            type: LOGIN_USUARIO_ERRO,
            payload: erro.message
        }
    );
}