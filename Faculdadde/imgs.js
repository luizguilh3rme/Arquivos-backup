function carregarImagens1() {
    let url = "https://dog.ceo/api/breeds/image/random" 
    fetch(url, {
        method: 'get'
    })
    .then(function(response) {
        response.json().then(function(data) {
            console.log('Resultado da requisição: ' + data.message);

            var imgdog = document.getElementById("img_");
            imgdog.src = data.message;
        } );
    } )
    .catch(function(err) {
        console.error('O seguinte erro ocorreu durante  a requisição: ' + err);
    } );
    

}