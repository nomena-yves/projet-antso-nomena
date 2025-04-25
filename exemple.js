/*le DOM (document object model)
* le DOM  c'est une representation de
* votre page HTML,appelé à travers le
mot"document"*/

/* cherche l élement qui a la classe'cercle'*/
const circle = document.querySelector(".cercle");
const powerButton = document.querySelector(".button");
function turnOnOff() {
    /**
     on veut changer la couleur du cercle(cercle): comment
     en ajoutant au cercle
     la classe  
     */
    circle.classList.add('votre-classe');   // Ajouter votre-classe a circle
    circle.classList.remove('votre-classe');    //Retirer votre-classe a circle
    circle.classList.contains('votre-classe');  //verifie si votre-classe est dans circle
    //conttains('X') retourne true si la classe X est presente, et false sinon. 
    
    if (circle.classList.contains('power-on')) {
        circle.classList.remove('power-on');
    }else{
        circle.classList.add('power-on');
    }
}

powerButton.addEventListener('click',turnOnOff)