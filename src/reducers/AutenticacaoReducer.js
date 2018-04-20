import { 
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    LOGIN_USUARIO_ERRO,
} from '../container/actions/types';

const INITIAL_STATE = {
    nome: '',
    email: 'suirtymid@gmail.com',
    senha: 'codorna',
    erroLogin: '',
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload}
        default:
            return state;
    }    
}