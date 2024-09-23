function MyFetchPut(){

    let usuarioActualizado = {
        nombre: 'Jesus',
        edad: 23
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
                <h2 style={{color:'white'}}>
                    Programa para FETCH API PUT
                </h2>
            </div>
        </>
    );

}

export default MyFetchPut;