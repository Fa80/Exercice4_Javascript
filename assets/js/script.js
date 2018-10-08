function afficheIdentité(){
  var nom = document.getElementById("lastname").value;
  var prenom = document.getElementById("firstname").value;
  var ville = document.getElementById("city").value;

  var result = "nom:" + nom + "\nPrénom:" + prenom + "\nVille:"  + ville;

// Conditions pour qu'il nous affiche le message dalert si ce n'est pas un nom.
if(isNaN(nom) && isNaN(prenom) && isNaN(ville)){
  alert(result);
}else{
  alert("Veuillez renseigner les champs correctement !");
  }
};
