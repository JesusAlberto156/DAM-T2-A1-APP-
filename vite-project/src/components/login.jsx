import { useEffect, useReducer } from "react";

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

const LoginPayLoad = {
    username: '',
    nombre: ''
}

const AuthAction = {
    type: 'login',
    payload: LoginPayLoad
};

const logout = {
    type: 'logout'
}

function reducer(state, action){
    switch (action.type){
        case 'logout':
            return{
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
            break;
        case 'login':
            const {nombre,username} = action.payload;
            return{
                validando: false,
                token: 'LEGENDARIO156',
                username,
                nombre
            }
        default:
            return state;
            break;
    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() =>{
        setTimeout(() => {
            dispatch({type:'logout'})
        }, 2500);
    },[]);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'Partida04',
                nombre: 'Jesus'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    if (state.validando){
        return(
            <div>
                <h2 style={{color: 'white'}}>Login</h2>
                <div className="AlertInfo_Div">
                    <h3 style={{color: 'white'}}>Validando Información...</h3>
                </div>
                <br/>
            </div>
        );
    }

    return(
        <div>
            <h2 style={{color: 'white'}}>Login</h2>
            {
                (state.token)  ? (
                    <div className="AlertSuccess_Div" class="alert alert-success">
                        <h3>Autenticando como: {state.nombre}</h3>
                    </div>
                ):(
                    <div className="AlertDanger_Div" class="alert alert-danger">
                        <h3>No Autenticado...</h3>
                    </div>
                )
            }
            {
                (state.token) ? (
                    <button class="btn btn-danger"
                        onClick={ logout }>
                        Logout
                    </button>
                ) : (
                    <button class="btn btn-primary"
                        onClick={ login }>
                        Login
                    </button>        
                ) 
            }
        </div>
    );
}