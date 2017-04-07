function mainMenu() {
	document.getElementById("main-menu").innerHTML = '<a href="http://gttest.tk/"><div class="top-menu-item inicio">Inicio</div></a><div class="top-menu-item dropdown traducciones">Traducciones<div class="dropdown-content"><a href="http://gttest.tk/stellaglow"><div class="dropdown-item" id="stella-dropdown"><img src="http://gttest.tk/images/game-sg.jpg">Stella Glow <p class="state-dropdown">Finalizado</p></div></a><a href="http://gttest.tk/"><div class="dropdown-item" id="stella-dropdown"><img src="http://gttest.tk/images/game-rf4.jpg">Rune Factory 4 <p class="state-dropdown">Empezando</p></div></a></div></div><a href="http://gttest.tk/"><div class="top-menu-item contacto">Contacto</div></a><a href="http://gttest.tk/"><div class="top-menu-item miembros">Miembros</div></a>';
	}
function stellaGlowSubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://gttest.tk/"><div class="logo"></div></a><div class="sub-menu"><a href="http://gttest.tk/"><div class="sub-menu-item informacion">Información</div>				</a><a href="http://gttest.tk/"><div class="sub-menu-item progresos">Progresos</div></a>				<a href="http://gttest.tk/"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://gttest.tk/stellaglow/downloads.html"><div class="sub-menu-item descargas">Descargas</div></a>				<a href="http://gttest.tk/"><div class="sub-menu-item creditos">Créditos</div></a></div>';
}
function runeFactorySubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://gttest.tk/"><div class="logo"></div></a><div class="sub-menu"><a href="http://gttest.tk/"><div class="sub-menu-item informacion">Información</div>				</a><a href="http://gttest.tk/"><div class="sub-menu-item progresos">Progresos</div></a>				<a href="http://gttest.tk/"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://gttest.tk/stellaglow/downloads.html"><div class="sub-menu-item descargas">Descargas</div></a>				<a href="http://gttest.tk/"><div class="sub-menu-item creditos">Créditos</div></a></div>';
}
function noSubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://gttest.tk/"><div class="logo"></div></a>';
}
function footer() {	
	document.getElementById("footer").innerHTML =  'This is a nonprofit and public project by users for users. On this site you will not find any link to download the game or the demo, only the patch to translate the game into Spanish. ';
}
// Estructura del menu limpia ----------------
//<div class="sub-menu">
//				<a href="http://gttest.tk/"><div class="sub-menu-item">Información</div></a>
//				<a href="http://gttest.tk/"><div class="sub-menu-item">Progresos</div></a>
//				<a href="http://gttest.tk/"><div class="sub-menu-item">Galería</div></a>
//				<a href="http://gttest.tk/"><div class="sub-menu-item">Descargas</div></a>
//				<a href="http://gttest.tk/"><div class="sub-menu-item">Créditos</div></a>
//			</div>

//			<a href="http://gttest.tk/"><div class="top-menu-item">Inicio</div></a>
//			<div class="top-menu-item dropdown">
//				Traducciones
//				<div class="dropdown-content">
//					<a href="http://gttest.tk/"><div class="dropdown-item" id="stella-dropdown"><img src="images/game-sg.jpg">Stella Glow <p class="state-dropdown">Finalizado</p></div></a>
//					<a href="http://gttest.tk/"><div class="dropdown-item" id="stella-dropdown"><img src="images/game-rf4.jpg">Rune Factory 4 <p class="state-dropdown">Empezando</p></div></a>
//		 	 </div>
//			</div>
//			<a href="http://gttest.tk/"><div class="top-menu-item">Contacto</div>
//			</a>
//			<a href="http://gttest.tk/"><div class="top-menu-item">Miembros</div></a>


// Instrucciones de uso ------------------
// a ver retard <3 
// Tienes 5 funciones, esas 5 funciones ponen un menu que especifica mas abajo (En el document.getElementById)
// Para editar el contenido de los menus editalo como si fuera HTML el contenido que esta entre las 2 comillas ''
// Para cambiar el menu en el documento HTML simplemente fijate en la etiqueta body, tiene un atributo llamado "onload" que cargara cualquier funcion establecida en este documento al cargarse la web
// Solo tienes que cambiar la funcion, de momento hay 3 menus, stellaGlowSubMenu (Stella glow), runeFactorySubMenu (Rune Factory) y noSubMenu (Ningun menu, solo carga el logo).
// El Footer no creo que tengas que cambiarlo, pero en ese caso es solo texto plano.
// Te recomiendo borrar esto despues de leerlo y guardartelo en algun sitio que sepas para que cuando yo no este sepas como va.


