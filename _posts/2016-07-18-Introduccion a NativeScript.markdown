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
- En la plataforma Android los 'taps' fallan.

***Conceptos Base***

- Funciones que se ejecutan durante eventos de las paginas
	- loaded: Se ejecuta tras haber montado el componente y enlaza el modelo con la vista. 
	- mainContentLoaded: Adjunta el contexto o modelo al contenido principal de la pagina.
	- onNavigatingTo: Función que se ejecuta en la invocación de la pagina.

- Parámetros args: Son aquellos que van asociados al componente que genera el evento.

- Componente Screen: Permite obtener las dimensiones de la pagina.

```
import {screen} from "platform";

let vm = new Observable({ 
    width: screen.mainScreen.widthDIPs,
    height: screen.mainScreen.heightDIPs});

// Definición de la clase.
``` 

- Componente Topmost: Se encarga de la navegación y de sobreponer las paginas entre si.

- Layout: Contenedores de elementos para el diseno de la aplicacion.
	- AbsoluteLayout: Contenedor que permite colocar elementos en cualquier posición de la pantalla según la distancia a la parte izquierda y superior de esta, por defecto todos los componentes se alinean en la posición (0,0). Los elementos definidos en este contenedor se sobrepondrán entre si en base al orden que tengan en el Layout.
	- DockLayout: Permite ubicar elementos en base a una orientación dejando el espacio no utilizado libre para los demás componentes.
	- GridLayout: Permite definir Columnas y filas para posicionar los elementos, por defecto solo trae una columna y una fila.
	- StackLayout: Coloca los elementos consecutivamente según la orientación que por defecto es vertical.
	- WrapLayout: Crea filas o columnas para ubicar los elementos según la orientación, al acabarse el espacio en la fila o columna pasa a la siguiente.

```
<AbsoluteLayout>
	<image src="<Direccion de la imagen>" />
	<Label left="20" top="50" text="Este texto esta encima de la imagen con una distancia al margen izquierdo de 20 y superior de 50">
</AbsoluteLayout>

<DockLayout stretchLastChild="true">
   	<Label dock="left" text="left" style="background-color: red; margin: 5;" />
   	<Label dock="top" text="top" style="background-color: lightblue; margin: 5;" />
   	<Label dock="right" text="right" style="background-color: lightgreen; margin: 5;" />
   	<Label dock="bottom" text="bottom" style="background-color: lightpink; margin: 5;" />
   	<Label text="relleno" style="background-color: wheat; margin: 5;" />
</DockLayout>

<GridLayout columns="80, *, auto" rows="auto, *" >
	<Button col="0" />
 	<Button col="1" />
 	<Button col="2" />
	// por defecto las columas y filas estas puestas en 0
	<Button row="1" colSpan="3" />
</GridLayout>

<StackLayout orientation="horizontal">
	<Label text="Label 1" />
	<Label text="Label 2" />
</StackLayout>

<WrapLayout>
    <Label text="Label 1" />
    <Label text="Label 2" />
    <Label text="Label 3" />
    <Label text="Label 4" />
</WrapLayout>
```

	