var planete1 = 'images/Preview_40.png';
var planete2 = 'images/Preview_40.png';
var planete3 = 'images/preview_16_1.jpg';
var planete4 = 'images/preview_16_1.jpg';
var planete5 = 'images/1368635432912.jpg';
var planete6 = 'images/1368635432912.jpg';
var planete7 = 'images/testplanet.png';
var planete8 = 'images/testplanet.png';
var planete9 = 'images/thumb2.jpg';
var planete10 = 'images/thumb2.jpg';
var planete11 = 'images/backgroundSpace_01.1.png';
var planete12 = 'images/backgroundSpace_01.1.png';


var dosImage = 'images/preview-trees-and-bushesx2.png';


var jeuCartes = [planete1, planete2, planete3, planete4, planete5, planete6,
                planete7, planete8, planete9, planete10, planete11, planete12];


var place = document.getElementsByClassName('carte');

var place1 = document.getElementById('place1');
var place2 = document.getElementById('place2');
var place3 = document.getElementById('place3');
var place4 = document.getElementById('place4');
var place5 = document.getElementById('place5');
var place6 = document.getElementById('place6');
var place7 = document.getElementById('place7');
var place8 = document.getElementById('place8');
var place9 = document.getElementById('place9');
var place10 = document.getElementById('place10');
var place11 = document.getElementById('place11');
var place12 = document.getElementById('place12');

var boutonNouvellePartie = document.getElementById('boutonNouvellePartie');

boutonNouvellePartie.addEventListener('click', function () {

});



    for (var i=0; i<12; i++){

        var numCarte = Math.floor(Math.random()*jeuCartes.length);
        carte = jeuCartes[numCarte];
        // place[i].src = jeuCartes[i];
        place[i].src = carte;
        jeuCartes.splice(numCarte,1);

    };


var caseJeu = document.getElementsByClassName('case');


for (var i=0; i<caseJeu.length; i++){

    caseJeu[i].addEventListener('click', function () {
        this.firstElementChild.style.visibility = 'visible';
        console.log(this.firstElementChild);


        if (planete1==='visible'&& planete2==='visible'){
            alert('bravo');
        }

/*
        switch (jeuCartes) {
            case planete1 === planete2:
            case planete3 === planete4:
            case planete5 === planete6:
            case planete7 === planete8:
            case planete9 === planete10:
            case planete11 === planete12:
                alert('bravo');
                break;
            default:
                this.firstElementChild.style.visibility = 'invisible';
                break;
        }
*/
    });

}




/*

carteJeu.addEventListener('click', function () {
    carteJeu.style.visibility = 'visible';
});


console.log(caseJeu);

*/






/*

place1.src = jeuCartes[0];
place2.src = jeuCartes[1];
place3.src = jeuCartes[2];
place4.src = jeuCartes[3];
place5.src = jeuCartes[4];
place6.src = jeuCartes[5];
place7.src = jeuCartes[6];
place8.src = jeuCartes[7];
place9.src = jeuCartes[8];
place10.src = jeuCartes[9];
place11.src = jeuCartes[10];
place12.src = jeuCartes[11];

*/

/*




/*
pos_x = Math.round(Math.random()*820);
pos_y = Math.round(Math.random()*820);

placeImages.style.left = pos_x +"px";
placeImages.style.top = pos_y  +"px";
*/
