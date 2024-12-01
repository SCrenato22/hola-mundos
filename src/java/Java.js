

const btnAdd = document.getElementById('btnAdd');
const randombtn = document.getElementById('randombtn');
const lcanciones = document.getElementById('lcanciones');
const inputsong = document.getElementById('inputsong');
const cancion = [ "Las Olas","Libertad","Galán de Combi"];
let x;

btnAdd.addEventListener('click', () => {
  const newpai= inputsong.value.trim(); 
  if (newpai) {
   
    const newele = document.createElement('li');
    newele.textContent = newpai;

 
    lcanciones.appendChild(newele);

   
    inputsong.value = '';
  } else {
    alert('');
  }
});
randombtn.addEventListener ('click', () =>{
for (let i= cancion.length - 1;i>0;i--){
x=cancion[(Math.floor(Math.random()*(i+1)))];

document.getElementById('lcanciones').value=x
}})

