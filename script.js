// Implementar el código aqui


const form = document.querySelector('form');
console.log(form)

// Escuchar el evento 'submit'

form.addEventListener('submit', function(e){

const height = document.querySelector("#height").value
const weight = document.querySelector("#weight").value

height = height *100
height = height * height
let resultado = weight / height

let mensaje = document.getElementById("mensaje").textContent
document.mensaje.textContent = resultado



});
