/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console':0*/

/*voorbeeld

var ZoekButton = document.querySelector('img');
var ZoekVeld = document.querySelector('header');

function show () {
    ZoekVeld.classList.toggle('');
}

ZoekButton.addEventListener('click', show);

*/


/*filtermenu*/
function openNav() {
  document.getElementById("myFiltermenu").style.width = "250px";
}

function closeNav() {
  document.getElementById("myFiltermenu").style.width = "0";
}
