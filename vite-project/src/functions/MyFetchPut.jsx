function MyFetchPut(){

    let usuarioActualizado = {
        nombre: 'Aitana',
        edad: 29
    };

    fetch('https://reqres.in/api/users/1',{
        method: 'PUT',
        body: JSON.stringify(usuarioActualizado),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {
        console.log('Error en la peticion API PUT');
        console.log(error);
    });

    return(
        <>
            <div>
                <h1>
                    Programa para FETCH API PUT
                </h1>
            </div>
        </>
    );

}

export default MyFetchPut;