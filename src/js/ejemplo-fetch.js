 const jokeUrl = 'https://api.chucknorris.io/jokes/random';

 // OPCION 1
//  fetch( jokeUrl ).then( resp => {
    
//     resp.json().then( ({ id, value}) => {
//         console.log( id );
//         console.log( value );
//     });
//  });


// OPCION 2
//  fetch( jokeUrl )
//     .then( resp => resp.json() )
//     .then( ({ id, value }) => {
//         console.log( id, value );
//     });