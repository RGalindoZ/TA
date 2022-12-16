function getClients(){
    fetch('http://localhost:9000/api/clientes')
        .then(response => response.json())
        .then(data => console.log(data))
}

function getClient(id){
    fetch(`http://localhost:9000/api/clientes/${id}`)
        .then(response => response.json())
        .then(data => console.table(data))
}

getClients();
getClient("639cf16ca0de085d7264ec8c");

