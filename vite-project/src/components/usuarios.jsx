import {useUsuarios} from './hooks/useUsuarios'

export const Usuarios = () => {

    const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios();

    const renderItem = (usuarios) => {
        return (
            <tr key={usuarios.id.toString()}>
                <td>
                    <img
                        src={usuarios.avatar}
                        alt={usuarios.first_name}
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}>
                    </img>
                </td>
                <td>
                    {usuarios.first_name} {usuarios.last_name}
                </td>
                <td>
                    {usuarios.email}
                </td>
            </tr>
        )
    }

    return(
        <div>
            <h2 style={{color: 'white'}}>Usuarios</h2>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(ArgUsuario => renderItem(ArgUsuario))
                    }
                </tbody>
            </table>
            <button class="btn btn-outline-primary"
                onClick={paginaAnterior}>
                    Anterior
            </button>
            &nbsp;
            <button class="btn btn-outline-primary"
                onClick={paginaSiguiente}>
                    Siguiente
            </button>
        </div>
    );
};