function MyFetchPost(){

    let usuario = {
        nombre: 'Aitana',
        edad: 25
    }

    fetch('https://reqres.in/api/users/1',{
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {
        console.log('Error en la peticion API POST');
        console.log(error);
    });

    return(
        <>
            <div>
                <h1>
                    Programa para FETCH API POST
                </h1>
            </div>
        </>
    );
};

export default MyFetchPost;