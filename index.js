let turno = false; // Variable turno

const handleClick = (event) =>{ // parametro el evento
    const { id } = event.target; 
    const div = document.getElementById(id); //obtenemos el id
    div.innerText ="O"; // ponemos o


};