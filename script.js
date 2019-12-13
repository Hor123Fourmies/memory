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


var tableauSrc = [];

var place = document.getElementsByClassName('carte');

var boutonNouvellePartie = document.getElementById('boutonNouvellePartie');


boutonNouvellePartie.addEventListener('click', function () {
    location.reload();
});


    for (var i=0; i<12; i++){

        var numCarte = Math.floor(Math.random()*jeuCartes.length);
        carte = jeuCartes[numCarte];
        // place[i].src = jeuCartes[i];
        place[i].src = carte;
        jeuCartes.splice(numCarte,1);

    };


var caseJeu = document.getElementsByClassName('case');

for (let i=0; i<caseJeu.length; i++){

    caseJeu[i].addEventListener('click', function ()

    {
            this.firstElementChild.style.visibility = 'visible';


        tableauSrc.push(this.firstElementChild);

        if (tableauSrc.length === 2) {

            if (tableauSrc[0].src===tableauSrc[1].src)
            {
                //alert('bravo');
                tableauSrc.splice(0,2);
            }

            else
            {
                // alert('erreur');
                setTimeout(function(){
                    tableauSrc[0].style.visibility = 'hidden';
                    tableauSrc[1].style.visibility = 'hidden';
                    tableauSrc.splice(0,2);
                }, 900);


                // .style.visibility = 'hidden';
                // .style.visibility = 'hidden';
            }
        }

    });
}


/*
pos_x = Math.round(Math.random()*820);
pos_y = Math.round(Math.random()*820);

placeImages.style.left = pos_x +"px";
placeImages.style.top = pos_y  +"px";
*/
