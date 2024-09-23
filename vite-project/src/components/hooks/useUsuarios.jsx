import reqResApi from "../../api/reqRes";
import { useEffect, useRef, useState } from "react";

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    const cargarUsuarios = async () => {
        const response = await 
        reqResApi.get('https://reqres.in/api/users',{
            params:{
                page: refPage.current
            }
        })
        .then(resp => {
            if(resp.data.data.length > 0){
                console.log(resp.data.data);
                setUsuarios(resp.data.data);
            }else{
                alert('No hay mas registros...');
            }
        })
        .catch(error => console.log(error))
    }

    const refPage = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const paginaSiguiente = () => {
        refPage.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if(refPage.current > 1){
            refPage.current--;
            cargarUsuarios();
        }else{
            alert('No hay mas registros...');
        }
    }

    return{
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }
}
