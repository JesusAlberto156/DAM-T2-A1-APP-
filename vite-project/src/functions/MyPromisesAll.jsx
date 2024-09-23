function MyPromisesAll(){

    function fcnSumarUno(numero){
        var promesa = new Promise(function(resolve,reject){
            if(numero >= 7){
                reject('El numero ya es muy alto');
            }
            setTimeout(function(){
                resolve(numero + 1);
            },800);
        });
        return promesa;
    }

    function fcnSumarLento(numero){
        /*var promesa = new Promise(function(resolve, reject){
        });
        return promesa;*/
        return new Promise(function(resolve,reject){
            if(numero >= 5){
                reject('Sumar Lento Fallo');
            }
            setTimeout(function(){
                resolve(numero + 1);
            },800);
        });
    }

    let fcnSumarRapido = (numero) =>{
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(numero + 1);
            },300);
        });
    }

    fcnSumarLento(4)
    .then(respuesta=>{
        console.log('Respuesta Lenta: ',respuesta);
    });

    fcnSumarRapido(10)
    .then(respuesta=>{
        console.log('Respuesta Rapida: ',respuesta);
    });

    //Promise.all([fcnSumarLento(5), fcnSumarRapido(10)])
    //.then(respuestas =>{
    //    console.log('Respuestas: ',respuestas);
    //})

    let arregloVarios = [fcnSumarLento(4), fcnSumarRapido(10), true, '¡Hola Mundo!'];

    Promise.all(arregloVarios)
    .then(respuestas =>{
        console.log('Respuestas: ',respuestas);
    })
    .catch(error=>{
        console.log('Error en todas las promesas: ',error);
    });

    return(
        <>
            <div>
                <h2 style={{color:'white'}}>
                    Programa de Funciones con Promesas All
                </h2>
            </div>
        </>
    );
};

export default MyPromisesAll;