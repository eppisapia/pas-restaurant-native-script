---
layout: post
title:  "Introducción a Native Script"
date:   2016-07-18 13:52:50 -0430
categories: jekyll update
permalink: /introducción/
---

Es un framework de desarrollo elaborado por Telerik que utiliza JavaScript, Cascade Style Sheet (CSS) y XML para la construcción de aplicaciones móviles nativas (iOS, Android)

***Características:***

 - Utiliza los componentes nativos de la plataforma móvil accediendo a estos con el uso de "NativeScript Modules Layer" que abstrae la interacción con estos componentes.
 - Se pueden utilizar los lenguajes:
 	- JavaScript o TypeScript
 	- XML o HTML
 	- CSS
 - Se puede utilizar la arquitectura de diseño [Model View Controler (MVC)](http://www.oracle.com/technetwork/articles/javase/index-142890.html) o [Model View View-Model (MVVM)](https://msdn.microsoft.com/en-us/library/hh848246.aspx)
 - Funciona como un mecanismo de traducción de instrucciones JavaScript en instrucciones nativas según la plataforma que ejecute la aplicación, esto lo logra ejecutando el código en un [JavaScript VM](http://developer.telerik.com/featured/a-guide-to-javascript-engines-for-idiots/)  que incluye los core para las plataformas:
	 - JavaScriptCore en iOS.
	 - V8 en Android.
	 - JavaScriptCore en Windows.

- Se basa en utilizar los componentes nativos de la plataforma.
- Se apoya en Angular para el desarrollo de aplicaciones.

***Documentación:***

- Telerik provee de documentación para el uso de los componentes, acceso y librerías.
- Posee un foro que presenta un soporte autorizado para solucionar incidencias y bugs.

***Desempeño***

- Interpreta a tiempo real el código js en el JavaVirtualMachine.
- Accede directamente a los componentes nativos del teléfono.
- Utiliza un renderizador propio para integrar las vistas como elementos visibles de nativescript.
- No utiliza [DOM](http://html.conclase.net/w3c/dom1-es/introduction.html)

***Integración del Código***

- Manejo automático del estilo de la pantalla al cambiar la orientación.
- Uso de widgets para la reutilización de plantillas/componentes.

***Incidencias***

- Uso incompleto de CSS.
- Se considera inestable.
- Código diferente para iOS/Android
- "Bugs" al utilizar librerías/Api externos a telerik

***Conceptos Base***

- Funciones que se ejecutan durante eventos de carga de las paginas
	- loaded: Se ejecuta tras haber montado el componente y enlaza el modelo con la vista. 
	- mainContentLoaded: Adjunta el contexto o modelo al contenido principal de la pagina.

- Parámetros args: Son aquellos que van asociados al componente que genera el evento.

- Layout: 