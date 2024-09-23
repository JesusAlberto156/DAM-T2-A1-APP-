function MyFetchPost(){

    let usuario = {
        nombre: 'Jesus',
        edad: 21
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
                <h2  style={{color:'white'}}>
                    Programa para FETCH API POST
                </h2>
            </div>
        </>
    );
};

export default MyFetchPost;