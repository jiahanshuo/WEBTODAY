

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click', close);

function close() {
  overlay.style.display = 'none';
}


var versionjia = document.getElementById('versionjia');
versionjia.addEventListener('click', openjia);


var btnPopupbeziat = document.getElementById('btnPopupbeziat');
var affichebeziat = document.getElementById('affichebeziat');

var btnPopupgoussard = document.getElementById('btnPopupgoussard');
var affichegoussard = document.getElementById('affichegoussard');

var btnPopupcolongue = document.getElementById('btnPopupcolongue');
var affichecolongue = document.getElementById('affichecolongue');

var btnPopuplacour = document.getElementById('btnPopuplacour');
var affichelacour = document.getElementById('affichelacour');

var btnPopupgarnier = document.getElementById('btnPopupgarnier');
var affichegarnier = document.getElementById('affichegarnier');

var btnPopupboudin = document.getElementById('btnPopupboudin');
var afficheboudin = document.getElementById('afficheboudin');

var btnPopuprossaro = document.getElementById('btnPopuprossaro');
var afficherossaro = document.getElementById('afficherossaro');

var btnPopupjanocka = document.getElementById('btnPopupjanocka');
var affichejanocka = document.getElementById('affichejanocka');

var btnPopupjia = document.getElementById('btnPopupjia');
var affichejia = document.getElementById('affichejia');

var btnPopupfaiez = document.getElementById('btnPopupfaiez');
var affichefaiez = document.getElementById('affichefaiez');

var btnPopupithurritz = document.getElementById('btnPopupithurritz');
var afficheithurritz = document.getElementById('afficheithurritz');

var overlay = document.getElementById('overlay');
var affichegoussard = document.getElementById('affichegoussard');


function open() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "block";
  affichebeziat.style.display = "none";
  affichecolongue.style.display = "none";
  affichejia.style.display = "none";
  afficheithurritz.style.display = "none";
  affichefaiez.style.display = "none";
  afficherossaro.style.display = "none";
  afficheboudin.style.display = "none";
  affichejanocka.style.display = "none";
  affichelacour.style.display = "none";
  affichegarnier.style.display = "none";
  btnPopupgoussard.style.backgroundColor = "var(--text-color-normal)";
  btnPopupbeziat.style.backgroundColor = "#F3F0EC";
  btnPopupcolongue.style.backgroundColor = "#F3F0EC";
  btnPopupjia.style.backgroundColor = "#F3F0EC";
  btnPopupithurritz.style.backgroundColor = "#F3F0EC";
  btnPopupfaiez.style.backgroundColor = "#F3F0EC";
  btnPopuprossaro.style.backgroundColor = "#F3F0EC";
  btnPopupboudin.style.backgroundColor = "#F3F0EC";
  btnPopupjanocka.style.backgroundColor = "#F3F0EC";
  btnPopuplacour.style.backgroundColor = "#F3F0EC";
  btnPopupgarnier.style.backgroundColor = "#F3F0EC";
}
btnPopupbeziat.addEventListener('click', openbeziat);

function openbeziat() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "none";
  affichebeziat.style.display = "block";
  affichecolongue.style.display = "none";
  affichejia.style.display = "none";
  afficheithurritz.style.display = "none";
  affichefaiez.style.display = "none";
  afficherossaro.style.display = "none";
  afficheboudin.style.display = "none";
  affichejanocka.style.display = "none";
  affichelacour.style.display = "none";
  affichegarnier.style.display = "none";
  btnPopupgoussard.style.backgroundColor = "#F3F0EC";
  btnPopupbeziat.style.backgroundColor = "var(--text-color-normal)";
  btnPopupcolongue.style.backgroundColor = "#F3F0EC";
  btnPopupjia.style.backgroundColor = "#F3F0EC";
  btnPopupithurritz.style.backgroundColor = "#F3F0EC";
  btnPopupfaiez.style.backgroundColor = "#F3F0EC";
  btnPopuprossaro.style.backgroundColor = "#F3F0EC";
  btnPopupboudin.style.backgroundColor = "#F3F0EC";
  btnPopupjanocka.style.backgroundColor = "#F3F0EC";
  btnPopuplacour.style.backgroundColor = "#F3F0EC";
  btnPopupgarnier.style.backgroundColor = "#F3F0EC";
}
btnPopupcolongue.addEventListener('click', opencolongue);

function opencolongue() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "none";
  affichebeziat.style.display = "none";
  affichecolongue.style.display = "block";
  affichejia.style.display = "none";
  afficheithurritz.style.display = "none";
  affichefaiez.style.display = "none";
  afficherossaro.style.display = "none";
  afficheboudin.style.display = "none";
  affichejanocka.style.display = "none";
  affichelacour.style.display = "none";
  affichegarnier.style.display = "none";
  btnPopupgoussard.style.backgroundColor = "#F3F0EC";
  btnPopupbeziat.style.backgroundColor = "#F3F0EC";
  btnPopupcolongue.style.backgroundColor = "var(--text-color-normal)";
  btnPopupjia.style.backgroundColor = "#F3F0EC";
  btnPopupithurritz.style.backgroundColor = "#F3F0EC";
  btnPopupfaiez.style.backgroundColor = "#F3F0EC";
  btnPopuprossaro.style.backgroundColor = "#F3F0EC";
  btnPopupboudin.style.backgroundColor = "#F3F0EC";
  btnPopupjanocka.style.backgroundColor = "#F3F0EC";
  btnPopuplacour.style.backgroundColor = "#F3F0EC";
  btnPopupgarnier.style.backgroundColor = "#F3F0EC";
}

btnPopupfaiez.addEventListener('click', openfaiez);

function openfaiez() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "none";
  affichebeziat.style.display = "none";
  affichecolongue.style.display = "none";
  affichejia.style.display = "none";
  afficheithurritz.style.display = "none";
  affichefaiez.style.display = "block";
  afficherossaro.style.display = "none";
  afficheboudin.style.display = "none";
  affichejanocka.style.display = "none";
  affichelacour.style.display = "none";
  affichegarnier.style.display = "none";
  btnPopupgoussard.style.backgroundColor = "#F3F0EC";
  btnPopupbeziat.style.backgroundColor = "#F3F0EC";
  btnPopupcolongue.style.backgroundColor = "#F3F0EC";
  btnPopupjia.style.backgroundColor = "#F3F0EC";
  btnPopupithurritz.style.backgroundColor = "#F3F0EC";
  btnPopupfaiez.style.backgroundColor = "var(--text-color-normal)";
  btnPopuprossaro.style.backgroundColor = "#F3F0EC";
  btnPopupboudin.style.backgroundColor = "#F3F0EC";
  btnPopupjanocka.style.backgroundColor = "#F3F0EC";
  btnPopuplacour.style.backgroundColor = "#F3F0EC";
  btnPopupgarnier.style.backgroundColor = "#F3F0EC";
}

btnPopupithurritz.addEventListener('click', openithurritz);

function openithurritz() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "none";
  affichebeziat.style.display = "none";
  affichecolongue.style.display = "none";
  affichejia.style.display = "none";
  afficheithurritz.style.display = "block";
  affichefaiez.style.display = "none";
  afficherossaro.style.display = "none";
  afficheboudin.style.display = "none";
  affichejanocka.style.display = "none";
  affichelacour.style.display = "none";
  affichegarnier.style.display = "none";
  btnPopupgoussard.style.backgroundColor = "#F3F0EC";
  btnPopupbeziat.style.backgroundColor = "#F3F0EC";
  btnPopupcolongue.style.backgroundColor = "#F3F0EC";
  btnPopupjia.style.backgroundColor = "#F3F0EC";
  btnPopupithurritz.style.backgroundColor = "var(--text-color-normal)";
  btnPopupfaiez.style.backgroundColor = "#F3F0EC";
  btnPopuprossaro.style.backgroundColor = "#F3F0EC";
  btnPopupboudin.style.backgroundColor = "#F3F0EC";
  btnPopupjanocka.style.backgroundColor = "#F3F0EC";
  btnPopuplacour.style.backgroundColor = "#F3F0EC";
  btnPopupgarnier.style.backgroundColor = "#F3F0EC";
}

btnPopuplacour.addEventListener('click', openlacour);

function openlacour() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "none";
  affichebeziat.style.display = "none";
  affichecolongue.style.display = "none";
  affichejia.style.display = "none";
  afficheithurritz.style.display = "none";
  affichefaiez.style.display = "none";
  afficherossaro.style.display = "none";
  afficheboudin.style.display = "none";
  affichejanocka.style.display = "none";
  affichelacour.style.display = "block";
  affichegarnier.style.display = "none";
  btnPopupgoussard.style.backgroundColor = "#F3F0EC";
  btnPopupbeziat.style.backgroundColor = "#F3F0EC";
  btnPopupcolongue.style.backgroundColor = "#F3F0EC";
  btnPopupjia.style.backgroundColor = "#F3F0EC";
  btnPopupithurritz.style.backgroundColor = "#F3F0EC";
  btnPopupfaiez.style.backgroundColor = "#F3F0EC";
  btnPopuprossaro.style.backgroundColor = "#F3F0EC";
  btnPopupboudin.style.backgroundColor = "#F3F0EC";
  btnPopupjanocka.style.backgroundColor = "#F3F0EC";
  btnPopuplacour.style.backgroundColor = "var(--text-color-normal)";
  btnPopupgarnier.style.backgroundColor = "#F3F0EC";
}

btnPopupjia.addEventListener('click', openjia);

function openjia() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "none";
  affichebeziat.style.display = "none";
  affichecolongue.style.display = "none";
  affichejia.style.display = "block";
  afficheithurritz.style.display = "none";
  affichefaiez.style.display = "none";
  afficherossaro.style.display = "none";
  afficheboudin.style.display = "none";
  affichejanocka.style.display = "none";
  affichelacour.style.display = "none";
  affichegarnier.style.display = "none";
  btnPopupgoussard.style.backgroundColor = "#F3F0EC";
  btnPopupbeziat.style.backgroundColor = "#F3F0EC";
  btnPopupcolongue.style.backgroundColor = "#F3F0EC";
  btnPopupjia.style.backgroundColor = "var(--text-color-normal)";
  btnPopupithurritz.style.backgroundColor = "#F3F0EC";
  btnPopupfaiez.style.backgroundColor = "#F3F0EC";
  btnPopuprossaro.style.backgroundColor = "#F3F0EC";
  btnPopupboudin.style.backgroundColor = "#F3F0EC";
  btnPopupjanocka.style.backgroundColor = "#F3F0EC";
  btnPopuplacour.style.backgroundColor = "#F3F0EC";
  btnPopupgarnier.style.backgroundColor = "#F3F0EC";
}

btnPopuprossaro.addEventListener('click', openrossaro);

function openrossaro() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "none";
  affichebeziat.style.display = "none";
  affichecolongue.style.display = "none";
  affichejia.style.display = "none";
  afficheithurritz.style.display = "none";
  affichefaiez.style.display = "none";
  afficherossaro.style.display = "block";
  afficheboudin.style.display = "none";
  affichejanocka.style.display = "none";
  affichelacour.style.display = "none";
  affichegarnier.style.display = "none";
  btnPopupgoussard.style.backgroundColor = "#F3F0EC";
  btnPopupbeziat.style.backgroundColor = "#F3F0EC";
  btnPopupcolongue.style.backgroundColor = "#F3F0EC";
  btnPopupjia.style.backgroundColor = "#F3F0EC";
  btnPopupithurritz.style.backgroundColor = "#F3F0EC";
  btnPopupfaiez.style.backgroundColor = "#F3F0EC";
  btnPopuprossaro.style.backgroundColor = "var(--text-color-normal)";
  btnPopupboudin.style.backgroundColor = "#F3F0EC";
  btnPopupjanocka.style.backgroundColor = "#F3F0EC";
  btnPopuplacour.style.backgroundColor = "#F3F0EC";
  btnPopupgarnier.style.backgroundColor = "#F3F0EC";
}

btnPopupboudin.addEventListener('click', openboudin);

function openboudin() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "none";
  affichebeziat.style.display = "none";
  affichecolongue.style.display = "none";
  affichejia.style.display = "none";
  afficheithurritz.style.display = "none";
  affichefaiez.style.display = "none";
  afficherossaro.style.display = "none";
  afficheboudin.style.display = "block";
  affichejanocka.style.display = "none";
  affichelacour.style.display = "none";
  affichegarnier.style.display = "none";
  btnPopupgoussard.style.backgroundColor = "#F3F0EC";
  btnPopupbeziat.style.backgroundColor = "#F3F0EC";
  btnPopupcolongue.style.backgroundColor = "#F3F0EC";
  btnPopupjia.style.backgroundColor = "#F3F0EC";
  btnPopupithurritz.style.backgroundColor = "#F3F0EC";
  btnPopupfaiez.style.backgroundColor = "#F3F0EC";
  btnPopuprossaro.style.backgroundColor = "#F3F0EC";
  btnPopupboudin.style.backgroundColor = "var(--text-color-normal)";
  btnPopupjanocka.style.backgroundColor = "#F3F0EC";
  btnPopuplacour.style.backgroundColor = "#F3F0EC";
  btnPopupgarnier.style.backgroundColor = "#F3F0EC";
}

btnPopupgarnier.addEventListener('click', opengarnier);

function opengarnier() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "none";
  affichebeziat.style.display = "none";
  affichecolongue.style.display = "none";
  affichejia.style.display = "none";
  afficheithurritz.style.display = "none";
  affichefaiez.style.display = "none";
  afficherossaro.style.display = "none";
  afficheboudin.style.display = "none";
  affichejanocka.style.display = "none";
  affichelacour.style.display = "none";
  affichegarnier.style.display = "block";
  btnPopupgoussard.style.backgroundColor = "#F3F0EC";
  btnPopupbeziat.style.backgroundColor = "#F3F0EC";
  btnPopupcolongue.style.backgroundColor = "#F3F0EC";
  btnPopupjia.style.backgroundColor = "#F3F0EC";
  btnPopupithurritz.style.backgroundColor = "#F3F0EC";
  btnPopupfaiez.style.backgroundColor = "#F3F0EC";
  btnPopuprossaro.style.backgroundColor = "#F3F0EC";
  btnPopupboudin.style.backgroundColor = "#F3F0EC";
  btnPopupjanocka.style.backgroundColor = "#F3F0EC";
  btnPopuplacour.style.backgroundColor = "#F3F0EC";
  btnPopupgarnier.style.backgroundColor = "var(--text-color-normal)";
}

btnPopupjanocka.addEventListener('click', openjanocka);

function openjanocka() {
  overlay.style.display = 'block';
  affichegoussard.style.display = "none";
  affichebeziat.style.display = "none";
  affichecolongue.style.display = "none";
  affichejia.style.display = "none";
  afficheithurritz.style.display = "none";
  affichefaiez.style.display = "none";
  afficherossaro.style.display = "none";
  afficheboudin.style.display = "none";
  affichejanocka.style.display = "block";
  affichelacour.style.display = "none";
  affichegarnier.style.display = "none";
  btnPopupgoussard.style.backgroundColor = "#F3F0EC";
  btnPopupbeziat.style.backgroundColor = "#F3F0EC";
  btnPopupcolongue.style.backgroundColor = "#F3F0EC";
  btnPopupjia.style.backgroundColor = "#F3F0EC";
  btnPopupithurritz.style.backgroundColor = "#F3F0EC";
  btnPopupfaiez.style.backgroundColor = "#F3F0EC";
  btnPopuprossaro.style.backgroundColor = "#F3F0EC";
  btnPopupboudin.style.backgroundColor = "#F3F0EC";
  btnPopupjanocka.style.backgroundColor = "var(--text-color-normal)";
  btnPopuplacour.style.backgroundColor = "#F3F0EC";
  btnPopupgarnier.style.backgroundColor = "#F3F0EC";
}

btnPopupgoussard.addEventListener('click', open);
