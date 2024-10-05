//const personagensContador = document.getElementById("personagens").innerHTML = 22;
//const navesContador = document.getElementById("naves").innerHTML = 22;
//const planetasContador = document.getElementById("planetas").innerHTML = 22;
//const luassContador = document.getElementById("luas").innerHTML = 22;
//
//function preencherContadores(){
//  personagensContador.innerHTML = }

//function swapiGet(){}

const axios = require('axios')

const url = 'https://swapi.dev/api/people/'

async function getRepos() 
{
 axios
 .get(url)
 .then(response => {
  console.log(response.data)
  console.log('sucess')
 } )

 .catch( e=> {
  console.log(e)
  console.log('error')
 })
 .finally(f => {
  console.log('finalizado')
 })
}

getRepos()