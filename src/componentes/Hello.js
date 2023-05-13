import React from 'react';

function Hello(props) {
    console.log(props);
    
    return (
        (!props.pessoa) 
            ?<h1>Hello World!</h1> 
            :(props.pessoa.idade > 18) 
                ?<h1>Hello {props.pessoa.nome} - maior de idade</h1> 
                :<h1>Hello {props.pessoa.nome} - menor de idade</h1> 
    );
}

export default Hello;