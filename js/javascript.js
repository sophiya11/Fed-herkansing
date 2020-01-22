/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console':0*/

/*voorbeeld

var ZoekButton = document.querySelector('img');
var ZoekVeld = document.querySelector('header');

function show () {
    ZoekVeld.classList.toggle('show-search');
}

ZoekButton.addEventListener('click', show);

*/


var filterKnop = document.querySelector('.filtericon');
var filterMenu = document.querySelector('.filtermenu');

function show(){
    filterMenu.classList.toggle('show-filters');
}

filterKnop.addEventListener('click',show);


/*
filterKnop.addEventListener('click',function(){
    filterMenu.classList.toggle('show-filters');
});
*/



