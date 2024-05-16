document.getElementById("btn").onclick = fetch("https://pizza.kando-dev.eu/Pizza").then(function(pizzak){
  return pizzak.json()
}).then(function(adatokTomb){

  adatokTomb.map(function(pizza){
    document.getElementById("container").innerHTML += `<h1> ${pizza.name}</h1>
    <img src="${pizza.kepURL}">
    <p>${pizza.isGlutenFree}</p>`})
    
  })

  document.getElementById("gomb2").onclick = function() {
    let pizza = JSON.stringify({
    
    name:document.getElementById("name").value ,
    isglutenfree:document.getElementById("isglutenfree").value ,
    kepURL:document.getElementById("kepURL").value
  })
    
  fetch('https://pizza.kando-dev.eu/Pizza',{
    method:"POST",
    body: pizza,
    headers:{'Content-Type': 'application/json'}
   })
  .then(function(valasz){
    return valasz.json();
  })

}